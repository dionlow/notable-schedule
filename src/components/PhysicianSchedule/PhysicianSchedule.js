import React from 'react'
import ScheduleRow from './ScheduleRow/ScheduleRow'

const physicianSchedule = (props) => {
    const component = props.schedule.length > 0 ? 
        <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Time</th>
                <th scope="col">Kind</th>
                </tr>
            </thead>
            <tbody>
                    {props.schedule.map((row, index) => (
                        <ScheduleRow 
                            rowNumber={index + 1}
                            name={row.patientName}
                            time={row.time}
                            kind={row.kind}
                        />
                    ))}
                
            </tbody>
        </table> :
        <h3>There is nothing on your schedule today!</h3>


    return component
}

export default physicianSchedule
