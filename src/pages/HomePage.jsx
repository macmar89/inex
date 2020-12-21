import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Picture from '../img/cropped-body.jpg'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Container >
                <Row>
                    <Col className="HomePicture">
                        <img className="main-picture" src={Picture} alt="sediacujo"></img>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 >Home page</h2>
                    <h4>O firme</h4>
                    <h4>Vitajte na stránke spoločnosti INEX Decor, s.r.o</h4>
                    <p>Našim prvoradým cieľom je poskytnúť zákazníkom kvalitné produkty a služby. Zameriavame sa na veľkoobchodný a maloobchodný predaj tieniacej a závesnej techniky nemeckého výrobcu Gardinia, ktorý patrí medzi svetových lídrov v tomto segmente a je známy svojou vysokou kvalitou. V našej predajni v Prievidzi môžete okrem spomenutého sortimentu nájsť aj podlahové krytiny od nemeckých výrobcov EGGER a Krono originál, interiérové dvere, bezpečnostné dvere Sherlock, nábytok a kuchyne na mieru. Snažíme sa o to aby sme zákazníkovi vedeli poskytnúť čo najobsiahlejší sortiment hlavne v oblasti interiéru a z toho dôvodu neustále rozširujeme našu ponuku</p>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage