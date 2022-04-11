import { useContext, createContext, useState } from "react";

const UserContext = createContext<any>([]);

export default function UserProvider({ children }: any) {
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const logout = () => {
        setUser(undefined);
    }
    return (
        <UserContext.Provider value={{ user, error, setUser, setError, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);
