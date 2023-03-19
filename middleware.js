import { NextResponse } from 'next/server';

export function middleware(req) {
  const urls = ['/myrecipes', '/savedrecipes'];
  const jwt = req.cookies.get('jwt');

  if (urls.includes(req.nextUrl.pathname)) {
    if (!jwt) {
      return NextResponse.rewrite(new URL('/signin', req.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/((?!_next/static|_next/image|/*.svg|favicon.ico).*)',
};
