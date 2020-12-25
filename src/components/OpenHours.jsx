import React from 'react'
import { Table } from 'react-bootstrap'
import { OpenHoursData } from '../data/OpenHoursData'

const OpenHours = () => {
    return (
        <div className="OpenHours">
            <Table className="col-5" size="lg">
                <tbody>
                    {OpenHoursData.map((day, index) => (
                        <tr key={index}>
                            <td>{day.day}</td>
                            <td>{day.open}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default OpenHours