import { useState } from "react";
import classes from './App.module.scss'
import { Link, Outlet } from "react-router-dom";
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/avatar.jpg'
import Calendar from '@/assets/calendar.svg'

export function App() {
    const [count, setCount] = useState(0)

    // if (__PLATFORM__ === 'desktop') return <div className="">ISDESKTOPPLATFORM</div>
    // if (__PLATFORM__ === 'mobile') return <div className="">ISMOBILEPLATFORM</div>
    return (
        <div data-testid={'App'}>
            <h1>PLATFORM {__PLATFORM__}</h1>
            <div className="">
                <img src={avatarPng} alt="" width={100} height={100} />
                <img src={avatarJpg} alt="" width={100} height={100} />
            </div>
            <div className=""> <Calendar width={50} height={50} fill="red" /> </div>
            <Link to={'/about'}>About</Link>
            <br />
            <Link to={'/shop'}>Shop</Link>
            {count}
            <button className={classes.button} onClick={() => setCount((prev) => prev + 1)} >+</button>
            <button onClick={() => setCount((prev) => prev - 1)} ><span>fdsfds</span></button>
            <Outlet />
        </div>
    );
}
