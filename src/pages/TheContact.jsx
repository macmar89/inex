import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'
import OpenHours from '../components/OpenHours'

const TheContact = () => {
    return (
        <div className="contact">
            <Container>
                <Row className="my-3">
                    <Col>
                        <h2>Kontakt</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className="mx-auto">
                        <h3>Kontaktné údaje:</h3>
                        <ul>
                            <li>Andreja Sládkoviča 1, <br /> 971 01 Prievidza</li>
                            <li><a href="tel: +421 908 244 019">+421 908 244 019</a></li>
                            <li><a href="tel: +421915715876">+421 915 715 876</a> </li>
                            <li><a href="mailto: inexdecor@inexdecor.sk">inexdecor@inexdecor.sk</a> </li>
                        </ul>
                    </Col>
                    <Col md={6} className="mx-auto" >
                        <h3>Predajňa - otváracie hodiny</h3>
                        <OpenHours cName="table table-striped col-10 mx-auto" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <p>Tu sa bude nachadzat mapka</p>
                    </Col>

                </Row>
                <Row>
                    <Col >
                        <ContactForm />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default TheContact