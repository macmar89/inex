import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import OpenHours from './OpenHours'
import ContactData from './ContactData/ContactData'


const InexFooter = () => {
    return (
        <div className="InexFooter mx-auto">
            <Container>
                <Row>
                    <Col className="d-none d-md-block" md={4} >
                        <h3>Otváracie hodiny</h3>
                        <OpenHours cName="inextable" />
                    </Col>
                    <Col md={4} className="d-none d-md-block">
                        <p>avojcek</p>
                    </Col>
                    <Col xs={12} md={4} >
                        <h3>Kontaktné údaje</h3>
                        <ContactData />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default InexFooter