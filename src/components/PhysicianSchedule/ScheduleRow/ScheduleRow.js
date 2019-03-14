import React from 'react'

const scheduleRow = (props) => (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.name}</td>
      <td>{props.time}</td>
      <td>{props.kind}</td>
    </tr>
)

export default scheduleRow
