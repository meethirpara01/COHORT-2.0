import { useState, createContext } from "react";
import { register, login, getMe } from "./services/auth.api";


export const AuthContext  = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (username, password) => {

        setLoading(true);

        try {
            const responce = await login(username, password)
            setUser(responce.user)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    
    const handleRegister = async (username, email, password) => {

        setLoading(true);

        try {
            const responce = await register(username, email, password)
            setUser(responce.user)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{ user, loading, handleLogin, handleRegister }} >
            {children}
        </AuthContext.Provider>
    )
} 