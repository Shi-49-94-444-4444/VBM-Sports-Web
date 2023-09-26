import { createContext, useState } from "react";

type GlobalContextType = {
    isAuthUser: boolean | null;
    setIsAuthUser: React.Dispatch<React.SetStateAction<boolean | null>>;
    user: any; 
    setUser: React.Dispatch<React.SetStateAction<any>>;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalState({ 
    children 
}: { 
    children: React.ReactNode 
}) {
    const [isAuthUser, setIsAuthUser] = useState<boolean | null>(null);
    const [user, setUser] = useState<any>(null);

    return (
        <GlobalContext.Provider
            value={{ 
                isAuthUser,
                setIsAuthUser,
                user,
                setUser
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
