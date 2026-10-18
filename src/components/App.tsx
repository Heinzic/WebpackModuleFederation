import { useState } from "react";
import classes from './App.module.scss'

export function App() {

    const [count, setCount] = useState(0)
    return (
        <div>
            {count}
            <button className={classes.button} onClick={() => setCount((prev) => prev + 1)} >+</button>
            <button onClick={() => setCount((prev) => prev - 1)} ><span>fdsfds</span></button>
        </div>
    );
}
