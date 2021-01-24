import React, { useState } from 'react'
import './Navbar.scss'

import Accordion from '../acord/acord'

import { Link } from 'react-router-dom'
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
                <ul className='nav-menu-items' >
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </Link>
                    </li>
                    {/* {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className='nav-text'>
                                <Link className={item.cName} to={item.path}>
                                    <span >{item.title}</span>
                                </Link>
                            </li>
                        );
                    })} */}
                    <li className="nav-text" onClick={showSidebar}>
                        <AiIcons.AiOutlineHome />
                        <Link to='/homepage'>Homepage</Link>
                    </li>
                    <li className="nav-text">
                        <div className="wrapper">
                            <Accordion title="Galeria">
                                <ul>
                                    <li>
                                        <Link to='/galeria' onClick={showSidebar}>Galeria</Link>
                                    </li>
                                    <li>
                                        <Link to='/galeriadvere' onClick={showSidebar}>Dvere</Link>
                                    </li>
                                    <li>
                                        <Link to='/galeriarolety' onClick={showSidebar}>Rolety</Link>
                                    </li>
                                </ul>
                            </Accordion>
                        </div>
                    </li>
                    <li className="nav-text" onClick={showSidebar}>
                        <Link to='/rolety'>Rolety</Link>
                    </li>
                    <li className="nav-text" onClick={showSidebar}>
                        <Link to='/dvere'>Dvere</Link>
                    </li>
                    <li className="nav-text" onClick={showSidebar}>
                        <Link to='/podlahy'>Podlahy</Link>
                    </li>
                    <li className="nav-text" onClick={showSidebar}>
                        <Link to='/referencie'>Referencie</Link>
                    </li>
                    <li className="nav-text" onClick={showSidebar}>
                        <Link to='/kontakt'>Kontakt</Link>
                    </li>

                </ul>
            </nav>
        </ div >
    );
}


export default NavBar