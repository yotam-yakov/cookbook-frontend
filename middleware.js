import { NextResponse } from 'next/server';

export function middleware(req) {
  console.log(req.nextUrl);
  const urls = ['/myrecipes', '/savedrecipes'];

  if (urls.includes(req.nextUrl.pathname)) {
    return NextResponse.rewrite(new URL('/signin', req.url));
  }
}

export const config = {
  matcher: ['/', '/signin', '/myrecipes', '/savedrecipes'],
};
