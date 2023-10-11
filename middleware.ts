import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken';
import Cookies from 'js-cookie';

export function middleware(req: NextRequest) {
    const token = Cookies.get('token')
    const secret = process.env.JWT_SECRET ?? ""
    const url = req.nextUrl

    try {
        if (url.pathname.includes("/setting") || url.pathname.includes("/payment/:path*") || url.pathname.includes("/post-new")) {
            if (!token) {
                return NextResponse.redirect(`${url.origin}/unauthorized`)
            }
        }

        if (url.pathname.includes("/login") || url.pathname.includes("/register") || url.pathname.includes("/forgot-password")) {
            if (token) {
                return NextResponse.redirect(`${url.origin}/`)
            }
        }

        if (url.pathname.includes("/change-password") || url.pathname.includes("/verify-otp")) {
            if (token) {
                const decoded = jwt.verify(token, secret)
                console.log("decoded: ",decoded)
                if (typeof decoded === 'object' && 'otp' in decoded) {
                    if (!decoded.otp) {
                        return NextResponse.redirect(`${url.origin}/`)
                    }
                }
            } else {
                return NextResponse.redirect(`${url.origin}/`)
            }
        }

        if (url.pathname.includes("/register-stepper")) {
            if (token) {
                const decoded = jwt.verify(token, secret)
                console.log("decoded: " ,decoded)
                if (typeof decoded === 'object' && 'isNewUser' in decoded) {
                    if (!decoded.isNewUser) {
                        return NextResponse.redirect(`${url.origin}/`)
                    }
                }
            } else {
                return NextResponse.redirect(`${url.origin}/`)
            }
        }
    } catch (e) {
        return NextResponse.redirect(`${url.origin}/`)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/setting",
        "/payment/:path*",
        "/post-new",
        "/login",
        "/register",
        "/forgot-password",
        "/change-password",
        "/verify-otp",
        "/register-stepper"
    ],
}
