import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
    const cookies = req.cookies.get("token")
    const token = cookies?.value

    const secret = process.env.JWT_SECRET ?? ""
    const url = req.nextUrl

    try {
        if (url.pathname.includes("/user/setting-profile") ||
            url.pathname.includes("/user/setting-ban") ||
            url.pathname.includes("/user/setting-security") ||
            url.pathname.includes("/user/setting-notify") ||
            url.pathname.includes("product/payment") ||
            url.pathname.includes("/product/post-badminton")) {
            if (!token) {
                return NextResponse.redirect(`${url.origin}/unauthorized`)
            }
        }

        if (url.pathname.includes("/login") ||
            url.pathname.includes("/register") ||
            url.pathname.includes("/forgot-password")) {
            if (token) {
                const decoded = jwt.verify(token, secret)
                if (typeof decoded === 'object' && 'otp' in decoded) {
                    if (decoded.otp) {
                        return NextResponse.next()
                    } else {
                        return NextResponse.redirect(`${url.origin}/`)
                    }
                }
            }
        }

        if (url.pathname.includes("/change-password") ||
            url.pathname.includes("/verify-otp")) {
            if (token) {
                const decoded = jwt.verify(token, secret)
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
        "/user/setting-ban",
        "/user/setting-profile",
        "/user/setting-notify",
        "/user/setting-security",
        "/product/payment",
        "/product/post-badminton",
        "/login",
        "/register",
        "/forgot-password",
        "/change-password",
        "/verify-otp",
        "/register-stepper"
    ],
}
