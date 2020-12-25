import React from 'react'
import { Row, Col } from 'react-bootstrap'

const InexFooter = () => {
    return (
        <div className="InexFooter col-10 mx-auto">
            <Row>
                <Col>
                    <h4>Otváracie hodiny</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>Pondelok</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col>
                    <p>hello</p>
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
        </div>
    )
}

export default InexFooter