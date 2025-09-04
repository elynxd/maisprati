import "./App.css";
import { Heart } from "phosphor-react";

function App() {
    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <p className="font-bold text-3xl text-red-500">
                    Hello world!
                    <span className="ml-2 inline-block animate-pulse">
                        <Heart size={32} />
                    </span>
                </p>
            </div>
        </>
    );
}

export default App;
