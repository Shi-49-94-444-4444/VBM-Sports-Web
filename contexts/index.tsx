"use client"

import React, { FC, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

interface GlobalStateProps {
    children: React.ReactNode
}

interface User {
    id: string
    fullName: string | null
    email: string | null
    avatar: string | null
    playingArea: string[] | null
    playingLevel: number | null
    playingWay: string[] | null
    token: string | null
    isNewUser: boolean | null
    phoneNumber: number | null
    sortProfile: string | null
    userName: string | null
}

// const routerForgotPassword = ["/change-password", "/change-password-success", "/verify-otp"]
interface GlobalContextProps {
    isAuthUser: boolean | null
    setIsAuthUser: React.Dispatch<React.SetStateAction<boolean | null>>
    isRouterForgotPassword: boolean | null
    setIsRouterForgotPassword: React.Dispatch<React.SetStateAction<boolean | null>>
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
    isLoading: boolean | null
    setIsLoading: React.Dispatch<React.SetStateAction<boolean | null>>
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);

const GlobalState: FC<GlobalStateProps> = ({ children }) => {
    const [isAuthUser, setIsAuthUser] = useState<boolean | null>(null);
    const [isRouterForgotPassword, setIsRouterForgotPassword] = useState<boolean | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean | null>(false);

    const router = useRouter()

    useEffect(() => {
        if (Cookies.get('token') !== undefined) {
            setIsAuthUser(true);
            const userData = JSON.parse(localStorage.getItem('user')!) || {};
            setUser(userData);
        } else {
            setIsAuthUser(false);
            setUser(null);
        }
    }, []);

    // useEffect(() => {
    //     if (isRouterForgotPassword === null || isRouterForgotPassword === false) {
    //         if (routerForgotPassword.includes(router.pathname)) {
    //             router.push("/")
    //         }
    //     }
    // }, [isRouterForgotPassword, router]);

    // useEffect(() => {
    //     if (user?.isNewUser === false && router.pathname === "/register-stepper") {
    //         router.push("/")
    //     }
    // }, [user, router]);

    return (
        <GlobalContext.Provider
            value={{
                isAuthUser,
                setIsAuthUser,
                user,
                setUser,
                isLoading,
                setIsLoading,
                isRouterForgotPassword,
                setIsRouterForgotPassword
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;