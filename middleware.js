import { NextResponse } from 'next/server';

export function middleware(request) {
  const protectedUrls = ['/myrecipes', '/savedrecipes'];
  const authUrls = ['/signin', '/signup'];
  const jwt = request.cookies.get('jwt');

  if (jwt) {
    if (authUrls.includes(request.nextUrl.pathname)) {
      return NextResponse.rewrite(new URL('/', request.url));
    }
  } else {
    if (protectedUrls.includes(request.nextUrl.pathname)) {
      return NextResponse.rewrite(new URL('/signin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|/*.svg|favicon.ico).*)',
};
