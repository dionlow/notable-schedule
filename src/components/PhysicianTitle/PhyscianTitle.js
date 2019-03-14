import React from 'react'
const physicianTitle = (props) => (
    <div>
        <h1>Dr. {props.physican.firstName} {props.physican.nameLast}</h1>
        <p>{props.physican.email}</p>
    </div>
)

export default physicianTitle