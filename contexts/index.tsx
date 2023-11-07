"use client"

import React, { FC, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { ListProduct } from '@/types';

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
    searchResults: ListProduct[] | null
    setSearchResults: React.Dispatch<React.SetStateAction<ListProduct[] | null>>
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);

const GlobalState: FC<GlobalStateProps> = ({ children }) => {
    const [isAuthUser, setIsAuthUser] = useState<boolean | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean | null>(false);
    const [isLoadingPage, setIsLoadingPage] = useState<boolean | null>(false);
    const [showMenu, setShowMenu] = useState<boolean | null>(false)
    const [searchValue, setSearchValue] = useState<string | null>("")
    const [searchResults, setSearchResults] = useState<ListProduct[] | null>([])

    useEffect(() => {
        if (Cookies.get('token') !== undefined) {
            setIsAuthUser(true)
            const userData = JSON.parse(localStorage.getItem('user')!) || {}
            if (userData) {
                setUser(userData)
            } else {
                setIsAuthUser(false)
                setUser(null)
            }
        } else {
            setIsAuthUser(false)
            setUser(null)
        }
    }, [])

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
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;