import React, {useEffect, useContext, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import Navbar from './Navbar'
import Home from './Home'
import Shop from './Shop'
import About from './About' 
import Gallery from './Gallery' 
import Contact from './Contact'
import ProductPage from './ProductPage';
import QuickView from './QuickView'
import CartPage from './CartPage';
import Footer from './Footer'
import Checkout from './Checkout';
import Search from './Search'
import Wishlist from './Wishlist';
import Login from '../Login'
import OrderConfirm from './OrderConfirm';
import CompareView from './CompareView'

function Website(props) { 
 
  const {products, setProducts, setGeneral} = useContext(ProductContext)
  const [cartitems, setCartitems] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [wishnum, setWishnum] = useState(0)
  const [colorupdate, setColorupdate] = useState(false)
  const [sizeupdate, setSizeupdate] = useState(false)
  const [couponname, setCouponname] = useState('')
  const [couponamount, setCouponamount] = useState(0)
  const [update, setUpdate] = useState(0)
  const [updatestat, setUpdateStat] = useState(0)

  const [prod, setProd] = useState("")
  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [img, setImg] = useState("") 
  const [price, setPrice] = useState(0)
  const [descript, setDescript] = useState("")
  const [color, setColor] = useState([""])
  const [cat, setCat] = useState([""])
  const [sizes, setSizes] = useState([""])
  const [units, setUnits] = useState(1)
  const [addcart, setAddcart] = useState(false)
  const [wishlist, setWishlist] = useState(false)
  const [instock, setStock] = useState(false)
  const [qty, setQty] = useState(0)
  const [ratings, setRatings] = useState(0)
   
  function updateCartNum() {
    setCartitems(num => num+1)
  }
  function subCartNum() {
    setCartitems(num => num-1)
  }
  function zeroCartNum() {
    setCartitems(0)
    setSubtotal(0)
    products.map(prod => {
      prod.addcart = false
      prod.units = 1
    })
  }
  function updateSubtotal(current) {
    setSubtotal(sub => sub+current)
  } 
  function updateUnits(current) {
    setUnits(prev => prev+current) 
  }
  function updateWishnum() {
    setWishnum(wish => wish+1)
  }
  function subWishnum() {
    setWishnum(wish => wish-1) 
  }
  function zeroWishnum() {
    setWishnum(0)
  }
  function connectSub(updatedsub) {
    setSubtotal(updatedsub) 
  } 
  function setProdColor() {
    setColorupdate(true)
  }
  function setProdSize() {
    setSizeupdate(true)
  }
  function applyCoupon(couponname, couponamount) {
    setCouponname(couponname)
    setCouponamount(couponamount)
  }
  function updateCompare() {
    setUpdate(prev => prev+1)
  }
  function updateCompStatus() {
    setUpdateStat(prev => prev+1)
  }
  
  function openProduct(prod,id,name,img,price,descript,color,cat,sizes,units,addcart,wishlist,instock,qty,ratings) {
    setProd(prod)
    setId(id)
    setName(name)
    setImg(img)
    setPrice(price)
    setDescript(descript)
    setColor(color)
    setCat(cat)
    setSizes(sizes)
    setUnits(units)
    setWishlist(wishlist) 
    setAddcart(addcart)
    setStock(instock)
    setQty(qty)
    setRatings(ratings)
  } 

  useEffect(() => {
    const taber = document.querySelectorAll('[re-taber]')
    const tab = document.querySelectorAll('[re-tab]')
    taber.forEach(el1 => {
      el1.onclick = () => {
        let tabselector = el1.getAttribute('re-taber')
        tab.forEach(el2 => { 
          el2.style.display = 'none' 
          setTimeout(() => {
            el2.style.opacity = '0'
          }, 50); 
        }) 
        taber.forEach(el3 => el3.classList.remove('activetab'))
        document.querySelector(`[re-tab="${tabselector}"]`).style.display = 'block'
        el1.classList.add('activetab')
        setTimeout(() => {
          document.querySelector(`[re-tab="${tabselector}"]`).style.opacity = '1'
        }, 50);
      }
    })  
    document.querySelectorAll('.backtop').forEach(el => el.onclick = () => window.scrollTo(0, 0))
       
  },[])  
    
  return (  
    <> 
      <Navbar cartitems={cartitems} subtotal={subtotal} units={units} wishnum={wishnum} adminon={props.adminon} openproduct={openProduct}/>  
      <Search openproduct={openProduct}/>
      <Switch>  
        <Route exact path="/">
          <Home updatecartnum={updateCartNum} updatesub={updateSubtotal} updateunits={updateUnits} updatewish={updateWishnum} wishnum={wishnum} openproduct={openProduct} updatecompare={updateCompare} updatecompstatus={updatestat}/>
        </Route>   
        <Route path="/shop">
          <Shop updatecartnum={updateCartNum} updatesub={updateSubtotal} updatewish={updateWishnum} openproduct={openProduct} updatecompare={updateCompare} updatecompstatus={updatestat}/>
        </Route> 
        <Route path="/about">
          <About />
        </Route> 
        <Route path="/gallery">
          <Gallery />
        </Route> 
        <Route path="/contact">
          <Contact />
        </Route> 
        <Route path="/product"> 
          <ProductPage prod={prod} id={id} name={name} img={img} price={price} descript={descript} color={color} cat={cat} sizes={sizes} units={units} instock={instock} addcart={addcart} qty={qty} ratings={ratings} wishlist={wishlist} updatecartnum={updateCartNum} updatesub={updateSubtotal} updateunits={updateUnits} updatewish={updateWishnum} wishnum={wishnum} openproduct={openProduct} setprodcolor={setProdColor} setprodsize={setProdSize}/>
        </Route> 
        <Route path="/cart">
          <CartPage prod={prod} subtotal={subtotal} cartitems={cartitems} connectsub={connectSub} subcartnum={subCartNum} zerocartnum={zeroCartNum} colorupdate={colorupdate} sizeupdate={sizeupdate} applycoupon={applyCoupon} openproduct={openProduct}/>
        </Route> 
        <Route path="/checkout">
          <Checkout subtotal={subtotal} zerocartnum={zeroCartNum} cartitems={cartitems} couponname={couponname} couponamount={couponamount}/>
        </Route>
        <Route path="/wishlist">
          <Wishlist subwishnum={subWishnum} zerowishnum={zeroWishnum} openproduct={openProduct}/>
        </Route> 
        <Route path="/orderconfirm">
          <OrderConfirm />
        </Route>    
      </Switch> 
   
      <QuickView prod={prod} id={id} name={name} img={img} price={price} descript={descript} color={color} cat={cat} sizes={sizes} units={units} addcart={addcart} ratings={ratings} wishlist={wishlist} updatecartnum={updateCartNum} updatesub={updateSubtotal} updateunits={updateUnits} updatewish={updateWishnum} wishnum={wishnum} setprodcolor={setProdColor} setprodsize={setProdSize} />
      <CompareView update={update} updatecompstatus={updateCompStatus}/>
      <Footer /> 
    </>
  )
}

export default Website