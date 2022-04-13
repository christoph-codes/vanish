import { useContext, createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const UserContext = createContext<any>([]);

export default function UserProvider({ children }: any) {
    const [user, setUser] = useState({});
    const [error, setError] = useState<{
        code: string,
        message: string,
    } | null>();
    const signIn = (email: string, password: string) => {
        if (email !== '' && password !== '') {
            signInWithEmailAndPassword(auth, email, password)
                .then((data) => {
                    console.log('loggedin:', data);
                    setError(null);
                })
                .catch(err => setError({
                    code: '001',
                    message: `Login err: ${err}`
                }));
        }
    }
    const logout = () => {
        setUser({});
    }
    return (
        <UserContext.Provider value={{ user, error, setUser, setError, logout, signIn }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);
