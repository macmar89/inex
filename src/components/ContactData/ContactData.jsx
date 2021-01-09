import React from 'react'
import { Col } from 'react-bootstrap'

import './ContactData.scss'
import * as AiIcons from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import FacContact from './FacData'
import PhoneData from './PhoneData'
import EmailData from './EmailData'

const ContactData = props => {
    return (
        <div className={props.className}>
            <Col className="ContactData">
                <ul className="listOfContact">
                    <li><GoLocation /><a href="https://goo.gl/maps/FXR6K2UPSoKbsWSA8" target="_blank" rel="noreferrer">Andreja Sládkoviča 1, <br /><span>971 01 Prievidza</span> </a> </li>
                    <li><AiIcons.AiOutlineMail /><EmailData /></li>
                    <li><AiIcons.AiOutlinePhone /> <PhoneData /> </li>
                    <li><AiIcons.AiFillFacebook /> <FacContact /> </li>
                </ul>
            </Col>
        </div >
    )
}

export default ContactData

//  <a href="https://www.facebook.com/inexdecorpd">facebook</a>