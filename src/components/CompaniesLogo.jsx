import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Egger from '../img/companies/egger.png'
import Gardinia from '../img/companies/gardinia.png'
import Krono from '../img/companies/krono.png'
import Sherlock from '../img/companies/sherlock-1.png'

const CompaniesLogo = () => {
    return (
        <div className="CompaniesLogo">
            <Row className="mx-auto my-5">
                <Col xs={12} md={6} lg={3}>
                    <a href="https://www.egger.com/shop/cs_SK/">
                        <img src={Egger} alt="eggerlogo" />
                    </a>
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <img src={Krono} alt="kronologo" />
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <img src={Gardinia} alt="gardinialogo" />
                </Col>
                <Col xs={12} md={6} lg={3}>
                    <img src={Sherlock} alt="scherlocklogo" />
                </Col>
            </Row>
        </div>
    )
}

export default CompaniesLogo