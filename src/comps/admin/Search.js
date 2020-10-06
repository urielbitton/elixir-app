import React, { useContext, useState, useRef } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from '../site/ProductContext'

function Search(props) {

  const {products, orders, customers, general} = useContext(ProductContext)
  const searchRef = useRef()
  
  const productsres = products.map(prod => { 
    if(props.pattern.test(prod.name.toLowerCase()) || props.pattern.test(prod.price))
      return <Link to="products" onClick={() => {searchRef.current.style.cssText+='opacity:0;top:90px';setTimeout(() => {searchRef.current.style.display='none'},100)}}><div className="sbox"><h4>{prod.name}</h4><h6>${prod.price}</h6><small data-stype="product">product</small></div></Link>
  }) 
  const ordersres = orders.map(ord => { 
    if(props.pattern.test(ord.number) || props.pattern.test(ord.custname.toLowerCase()))
      return <Link to="orders" onClick={() => {searchRef.current.style.cssText+='opacity:0;top:90px';setTimeout(() => {searchRef.current.style.display='none'},100)}}><div className="sbox"><h4>#{ord.number}</h4><h6>{ord.custname}</h6><small data-stype="order">order</small></div></Link>
  }) 
  const customersres = customers.map(cus => { 
    if(props.pattern.test(cus.name.toLowerCase()) || props.pattern.test(cus.email.toLowerCase()))
      return <Link to="customers" onClick={() => {searchRef.current.style.cssText+='opacity:0;top:90px';setTimeout(() => {searchRef.current.style.display='none'},100)}}><div className="sbox"><h4>{cus.name}</h4><h6>{cus.email}</h6><small data-stype="customer">customer</small></div></Link>
  })
  const couponres = general.coupons.map(coup => { 
    if(props.pattern.test(coup.name.toLowerCase()) || props.pattern.test(coup.amount))
      return <Link to="coupons" onClick={() => {searchRef.current.style.cssText+='opacity:0;top:90px';setTimeout(() => {searchRef.current.style.display='none'},100)}}><div className="sbox"><h4>{coup.name}</h4><h6>${coup.amount}</h6><small data-stype="coupon">coupon</small></div></Link>
  })  

  const searchresults = [...productsres, ...ordersres, ...customersres, ...couponres]

  return (
    <div className="searchbar" ref={searchRef}>
      <i className="close"></i>
      <div className="innersearchbar">
        {searchresults}
      </div> 
    </div>
  )
}

export default Search