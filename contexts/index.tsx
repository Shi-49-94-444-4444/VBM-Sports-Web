"use client"

import React, { FC, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

interface GlobalStateProps {
    children: React.ReactNode;
}

interface User {
    name: string;
    token: string;
}

interface GlobalContextProps {
    isAuthUser: boolean | null;
    setIsAuthUser: React.Dispatch<React.SetStateAction<boolean | null>>;
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const GlobalContext = createContext<GlobalContextProps | null>(null);

const GlobalState: FC<GlobalStateProps> = ({ children }) => {
    const [isAuthUser, setIsAuthUser] = useState<boolean | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (Cookies.get('token') !== undefined) {
            setIsAuthUser(true);
            const userData = JSON.parse(localStorage.getItem('user')!) || {};
            setUser(userData);
        } else {
            setIsAuthUser(false);
            setUser(null); //unauthenticated user
        }
    }, [Cookies]);

    return (
        <GlobalContext.Provider
            value={{
                isAuthUser,
                setIsAuthUser,
                user,
                setUser,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;