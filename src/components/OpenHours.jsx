import React from 'react'
import { OpenHoursData } from '../data/OpenHoursData'

const OpenHours = () => {
    return (
        <div className="OpenHours">
            <table className="table">
                <tbody>
                    {OpenHoursData.map((day, index) => (
                        <tr key={index}>
                            <td>{day.day}</td>
                            <td>{day.open}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default OpenHours