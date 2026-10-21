import { useState } from "react";
import classes from './App.module.scss'
import { Link, Outlet } from "react-router-dom";

export function App() {

    const [count, setCount] = useState(0)
    return (
        <div>
            <Link to={'/about'}>About</Link>
            <br/>
            <Link to={'/shop'}>Shop</Link>
            {count}
            <button className={classes.button} onClick={() => setCount((prev) => prev + 1)} >+</button>
            <button onClick={() => setCount((prev) => prev - 1)} ><span>fdsfds</span></button>
            <Outlet />
        </div>
    );
}
