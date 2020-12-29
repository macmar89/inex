import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import './Navbar.scss'
import { Link } from 'react-router-dom'
import { SidebarData } from '../../data/SidebarData'




const NavBar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className='NavbarMenu'>
            {/* <IconContext.Provider value={{ color: '#fff' }}> */}
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    {/* <FaIcons.FaBars onClick={showSidebar} /> */}
                    <Button onClick={showSidebar} >Otvor</Button>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            {/* <AiIcons.AiOutlineClose /> */}
                            <Button>Zavri</Button>
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
            {/* </IconContext.Provider> */}
        </ div >
    );
}


export default NavBar