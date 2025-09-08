import { useAuth } from "../context/AuthProvider";

export function Header() {
    const { user, logout, login } = useAuth();

    return (
        <header>
            <h1>Welcome {user ? user.name : "Guest"}</h1>
            {user ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </header>
    );
}
