import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Egger from '../img/companies/egger.png'
import Gardinia from '../img/companies/gardinia.png'
import Krono from '../img/companies/krono.png'
import Sherlock from '../img/companies/sherlock-1.png'

const CompaniesLogo = () => {
    return (
        <div className="CompaniesLogo">
            <Row className="mx-auto">
                <Col className="col-3">
                    <img src={Egger} alt="eggerlogo" />
                </Col>
                <Col className="col-3">
                    <a href="https://www.egger.com/shop/cs_SK/">
                        <img src={Krono} alt="kronologo" />
                    </a>
                </Col>
                <Col className="col-3">
                    <img src={Gardinia} alt="gardinialogo" />
                </Col>
                <Col className="col-3">
                    <img src={Sherlock} alt="scherlocklogo" />
                </Col>
            </Row>
        </div>
    )
}

export default CompaniesLogo