import { NextResponse } from 'next/server'

export const middleware = async (request: Request) => {
  return NextResponse.redirect(new URL('/', request.url))
}

export default middleware

export const config = {
  matcher: '/home',
}
