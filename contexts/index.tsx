"use client"

import React, { FC, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface GlobalStateProps {
    children: React.ReactNode
}

interface User {
    name?: string
    email?: string
    token?: string
}

interface OTP {
    otp?: string
}

interface GlobalContextProps {
    isAuthUser: boolean | null
    setIsAuthUser: React.Dispatch<React.SetStateAction<boolean | null>>
    user: User | null
    setUser: React.Dispatch<React.SetStateAction<User | null>>
    isLoading: boolean | null
    setIsLoading: React.Dispatch<React.SetStateAction<boolean | null>>
    otp: OTP | null
    setOTP: React.Dispatch<React.SetStateAction<OTP | null>>
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);

const GlobalState: FC<GlobalStateProps> = ({ children }) => {
    const [isAuthUser, setIsAuthUser] = useState<boolean | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean | null>(false);
    const [otp, setOTP] = useState<OTP | null>(null)

    useEffect(() => {
        if (Cookies.get('token') !== undefined) {
            setIsAuthUser(true);
            const userData = JSON.parse(localStorage.getItem('user')!) || {};
            setUser(userData);
        } else {
            setIsAuthUser(false);
            setUser(null); //unauthenticated user
        }
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                isAuthUser,
                setIsAuthUser,
                user,
                setUser,
                isLoading,
                setIsLoading,
                otp,
                setOTP
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;