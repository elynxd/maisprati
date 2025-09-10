import { useState, useEffect } from "react";

export function LifeCycleFunctionalComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component mounted")

        return() => {
            console.log("Component will be unmounted!")
        }
    }, [])

    useEffect(() => {
        console.log("Component updated!")
    },[count])

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count +1)}>increment +1</button>
        </div>
    )
}