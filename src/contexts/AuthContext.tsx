'use client';

import { Payload } from "@/types/Payload";
import { createContext, useEffect, useState } from "react";

interface UserContextProps {
    children: React.ReactNode;
}

interface UserProviderProps {
    user: Payload;
    setUser: (user: Payload) => void;
}

const AuthContext = createContext<UserProviderProps>({} as UserProviderProps);

function AuthProvider({ children }: UserContextProps) {

    const [user, setUser] = useState<Payload>({} as Payload);

    
    useEffect(() => {
        if (user) {
            setUser(user);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
