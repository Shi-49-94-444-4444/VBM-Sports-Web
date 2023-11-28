"use client"

import { LoadingActionWallet } from "@/app/components";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function VnPayCallback() {
    const router = useRouter();
    const { vnp_ResponseCode, vnp_TransactionStatus } = router.query

    useEffect(() => {
        if (vnp_ResponseCode && vnp_TransactionStatus) {
            if (vnp_ResponseCode == "00" && vnp_TransactionStatus == "00") {
                router.push('/user/wallet/wallet-success')
                window.opener.postMessage('payment completed', '*')
            } else {
                router.push('/user/wallet/wallet-fail')
                window.opener.postMessage('payment completed', '*')
            }
        }
    }, [router, vnp_ResponseCode, vnp_TransactionStatus])

    return (
        <div className="h-screen flex items-center justify-center">
            <LoadingActionWallet loading={true} />
        </div>
    )
}
