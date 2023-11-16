"use client"

import React, { FC, createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { ListProductData } from '@/types'
import { useRouter } from 'next/router'
import { deleteTransactionService } from '@/services'

interface GlobalStateProps {
    children: React.ReactNode
}

interface User {
    id?: string
    fullName?: string | null
    email?: string | null
    avatar?: string | null
    playingArea?: string[] | null
    playingLevel?: number | null
    playingWay?: string[] | null
    token?: string | null
    isNewUser?: boolean | null
    phoneNumber?: string | null
    sortProfile?: string | null
    userName?: string | null
    userAddress?: string | null
    balance?: number | null
    displayName?: string | null
    stsTokenManager?: {
        accessToken?: string | null
    }
    uid?: string | null
}

interface GlobalContextProps {
    isAuthUser: boolean | null
    setIsAuthUser: React.Dispatch<React.SetStateAction<boolean | null>>
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
    isLoading: boolean | null
    setIsLoading: React.Dispatch<React.SetStateAction<boolean | null>>
    isLoadingPage: boolean | null
    setIsLoadingPage: React.Dispatch<React.SetStateAction<boolean | null>>
    showMenu: boolean | null
    setShowMenu: React.Dispatch<React.SetStateAction<boolean | null>>
    searchValue: string | null
    setSearchValue: React.Dispatch<React.SetStateAction<string | null>>
    searchResults: ListProductData[] | null
    setSearchResults: React.Dispatch<React.SetStateAction<ListProductData[] | null>>
    routeUrl: string | null
    setRouteUrl: React.Dispatch<React.SetStateAction<string | null>>
    transactionId: string | null
    setTransactionId: React.Dispatch<React.SetStateAction<string | null>>
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);

const GlobalState: FC<GlobalStateProps> = ({ children }) => {
    const router = useRouter()
    const [isAuthUser, setIsAuthUser] = useState<boolean | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean | null>(false);
    const [isLoadingPage, setIsLoadingPage] = useState<boolean | null>(false);
    const [showMenu, setShowMenu] = useState<boolean | null>(false)
    const [searchValue, setSearchValue] = useState<string | null>("")
    const [searchResults, setSearchResults] = useState<ListProductData[] | null>([])
    const [routeUrl, setRouteUrl] = useState<string | null>(null)
    const [transactionId, setTransactionId] = useState<string | null>(null)

    useEffect(() => {
        if (Cookies.get('token') !== undefined) {
            setIsAuthUser(true)
            const userData = JSON.parse(localStorage.getItem('user')!) || {}
            const transactionData = JSON.parse(localStorage.getItem('transactionId')!) || {}
            setUser(userData)
            setTransactionId(transactionData)
        } else {
            setIsAuthUser(false)
            setUser(null)
        }
    }, [])

    useEffect(() => {
        const handleRoutePayment = async (url: string) => {
            if (transactionId !== null && router.asPath.startsWith("/product/payment/") && !url.startsWith("/product/payment/")) {
                await deleteTransactionService({ tran_id: Number(transactionId) })
                setTransactionId(null)
                localStorage.removeItem("transactionId")
            }
        }

        router.events.on('routeChangeStart', handleRoutePayment)

        return () => {
            router.events.off('routeChangeStart', handleRoutePayment)
        }
    }, [router, transactionId])

    return (
        <GlobalContext.Provider
            value={{
                isAuthUser,
                setIsAuthUser,
                user,
                setUser,
                isLoading,
                setIsLoading,
                isLoadingPage,
                setIsLoadingPage,
                setShowMenu,
                showMenu,
                searchResults,
                searchValue,
                setSearchResults,
                setSearchValue,
                routeUrl,
                setRouteUrl,
                setTransactionId,
                transactionId
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;