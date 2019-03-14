import React, { Component } from 'react'

class Physicans extends Component {
    
    // TODO: dynamically change class of Physician selected to active class 

    render() {
      return (
        <div> 
            <h2>Physicans</h2>
            <ul className="list-group">
                {this.props.physicans && this.props.physicans.map((physican) =>{
                    return (
                    <li className="list-group-item" 
                        onClick={this.props.onPhysicanHandler.bind(this, physican.id)}>
                        {physican.nameLast}, {physican.nameFirst}
                    </li>
                )
                })}
            </ul>                           
        </div>
        )
    }
}

export default Physicans