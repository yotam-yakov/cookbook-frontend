import { NextResponse } from 'next/server';
import { Headers } from 'next/headers';

export function middleware(req) {
  const urls = ['/myrecipes', '/savedrecipes'];
  const jwt = req.cookies.get('jwt');

  if (urls.includes(req.nextUrl.pathname)) {
    if (!jwt) {
      return NextResponse.rewrite(new URL('/signin', req.url));
    }
    const headers = Headers(req.headers);
    headers.set('authorization', `Bearer ${jwt}`);
    return NextResponse.next({
      request: {
        headers: headers,
      },
    });
  }
}

export const config = {
  matcher: '/((?!_next/static|_next/image|/*.svg|favicon.ico).*)',
};
