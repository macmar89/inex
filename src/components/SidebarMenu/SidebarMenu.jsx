import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from './SidebarMenu.module.scss'
import { SidebarData } from './SidebarData'
import { Button, Col, Row } from 'react-bootstrap'

const SidebarMenu = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className="SideBar">
            <div className={Styles.SidebarMenu} >
                <Row>
                    <Col>
                        <Button onClick={showSidebar}>Close</Button>
                    </Col>
                </Row>
                <div className="row">
                    <nav className={sidebar ? Styles.NavMenuActive : Styles.NavMenu}>
                        <Col md={9} className={Styles.SidebarActive}>
                            <header className={Styles.SidebarHeader}>
                                <h3>INEX DECOR, S.R.O. </h3>
                                <span>INTERIÉR - EXTERIÉR - DEKORÁCIE </span>
                            </header>
                            <ul className={Styles.NavList}>
                                {SidebarData.map((item, index) => (
                                    <li key={index}>
                                        <Link activeClassName={Styles.NavItem} to={item.path} >
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={3}>
                            <Button >Ola</Button>
                        </Col>
                    </nav>
                </div>
            </div>
        </div >
    )
}

export default SidebarMenu