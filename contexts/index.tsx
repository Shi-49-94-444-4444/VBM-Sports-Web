"use client"

import React, { FC, createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { ListProductData } from '@/types'
import { useRouter } from 'next/navigation'
import { getUserService } from '@/services'

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
    role?: "User" | "Staff" | "Admin"
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
    isLoadingModal: boolean | null
    setIsLoadingModal: React.Dispatch<React.SetStateAction<boolean | null>>
    isLoadingPage: boolean | null
    setIsLoadingPage: React.Dispatch<React.SetStateAction<boolean | null>>
    showMenu: boolean | null
    setShowMenu: React.Dispatch<React.SetStateAction<boolean | null>>
    isRefresh: boolean | null
    setIsRefresh: React.Dispatch<React.SetStateAction<boolean | null>>
    fetchUser: boolean | null
    setFetchUser: React.Dispatch<React.SetStateAction<boolean | null>>
    searchValue: string | null
    setSearchValue: React.Dispatch<React.SetStateAction<string | null>>
    searchResults: ListProductData[] | null
    setSearchResults: React.Dispatch<React.SetStateAction<ListProductData[] | null>>
    roomId: string | null
    setRoomId: React.Dispatch<React.SetStateAction<string | null>>
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);

const GlobalState: FC<GlobalStateProps> = ({ children }) => {
    const router = useRouter()
    const [isAuthUser, setIsAuthUser] = useState<boolean | null>(null)
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState<boolean | null>(false)
    const [isLoadingModal, setIsLoadingModal] = useState<boolean | null>(false)
    const [isLoadingPage, setIsLoadingPage] = useState<boolean | null>(false)
    const [showMenu, setShowMenu] = useState<boolean | null>(false)
    const [isRefresh, setIsRefresh] = useState<boolean | null>(false)
    const [fetchUser, setFetchUser] = useState<boolean | null>(false)
    const [searchValue, setSearchValue] = useState<string | null>("")
    const [searchResults, setSearchResults] = useState<ListProductData[] | null>([])
    const [roomId, setRoomId] = useState<string | null>(null)

    useEffect(() => {
        if (Cookies.get('token') !== undefined) {
            setIsAuthUser(true)
            const userData = JSON.parse(localStorage.getItem('user')!) || {}
            setUser(userData)
        } else {
            setIsAuthUser(false)
            setUser(null)
        }
    }, [])

    useEffect(() => {
        const fetch = async() => {
            if (user && user.id) {
                const res = await getUserService({ user_id: user.id})
                localStorage.setItem('user', JSON.stringify(res.data))
                setUser(res.data)
            }
        }
    
        if (fetchUser) {
            fetch()
            setFetchUser(false)
        }
    
        const intervalId = setInterval(fetch, 5 * 60 * 1000)
    
        return () => clearInterval(intervalId)
    }, [fetchUser, user])

    useEffect(() => {
        if (isRefresh) {
            router.refresh()
            setIsRefresh(false)
        }
    }, [isRefresh, router])

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
                isLoadingModal,
                setIsLoadingModal,
                isRefresh,
                setIsRefresh,
                roomId,
                setRoomId,
                fetchUser,
                setFetchUser
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;