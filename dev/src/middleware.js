import { NextResponse } from 'next/server'

export function middleware(request) {

    console.log("middleware is executed")
  
   //return NextResponse.redirect(new URL('/', request.url))

}
 
export const config = {
  matcher: '/register/:path*',
}