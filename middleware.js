import { NextResponse } from 'next/server';

export function middleware(req) {
  console.log(req.cookies.get('jwt'));
  const urls = ['/myrecipes', '/savedrecipes'];

  if (urls.includes(req.nextUrl.pathname) && !req.cookies.get('jwt')) {
    return NextResponse.rewrite(new URL('/signin', req.url));
  }
}

export const config = {
  matcher: '/((?!_next/static|_next/image|/*.svg|favicon.ico).*)',
};
