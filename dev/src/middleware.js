import { NextResponse } from 'next/server'
import { value } from './app/login/page'

 
export function middleware(request) {

    console.log("middleware is executed")
   //return NextResponse.redirect(new URL('/', request.url))
    console.log(value)

}
 
export const config = {
  matcher: '/register/:path*',
}