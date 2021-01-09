import React from 'react'
import { Link } from 'react-router-dom'
import Accordion from '../components/acord/acord'

const JaponskeSteny = () => {
    return (
        <div className="JapanWalls">
            <h2>Japonské steny</h2>
            <div className="wrapper">
                <Accordion title="Galeria">
                    <ul>
                        <li>
                            <Link to='/dvere'>Dvere</Link>
                        </li>
                        <li>
                            <Link to='/rolety'>Rolety</Link>
                        </li>
                    </ul>
                </Accordion>

            </div>
        </div>
    )
}

export default JaponskeSteny