import { useState } from "react";

export function App() {

    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <button onClick={() => setCount((prev) => prev + 1)} >+</button>
            <button onClick={() => setCount((prev) => prev - 1)} >-</button>
        </div>
    );
}
