import React, { useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { SidebarData } from '../../data/SidebarData'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'


const NavBar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='NavbarMenu'>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars-active'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className='nav-text'>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </ div >
    );
}


export default NavBar