import React from 'react'
import Sidebar from './Sidebar'
import Homecont from './Homecont'
import Navbar from './Navbar'
import '../../client.css'

function Client(props) {

  return (
    <div className="clientdash">
      <Navbar adminoff={props.adminoff}/>
      <Sidebar />
      <Homecont /> 
    </div> 
  )
}

export default Client