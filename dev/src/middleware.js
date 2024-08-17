import { NextResponse } from 'next/server'
import { getCookie } from 'cookies-next';
import { cc } from './app/login/page';

export function middleware(request) {

let vv = cc;
console.log(vv)
console.log("middleware is executed")
  //return NextResponse.redirect(new URL('/', request.url))

}
 
export const config = {
  matcher: '/register/:path*',
}