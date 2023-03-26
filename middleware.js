import { NextResponse } from 'next/server';

export function middleware(request) {
  const urls = ['/myrecipes', '/savedrecipes'];
  const jwt = request.cookies.get('jwt');

  if (urls.includes(request.nextUrl.pathname)) {
    if (!jwt) {
      return NextResponse.rewrite(new URL('/signin', request.url));
    }
    return NextResponse.next();
  }
}

export const config = {
  matcher: '/((?!_next/static|_next/image|/*.svg|favicon.ico).*)',
};
