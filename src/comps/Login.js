import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"

function Login(props) {

  const [login, setLogin] = useState(false)

  let imgarr  = ["https://i.imgur.com/YWX8QnO.jpg","https://i.imgur.com/iNQimlh.jpg","https://i.imgur.com/0CWFpAm.jpg"]
  let randimg = Math.floor(Math.random() * (imgarr.length) + 0)

  useEffect(() => {
    const loginpage = document.querySelector('.loginpage')
    const btn = document.querySelector('.loginpage button')
    const loader = document.querySelector('.loginpage .loader')
    btn.onclick = () => {
      loader.style.width = '0'
      loader.style.width = '100%'
      setTimeout(() => {
        loginpage.style.transform = 'scale(1.1)'
        loginpage.style.opacity = '0'
        setTimeout(() => {
          loginpage.style.display = 'none'
          setLogin(true)
          props.loggedin()
        }, 1000);
      }, 2000);
    }

  },[])

  return (
    <div className="loginpage">
      <div className="loader"></div>
      <div className="loginimgcont">
        <img src={imgarr[randimg]} alt="loginimg"/>
      </div>
      <div className="logininfo">
        <h3>Hello,<br/>Welcome Back</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Username or Email"/>
          <input placeholder="Password"/>
          <label>
            <input type="checkbox"/>
            <small>Remember Me</small>
          </label> 
          <label>
          <small><Link to="/forgot">Forgot Password?</Link></small>
          </label>
          <button>Login</button>
          <h6>Don't have an account? <Link to="/register">Register Here</Link></h6>
        </form>
      </div>
    </div>
  )
}

export default Login