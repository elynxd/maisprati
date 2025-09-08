import { useState } from "react"

export const IncreaseFunc = () => {
    const [count, setCount] = useState(0);

    return (
        <>
        <h1>Contador: {count}</h1>
        <button onClick={() => setCount(count +1)}>Increase</button>
    {count > 0 ? (
        <button onClick={() => setCount(count -1)}>Decrease</button>
    ) : (
        <button disabled={true}>Decrease</button>
    )}
        </>
    )
}