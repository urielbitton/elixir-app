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

function Website() { 
 
  const {products, setProducts, setGeneral} = useContext(ProductContext)
  const [cartitems, setCartitems] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [wishnum, setWishnum] = useState(0)
  const [currunits, setCurrunits] = useState(1)

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
  
  function updateCartNum() {
    setCartitems(num => num+1)
  }
  function updateSubtotal(current) {
    setSubtotal(sub => sub+current)
  } 
  function updateUnits(current) {
    setCurrunits(prev => prev+current) 
  }

  function updateWishnum() {
    setWishnum(wish => wish+1)
  } 
  function openProduct(prod,id,name,img,price,descript,color,cat,sizes,units,addcart,wishlist) {
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
      <Navbar cartitems={cartitems} subtotal={subtotal} units={units} wishnum={wishnum}/>  
      <Search />
      <Switch>  
        <Route exact path="/">
          <Home updatecartnum={updateCartNum} updatesub={updateSubtotal} updateunits={updateUnits} updatewish={updateWishnum} wishnum={wishnum} openproduct={openProduct} />
        </Route>   
        <Route path="/shop">
          <Shop updatecartnum={updateCartNum} updatesub={updateSubtotal} updatewish={updateWishnum} openproduct={openProduct} />
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
          <ProductPage prod={prod} id={id} name={name} img={img} price={price} descript={descript} color={color} cat={cat} sizes={sizes} units={units} addcart={addcart} wishlist={wishlist} updatecartnum={updateCartNum} updatesub={updateSubtotal} updateunits={updateUnits} updatewish={updateWishnum} wishnum={wishnum} openproduct={openProduct}/>
        </Route> 
        <Route path="/cart">
          <CartPage subtotal={subtotal} cartitems={cartitems} />
        </Route> 
        <Route path="/checkout">
          <Checkout subtotal={subtotal} />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>  
      </Switch> 
   
      <QuickView prod={prod} id={id} name={name} img={img} price={price} descript={descript} color={color} cat={cat} sizes={sizes} units={units} addcart={addcart} wishlist={wishlist} updatecartnum={updateCartNum} updatesub={updateSubtotal} updateunits={updateUnits} updatewish={updateWishnum} wishnum={wishnum} />
      <Footer /> 
    </>
  )
}

export default Website