import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://assetsv2.fiverrcdn.com/assets/v2_globals/fiverr-logo-new-green-64920d4e75a1e04f4fc7988365357c16.png" alt=""/>
            <div className={s.loginBlock}>

                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;
