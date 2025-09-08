import { useState, useContext, createContext, useMemo } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (name) => {
        setUser({ name: name || "User" });
    };

    const logout = () => {
        setUser(null);
    };

    const value = useMemo(() => ({ user, login, logout }), [user]);

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
    return ctx;
}
