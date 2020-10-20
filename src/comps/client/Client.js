import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Homecont from './Homecont'
import Navbar from './Navbar'
import '../../client.css'

function Client(props) {

  const [update, setUpdate] = useState(0)

  function updateImg() {
    setUpdate(prev => prev+1)
  } 

  return (
    <div className="clientdash">
      <Navbar adminoff={props.adminoff} update={update}/>
      <Sidebar logout={props.logout}/>
      <Homecont updateimg={updateImg}/> 
    </div> 
  )
}

export default Client