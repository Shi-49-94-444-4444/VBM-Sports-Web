import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose'

export async function middleware(req: NextRequest) {
    const cookies = req.cookies.get("token")
    const token = cookies?.value

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const url = req.nextUrl

    if (token) {
        const { payload } = await jose.jwtVerify(token, secret)
        console.log(payload.IsNewUser)
    }

    try {
        if (url.pathname.includes("/user/setting-profile") ||
            url.pathname.includes("/user/setting-ban") ||
            url.pathname.includes("/user/setting-security") ||
            url.pathname.includes("/user/setting-notify") ||
            url.pathname.includes("/product/payment/") ||
            url.pathname.includes("/product/post-badminton")) {
            if (!token) {
                return NextResponse.redirect(`${url.origin}/unauthorized`)
            }
        }

        if (url.pathname.includes("/login") ||
            url.pathname.includes("/register") ||
            url.pathname.includes("/forgot-password")) {
            if (token) {
                const { payload } = await jose.jwtVerify(token, secret)
                if (payload.OTP) {
                    return NextResponse.next()
                }
            }
        }

        if (url.pathname.includes("/change-password") ||
            url.pathname.includes("/verify-otp")) {
            if (token) {
                const { payload } = await jose.jwtVerify(token, secret)
                if (!payload.OTP) {
                    return NextResponse.redirect(`${url.origin}/`)
                }
            }
        }

        if (url.pathname.includes("/register-stepper")) {
            if (token) {
                const { payload } = await jose.jwtVerify(token, secret)
                if (!payload.IsNewUser || payload.IsNewUser === "False") {
                    return NextResponse.redirect(`${url.origin}/`)
                }
            }
        }
    } catch (e) {
        console.log(e)
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
        "/product/payment/:path*",
        "/product/post-badminton",
        "/login",
        "/register",
        "/forgot-password",
        "/change-password",
        "/verify-otp",
        "/register-stepper"
    ],
}
