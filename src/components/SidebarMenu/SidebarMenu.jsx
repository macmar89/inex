import React, { useState } from 'react'
import './SidebarMenu.scss'
import { Link } from 'react-router-dom'
import { SidebarData } from '../../data/SidebarData'
import { Button, Col, Row } from 'react-bootstrap'




const SidebarMenu = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)


    return (
        <div className="SideBar">
            <div className="SidebarMenu" >
                <Row >
                    <Col className={sidebar ? "SidebarMenuActive" : "SidebarMenu"}>
                        <header className="SidebarHeader">
                            <h3>INEX DECOR, S.R.O. </h3>
                            <span>INTERIÉR - EXTERIÉR - DEKORÁCIE </span>
                        </header>
                        <ul className="NavLink" onClick={showSidebar}>
                            {SidebarData.map((item, index) => (
                                <li key={index} className="NavItem">
                                    <Link to={item.path}  >
                                        <span>{item.title}</span>
                                    </Link>
                                </li >
                            ))}
                        </ul >
                        <Button className="btn-dark" onClick={showSidebar}>Menu</Button>
                    </Col >
                </Row >
            </div >
        </div >
    )
}

export default SidebarMenu

// className={sidebar ? "NavMenuActive" : "NavMenu"}