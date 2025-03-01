import { NextResponse } from "next/server";
 
let locales = ['vi', 'en', 'ko']
 
function getLocale(request) { 
  console.log("Checking locale...");
    const locale = request.cookies.get("NEXT_LOCALE")?.value;
    if(locale && locales.includes(locale)) return locale;
    return 'vi';
 }
 
export function middleware(request) {
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
 
  if (pathnameHasLocale) return;
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}
 
export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
}