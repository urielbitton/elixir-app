import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import { ProductContext } from './site/ProductContext'

function Login(props) {

  const {accounts, general} = useContext(ProductContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [correct, setCorrect] = useState(0)
  const [admin, setAdmin] = useState(true)
  const creds = ['admin','uriel'] 

  document.body.style.overflowY = 'hidden'
  const loginpage = document.querySelector('.loginpage')
  const loader = document.querySelector('.loginpage .loader')
  const loginmsg = document.querySelector('.loginmsg')

  function loginSubmit() {
    if(admin === true) {
      props.clientoff()
      if(username === creds[0] && password === creds[1]) {
        setCorrect(1)
        loader.style.width = '0'
        loader.style.width = '100%'
        setTimeout(() => {
          loginpage.style.transform = 'scale(1.1)'
          loginpage.style.opacity = '0'
          setTimeout(() => {
            loginpage.style.display = 'none'
            props.logged()
          }, 600)
        }, 1200)
      }
      else {
        setCorrect(2) 
      }
    } 
    if(accounts.some(el =>  username===el.username && password===el.password)) {
      setCorrect(1) 
      loader.style.width = '0'
      loader.style.width = '100%'
      setTimeout(() => {
        loginpage.style.transform = 'scale(1.1)'
        loginpage.style.opacity = '0'
        setTimeout(() => {
          loginpage.style.display = 'none'
          general.activeaccid = accounts.find(el => el.username===username).id
          props.clienton()
          props.logged()
        }, 600)
      }, 1200)
    }
  }

  useEffect(() => {
    const passwdinp = document.querySelector('.passwdinp')
    passwdinp.onkeyup = (e) => {
      let enter = e.keyCode || e.which
      if(enter === 13){
        document.querySelector('.loginbtn button').click()
      }
    }
  },[])

  return (
    <div className="loginpage">
      <div className="loader"></div>
      <div className="loginimgcont">
        <img src="https://i.imgur.com/0CWFpAm.jpg" alt="loginimg"/>
      </div> 
      <div className="logininfo">
        <h3>Hello {accounts.length?(accounts.find(x => x.id === general.activeaccid).name).split(" ")[0]:"Guest"},<br/>Welcome{accounts.length?" Back":""}.</h3>
        <div className="loginform"> 
          <input placeholder="Username or Email" onChange={(e) => setUsername(e.target.value)}/>
          <input className="passwdinp" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <label>
            <input type="checkbox"/>
            <small>Remember Me</small> 
          </label> 
          <label> 
          <small><Link to="/forgot">Forgot Password?</Link></small>
          </label>
          <Link to={admin?"/dashhome":"/clientdash"} className="loginbtn"><button onClick={() => loginSubmit()}>Login</button></Link>
          <h6>Don't have an account? <Link to="/register" onClick={() => props.adminoff()}>Register Here</Link></h6>
          <Link to="/" onClick={() => props.adminoff()}><small className="backtosite">Back to Website<i class="fas fa-long-arrow-alt-right"></i></small></Link>
        </div> 
          <p className="loginmsg" style={{display: correct===1?"block":"none"}}><i className="fas fa-user-check"></i>Successful Login, setting up your dashboard.</p>
          <p className="loginmsg loginfailed" style={{display: correct===2?"block":"none"}}><i className="fas fa-times-circle"></i>Login failed, make sure your username or password is correct.</p>
      </div>
    </div> 
  )
}

export default Login