"use client"

import { createContext, useContext, useState } from "react";

type GlobalContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
};

type User = {
    id: number;
    email: string;
    role: 'admin' | 'user';
};


export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalState({
    children
}: {
    children: React.ReactNode
}) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <GlobalContext.Provider
            value={{
                user,
                setUser
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalState = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error('useGlobalContext must be used within a GlobalContextProvider');
    }
    return context;
  };