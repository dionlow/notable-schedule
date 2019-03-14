import React, { Component } from 'react'
import Physicians from '../../components/Physcians/Physcians'
import PhysicianTitle from '../../components/PhysicianTitle/PhyscianTitle'
import PhysicanSchedule from '../../components/PhysicianSchedule/PhysicianSchedule'
import { PHYSICIANS, SCHEDULES } from '../../data'

class Layout extends Component {
  state = {
    physicans: undefined,
    selectedPhysician: undefined,
    physicanSchedule: undefined
  }


  componentDidMount() {
    // set up a URL get to the database -- datafile serves as dummy data
    this.setState({physicans: PHYSICIANS })
  }
onPhysicanHandler = (id) => {
    const physician = this.state.physicans.find(p => p.id === id)
    this.setState({physicanSchedule: SCHEDULES[id]})
    this.setState({selectedPhysician: physician})
}

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm'>
            <h1>NOTABLE</h1>
            <Physicians 
              physicans={this.state.physicans || []}
              onPhysicanHandler={this.onPhysicanHandler}
            />
          </div>
          <div className='col-sm'>
              {this.state.selectedPhysician ? 
                <PhysicianTitle 
                  physican={this.state.selectedPhysician}
                /> : "no physician selected"}
              {this.state.physicanSchedule && 
                <PhysicanSchedule schedule={this.state.physicanSchedule}/>}
              
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
