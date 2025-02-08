import React, { useContext } from 'react';
import { MainContext } from './contexts/MainContext';
import Gallery from './gallery/Gallery';
import Posts from './post/Posts';
import style from './style.module.css'
import Todos from './todos/Todos';
import Users from './users/Users';

const Content = ()=>{

    const {showMenu,setShowMenu} = useContext(MainContext)

    const handleShowMenu = (event)=>{
        event.stopPropagation()
        // به خاطر استفاده از حالت گوشی موبایل، روی دکمه مربوطه کلیک کنیم
        setShowMenu(!showMenu)
        console.log(showMenu);
    }

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <i className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`} 
            onClick={handleShowMenu}
            ></i>
            <Users/>
            <Posts/>
            <Gallery/>
            <Todos/>
        </div>
    )

}

export default Content;