import React from 'react'
import Sidebar from './Sidebar'
import Homecont from './Homecont'

function Dashboard(props) {
  return (
    <div className="dashboard">
      <Sidebar logout={props.logout} />
      <Homecont adminoff={props.adminoff} /> 
    </div>
  )
}

export default Dashboard