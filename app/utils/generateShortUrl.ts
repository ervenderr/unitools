const base62Chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateShortUrl(length = 6) {
  let shortUrl = '';
  for (let i = 0; i < length; i++) {
    shortUrl += base62Chars.charAt(Math.floor(Math.random() * base62Chars.length));
  }
  return shortUrl;
}

export default generateShortUrl;