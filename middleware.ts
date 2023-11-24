import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose'

export async function middleware(req: NextRequest) {
    const cookies = req.cookies.get("token")
    const token = cookies?.value

    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const url = req.nextUrl

    try {
        if (url.pathname.includes("/user/setting-profile") ||
            url.pathname.includes("/user/setting-ban") ||
            url.pathname.includes("/user/setting-security") ||
            url.pathname.includes("/user/setting-notify") ||
            url.pathname.includes("/product/post-product")) {
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

        if (url.pathname.includes("/register-stepper")) {
            if (token) {
                const { payload } = await jose.jwtVerify(token, secret)
                if (!payload.IsNewUser || payload.IsNewUser === "False") {
                    return NextResponse.redirect(`${url.origin}/`)
                }
            }
        }
    } catch (e) {
        //console.log(e)
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
        "/product/post-product",
        "/login",
        "/register",
        "/forgot-password",
        "/change-password",
        "/verify-otp",
        "/register-stepper"
    ],
}
