import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'



const InexFooter = () => {
    return (
        <div className="InexFooter mx-auto">
            <Container>
                <Row>
                    <Col>
                        <h4>Otváracie hodiny</h4>
                    </Col>
                    <Col>
                        <p>avojcek</p>
                    </Col>
                    <Col>
                        <h4>Kontakt</h4>
                        <ul>
                            <li><a href="mailto: inexdecor@inexdecor.sk">inexdecor@inexdecor.sk</a></li>
                            <li><a href="tel: +421908244019">+421 908 244 019</a></li>
                            <li><a href="tel: +421915715876">+421 915 715 876</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default InexFooter