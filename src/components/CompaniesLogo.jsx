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
                <Col md={6} lg={3} className="col">
                    <a href="https://www.egger.com/shop/cs_SK/">
                        <img src={Egger} alt="eggerlogo" />
                    </a>
                </Col>
                <Col md={6} lg={3} className="col">
                    <img src={Krono} alt="kronologo" />
                </Col>
                <Col md={6} lg={3} className="col">
                    <img src={Gardinia} alt="gardinialogo" />
                </Col>
                <Col md={6} lg={3} className="col">
                    <img src={Sherlock} alt="scherlocklogo" />
                </Col>
            </Row>
        </div>
    )
}

export default CompaniesLogo