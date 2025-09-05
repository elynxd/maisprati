import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";

export const App = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
