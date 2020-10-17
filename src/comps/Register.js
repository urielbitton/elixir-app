import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link,useHistory } from "react-router-dom"
import { ProductContext } from '../comps/site/ProductContext'

function Register(props) {

  const {accounts, general} = useContext(ProductContext)

  const [valid, setValid] = useState(0)
  const [id, setId] = useState(accounts.length)
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass1, setPass1] = useState('')
  const [pass2, setPass2] = useState('')
  const [pic, setPic] = useState('https://i.imgur.com/UBpqvP7.png')
  let history = useHistory()
 
  const regpage = document.querySelector('.registerpage')
  const loader = document.querySelector('.registerpage .loader')

  function createAccount() {
    if(name.length && username.length && pass1===pass2) {
      let accountobj = {id:id,username:username,pic:pic,name:name,email:email,password:pass1,phone:"",country:"",
      city:"",postal:"",compname:"",website:"",cid:"",address:"",apt:"",delivnotes:"",cardnumber:"",cardtype:"",expdate:"",cvc:""} 
      accounts.push(accountobj)
      setValid(1) 
      loader.style.width = '0'
      loader.style.width = '100%'
      setTimeout(() => {
        regpage.style.transform = 'scale(1.1)'
        regpage.style.opacity = '0'
        setTimeout(() => {
          regpage.style.display = 'none' 
          props.adminon()
          general.activeaccid = id
          history.push("/login")
        }, 1000) 
      }, 2000)
    }
    else {
      setValid(2)
    }
  }

  useEffect(() => {
    document.querySelector('nav').style.display = 'none'
    document.querySelector('footer').style.display = 'none'

    return () => {
      if(document.body.contains(document.querySelector('nav')) && document.body.contains(document.querySelector('footer'))) {
        document.querySelector('nav').style.display = 'block'
        document.querySelector('footer').style.display = 'block'
      }
    } 
  },[])
 
  return (
    <div className="registerpage"> 
      <div className="loader"></div>
      <div className="logininfo">
        <h3>Create<br/>An Account</h3>
        <div className="spacer"></div>
        <div className="registerform">
          <input placeholder="Name" onChange={(e) => setName(e.target.value)}/>
          <input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/> 
          <input type="password" placeholder="Password" onChange={(e) => setPass1(e.target.value)}/>
          <input type="password" placeholder="Confirm Password" onChange={(e) => setPass2(e.target.value)}/>
          <button onClick={() => createAccount()}>Create Account</button>
          <h6>Already have an account? <Link to="/login"  onClick={() => props.adminon()}>Login Here</Link></h6>
          <Link to="/" onClick={() => props.adminoff()}><small className="backtosite">Back to Website<i class="fas fa-long-arrow-alt-right"></i></small></Link>
        </div>
          <p className="loginmsg" style={{display: valid===1?"block":"none"}}><i className="fas fa-user-check"></i>Successful Registration, creating your account.</p>
          <p className="loginmsg loginfailed" style={{display: valid===2?"block":"none"}}><i className="fas fa-times-circle"></i>Registration failed, make sure your the information entered is correct.</p>
      </div>
      <div className="loginimgcont">
        <img src="https://i.imgur.com/WfSCE7O.jpg" alt="loginimg"/>
      </div> 
    </div>
  )
}

export default Register