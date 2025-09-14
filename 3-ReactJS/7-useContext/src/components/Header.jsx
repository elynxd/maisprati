import { useAuth } from "../context/AuthProvider";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    const { user, login, logout } = useAuth();

    return (
        <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #ccc'}}>
            <h1>Welcome {user ? user.name : "Guest"}</h1>
            {user ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={login}>Login</button>
            )}
            <ThemeToggle />
        </header>
    );
}
