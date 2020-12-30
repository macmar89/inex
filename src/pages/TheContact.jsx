import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactData from '../components/ContactData/ContactData'
import ContactForm from '../components/ContactForm/ContactForm'
import OpenHours from '../components/OpenHours'

const TheContact = () => {
    return (
        <div className="ContactPage">
            <Container>
                <Row className="my-3">
                    <Col>
                        <h2>Kontakt</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6} className="mx-auto">
                        <h3>Kontaktné údaje:</h3>
                        <ContactData className="cd" />

                    </Col>
                    <Col xs={12} md={6} className="mx-auto" >
                        <h3>Predajňa - otváracie hodiny</h3>
                        <OpenHours cName="table table-striped col col-md-10 mx-auto" />
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