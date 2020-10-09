import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
 
function Mainbg() {

  const [slide1, setSlide1] = useState(true)
  const [slide2, setSlide2] = useState(false)
  const [slide3, setSlide3] = useState(false)
  let interval = 21000
  let numslides = 3
  let timeout = interval/numslides  
 
  useEffect(() => {
    document.querySelector('.slide1').style.opacity = '1'
    setTimeout(() => { document.querySelector('.slide1 h6').style.cssText += 'opacity:1;left:0' },700)
    setTimeout(() => { document.querySelector('.slide1 h1').style.cssText += 'opacity:1;top:0' },1200)
    setTimeout(() => { document.querySelector('.slide1 button').style.cssText += 'opacity:1;left:0' },1700)
    setTimeout(() => {
      setSlide1(false)  
      setSlide2(true)
      doSlide1()
      setTimeout(() => {
        setSlide2(false) 
        setSlide3(true)
        doSlide2()
        setTimeout(() => {
          setSlide3(false)
          setSlide1(true)
          doSlide3() 
        }, timeout); 
      }, timeout);
    }, timeout)
    setInterval(() => { 
      setTimeout(() => {
        setSlide1(false) 
        setSlide2(true)
        doSlide1()
        setTimeout(() => {
          setSlide2(false) 
          setSlide3(true)
          doSlide2()
          setTimeout(() => {
            setSlide3(false)
            setSlide1(true)
            doSlide3()
          }, timeout); 
        }, timeout);
      }, timeout)
    }, interval)

  },[]) 

  function doSlide1() {
    setTimeout(() => { document.querySelector('.slide1 h6').style.cssText += 'opacity:0;left:-50px' },900)
    setTimeout(() => { document.querySelector('.slide1 h1').style.cssText += 'opacity:0;top:-50px' },700)
    setTimeout(() => { document.querySelector('.slide1 button').style.cssText += 'opacity:0;left:-50px' },500)
    setTimeout(() => {
      document.querySelector('.slide1').style.opacity = '0'
      setTimeout(() => {document.querySelector('.slide1').style.display = 'none'},500)
      document.querySelector('.slide2').style.display = 'block'
      setTimeout(() => { document.querySelector('.slide2').style.opacity = '1' }, 200)
      setTimeout(() => { document.querySelector('.slide2 h6').style.cssText += 'opacity:1;left:0' },700)
      setTimeout(() => { document.querySelector('.slide2 h1').style.cssText += 'opacity:1;top:0' },1200)
      setTimeout(() => { document.querySelector('.slide2 button').style.cssText += 'opacity:1;left:0' },1700)
    }, 800);
  }
  function doSlide2() {
    setTimeout(() => { document.querySelector('.slide2 h6').style.cssText += 'opacity:0;left:-50px' },900)
    setTimeout(() => { document.querySelector('.slide2 h1').style.cssText += 'opacity:0;top:-50px' },700)
    setTimeout(() => { document.querySelector('.slide2 button').style.cssText += 'opacity:0;left:-50px' },500)
    setTimeout(() => {
      document.querySelector('.slide2').style.opacity = '0' 
      setTimeout(() => {document.querySelector('.slide2').style.display = 'none'},500)
      document.querySelector('.slide3').style.display = 'block'
      setTimeout(() => { document.querySelector('.slide3').style.opacity = '1' }, 200)
      setTimeout(() => { document.querySelector('.slide3 h6').style.cssText += 'opacity:1;left:0' },700)
      setTimeout(() => { document.querySelector('.slide3 h1').style.cssText += 'opacity:1;top:0' },1200)
      setTimeout(() => { document.querySelector('.slide3 button').style.cssText += 'opacity:1;left:0' },1700)
    }, 800);
  }
  function doSlide3() {
    setTimeout(() => { document.querySelector('.slide3 h6').style.cssText += 'opacity:0;left:-50px' },900)
    setTimeout(() => { document.querySelector('.slide3 h1').style.cssText += 'opacity:0;top:-50px' },700)
    setTimeout(() => { document.querySelector('.slide3 button').style.cssText += 'opacity:0;left:-50px' },500)
    setTimeout(() => {
      document.querySelector('.slide3').style.opacity = '0'
      setTimeout(() => {document.querySelector('.slide3').style.display = 'none'},500)
      document.querySelector('.slide1').style.display = 'block'
      setTimeout(() => { document.querySelector('.slide1').style.opacity = '1' }, 200)
      setTimeout(() => { document.querySelector('.slide1 h6').style.cssText += 'opacity:1;left:0' },700)
      setTimeout(() => { document.querySelector('.slide1 h1').style.cssText += 'opacity:1;top:0' },1200)
      setTimeout(() => { document.querySelector('.slide1 button').style.cssText += 'opacity:1;left:0' },1700)
    }, 800);
  }

  
  return (
    <div className="bgcont">
      <div className="slide1 slide">
        <div className="bgimg"></div>
        <div className="grid">
          <h6>#promos2020</h6>
          <h1>Shop<br/>Promos 2020</h1>
          <Link to="shop" onClick={() => window.scrollTo(0, 0)}><button>Shop Now</button></Link>
        </div>
      </div>
      <div className="slide2 slide">
        <div className="bgimg"></div>
        <div className="grid">
          <h6>#onsale2020</h6>
          <h1>Shop<br/>Promos 2020</h1>
          <Link to="shop" onClick={() => window.scrollTo(0, 0)}><button>Shop Now</button></Link>
        </div>
      </div>
      <div className="slide3 slide">
        <div className="bgimg"></div>
        <div className="grid">
          <h6>#hot2020</h6>
          <h1>Shop<br/>Promos 2020</h1>
          <Link to="shop" onClick={() => window.scrollTo(0, 0)}><button>Shop Now</button></Link>
        </div> 
      </div>
      
      <div className="grid">
        <div className="bgnav"> 
          <div style={{opacity: slide1?"1":""}}></div>
          <div style={{opacity: slide2?"1":""}}></div>
          <div style={{opacity: slide3?"1":""}}></div>
        </div>
      </div>
      
    </div>
  )
}

export default Mainbg