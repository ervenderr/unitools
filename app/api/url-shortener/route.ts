import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { UrlRepository } from '../../repositories/UrlRepository';
import connectDB from '../../config/db';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || !/^https?:\/\/.+/i.test(url)) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    await connectDB();

    const urlRepository = new UrlRepository();

    // Check if the URL already exists in the DB
    const existingUrl = await urlRepository.getUrlByOriginalUrl(url);
    if (existingUrl) {
      return NextResponse.json({ shortUrl: `${process.env.BASE_URL}/${existingUrl.shortId}` });
    }

    // Generate a short URL ID
    const shortId = nanoid(7);
    await urlRepository.createUrl(url, shortId);

    return NextResponse.json({ shortUrl: `${process.env.BASE_URL}/${shortId}` });
  } catch (error) {
    console.error('Error in URL shortener API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
