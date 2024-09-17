import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { image } = await request.json();

    if (!image) {
      return NextResponse.json({ message: 'No image data provided' }, { status: 400 });
    }

    const formData = new FormData();
    formData.append('image_file_b64', image);

    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': process.env.REMOVE_BG_API_KEY || '',
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Remove.bg API error:', errorData);
      return NextResponse.json({ message: `Remove.bg API error: ${errorData}` }, { status: response.status });
    }

    const data = await response.arrayBuffer();
    const base64data = Buffer.from(data).toString('base64');

    return NextResponse.json({ image: `data:image/png;base64,${base64data}` });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ message: `Server error: ${error}` }, { status: 500 });
  }
}