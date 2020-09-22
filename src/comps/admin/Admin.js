import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Dashboard from './Dashboard'
import '../../admin.css'

function Admin(props) { 
  return (
    <div className="adminapp">
      <Dashboard adminoff={props.adminoff} logout={props.logout}/>
    </div>
  )
}

export default Admin