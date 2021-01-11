import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CompaniesLogo from '../components/CompaniesLogo'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Row>
                <Col md={10} className="mx-auto">
                    <h2>Vitajte na stránke spoločnosti INEX&nbsp;Decor,&nbsp;s.r.o</h2>
                    <p>Našim prvoradým cieľom je poskytnúť zákazníkom kvalitné produkty a služby. Zameriavame sa na veľkoobchodný a maloobchodný predaj tieniacej a závesnej techniky nemeckého výrobcu Gardinia, ktorý patrí medzi svetových lídrov v tomto segmente a je známy svojou vysokou kvalitou. </p>
                    <p>V našej predajni v Prievidzi môžete okrem spomenutého sortimentu nájsť aj podlahové krytiny od nemeckých výrobcov EGGER a Krono originál, interiérové dvere, bezpečnostné dvere Sherlock, nábytok a kuchyne na mieru. </p>
                    <p>Snažíme sa o to aby sme zákazníkovi vedeli poskytnúť čo najobsiahlejší sortiment hlavne v oblasti interiéru a z toho dôvodu neustále rozširujeme našu ponuku.</p>
                </Col>
            </Row>
            <Row>
                <Col md={10} className="mx-auto">
                    <CompaniesLogo />
                </Col>
            </Row>
        </div>
    )
}

export default HomePage