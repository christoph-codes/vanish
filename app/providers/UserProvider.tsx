import { useContext, createContext, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import users from "../util/users";

const UserContext = createContext<any>([]);

export default function UserProvider({ children }: any) {
    const [activeUser, setActiveUser] = useState<IUser | null>();
    const [error, setError] = useState<{
        code: string,
        message: string,
    } | null>();

    const signIn = (email: string, password: string) => {
        if (email !== '' && password !== '') {
            // TODO: Delete this check
            if (process.env.NODE_ENV === 'development') {
                const existingUser: any = users.filter(usr => {
                    if (usr?.email === email) {
                        return usr;
                    }
                    return null;
                })
                console.log(existingUser);
                if (existingUser?.password === password) {
                    setActiveUser(existingUser);
                } else {
                    setError({ code: '110', message: 'These user credentials do match anything in our records.' })
                }
            } else {
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
    }
    const logout = () => {
        setActiveUser(null);
    }
    const createAccount = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password).then(result => {
            console.log('completed:', result);
        })
    }
    return (
        <UserContext.Provider value={{ activeUser, error, setActiveUser, setError, logout, signIn, createAccount }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);
