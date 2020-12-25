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
                <OpenHours size="lg" />
                <Row>
                    <Col xs={12} md={6}>
                        <p>Nájdete nás:</p>
                        <ul>
                            <li>Andreja Sládkoviča 1, 97101 Prievidza</li>
                            <li>0908 244 019, 0915 715 876</li>
                            <li><a href="mailto: inexdecor@inexdecor.sk">inexdecor@inexdecor.sk</a> </li>
                        </ul>
                    </Col>
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