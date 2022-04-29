import React from 'react';
import { Outlet, NavLink } from "react-router-dom"
import s from "./Layout.module.css"

const Layout = () => {
    return (
        <div className={s.wrapper}>
            <header>Heroes TUTUTUTUTUUTUTUTUTUTU</header>
            <NavLink to="/superheroes">List</NavLink>
            <Outlet />
            <footer>2022. inc</footer>
        </div>
    );
};

export default Layout;