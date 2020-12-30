import React from 'react'
import { Col } from 'react-bootstrap'

import './ContactData.scss'
import * as AiIcons from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

const ContactData = props => {
    return (
        <div className={props.className}>
            <Col className="ContactData">
                <ul className="listOfContact">
                    <li><GoLocation /><a href="https://goo.gl/maps/FXR6K2UPSoKbsWSA8" target="_blank" rel="noreferrer">Andreja Sládkoviča 1, <br /><span>971 01 Prievidza</span> </a> </li>
                    <li><AiIcons.AiOutlineMail /><a href="mailto: inexdecor@inexdecor.sk">inexdecor@inexdecor.sk</a></li>
                    <li><AiIcons.AiOutlinePhone /><a href="tel: +421908244019">+421 908 244 019</a></li>
                    <li><AiIcons.AiOutlinePhone /><a href="tel: +421915715876">+421 915 715 876</a></li>
                    <li><AiIcons.AiFillFacebook /><a href="https://www.facebook.com/inexdecorpd">facebook</a></li>
                </ul>
            </Col>
        </div >
    )
}

export default ContactData