import React, { useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom";
import { ProductContext } from '../../comps/site/ProductContext'

function AddProduct() {

  const {products, setProducts, general} = useContext(ProductContext)
  const newid = products[products.length-1]

  const [name, setName] = useState('Product Name')
  const [units, setUnits] = useState(1)
  const [id, setId] = useState(newid.id+1) 
  const [price, setPrice] = useState(0)
  const [img, setImg] = useState('')
  const [stock, setStock] = useState(false)
  const [color, setColor] = useState('')
  const [sizes, setSizes] = useState('')
  const [cat, setCat] = useState('new')
  const [descript, setDescript] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.')
  const [person, setPerson] = useState('')
  const [purchased_status, setPurchasedStatus] = useState(false)
  const [purchased_qty, setPurchasedQty] = useState(0)
  const [qty, setQty] = useState(10)
 
  const history = useHistory()
  const [imgview, setImgview] = useState('')
  const [newcolor, setNewcolor] = useState('')
  const [update, setUpdate] = useState(0)

 
  function uploadImg() {
    var file = document.querySelector(".uploadpic").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        setImg(reader.result) 
        setImgview(reader.result)
    } 
    if(file) {
        reader.readAsDataURL(file);
      } 
  }
  function addCustomColor() {
    general.colorarr.push(newcolor)
    setNewcolor(newcolor)
    setUpdate(prev => prev+1) 
  }

  function addAProduct() {
    const colors = []
    const sizearr = []
    document.querySelectorAll('.colorbox').forEach(el => {
      if(el.classList.contains('coloradded')) 
        colors.push(el.getAttribute('data-color'))
    })
    document.querySelectorAll('.sizesbox').forEach(el => {
      if(el.classList.contains('sizeadd')) 
        sizearr.push(el.getAttribute('data-size'))
    }) 
    setId(previd => previd+1) 
    setProducts(prevProd => [...prevProd,{id:id, name: name, units:units,price:parseFloat(price), img:img, instock:stock,color:colors, sizes:sizearr, cat:cat.trim().split(','), descript:descript, purchased_status:purchased_status, purchased_qty:purchased_qty, qty:qty}])
    
    const notif = document.createElement('div')
    notif.innerHTML = `<i class="fas fa-circle-notch"></i><p>Product "${name}" has been successfully created and added to your store.</p><button className="viewprodbtn">View</button>`
    document.querySelector('.notifcont').appendChild(notif)
    setTimeout(() => {
      notif.style.cssText += 'opacity:1;left:0'
    }, 100);
    setTimeout(() => {
      history.push('/products') 
    },1000) 
    setTimeout(() => {
      notif.style.cssText += 'opacity:0;left:-40px'
      setTimeout(() => {
        notif.style.display = 'none'
      }, 100); 
    }, 4000);
    
  } 

  useEffect(() => {
    document.querySelectorAll('.addproductcont .sizesbox').forEach(box => {
      box.onclick = () => {
        if(!box.classList.contains('sizeadd')) {
          box.style.cssText += 'background:#111;color:#fff'
          box.classList.add('sizeadd')
        }
        else {
          box.style.cssText += 'background:#fafafa;color:#333'
          box.classList.remove('sizeadd')
        }
      }
    })
    document.querySelectorAll('.addproductcont .colorbox').forEach(box => {
      box.onclick = () => {
        if(!box.classList.contains('coloradded')) {
          box.style.border = '2px solid var(--color)'
          box.classList.add('coloradded')
        }
        else {
          box.style.border = ''
          box.classList.remove('coloradded')
        }
      }
    })
  },[])
 
  return (
    <>
    <h2 className="homepagetitle">Add a Product</h2>
    <div className="addproductcont">

        <div className="addform">
          <div className="gsub">
            <label>
              <h6>Product Name</h6><input placeholder="e.g. Striped Summer Shirt" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              <h6>SKU Number (optional)</h6><input placeholder="e.g. 1001"/>
            </label> 
            <label>
              <h6>Price (CAD)</h6>
              <div className="currencydiv">$</div><input className="priceinp" placeholder="0.00" onChange={(e) => setPrice(e.target.value)}/><div className="clear"></div>
            </label> 
            <label> 
              <h6>Product Quantity</h6> 
              <input className="qtyinp" type="number" value={qty} placeholder="0" onChange={(e) => {setQty((e.target.value)>0?e.target.value:0, qty>0?setStock(true):"")}}/><div className="clear"></div>
            </label>
            <label className="imguploadlabel"> 
              <h6>Product Image</h6>
              <div className="uploadercont" style={{backgroundImage: "url("+imgview+")"}}><input className="uploadpic" type="file" onChange={uploadImg}/>{!imgview?<><i class="fas fa-cloud-upload-alt"></i><h5>Upload an Image</h5></>:""}</div>
            </label>
          </div> 
          <div className="gsub">
            <div className="label"> 
              <h6>Stock Status</h6>
              <button onClick={() => setStock(true)} className={stock?"stockopt":""}>In Stock</button>
              <button onClick={() => setStock(false)} className={stock?"":"stockopt"}>Out Of Stock</button>
            </div>
            <label>
              <h6>Product Type</h6>
              <select>
                <option disabled>Choose a Type</option><option value="women">Women</option><option value="men">Men</option><option value="kids">Kids</option><option value="unisex">Unisex</option>
              </select>
            </label>  
            <div className="label"> 
              <h6>Product Colors</h6>
              {general.colorarr.map(color => {
                return <div className="colorbox" data-color={color} style={{background: color}}></div>
              })} 
              <small className="customcolor">Custom Color</small><input className="newcolorinp" value={newcolor} onChange={(e) => setNewcolor(e.target.value)} type="color"/>
              <button className="addcustomcolorbtn" onClick={() => addCustomColor()}>Add Color</button>
            </div>
            <label> 
              <h6>Product Sizes</h6>
              <div className="sizesbox" data-size="XS">XS</div><div className="sizesbox" data-size="S">S</div><div className="sizesbox" data-size="M">M</div><div className="sizesbox" data-size="L">L</div><div className="sizesbox" data-size="XL">XL</div>
            </label>
            <label>
              <h6>Product Categories</h6>
              <input placeholder="Seperate by commas" onChange={(e) => setCat(e.target.value.trim())}/>
            </label>
            <label>
              <h6>Product Description</h6>
              <textarea placeholder="Tight fit women's fall dress" onChange={(e) => setDescript(e.target.value)}></textarea>
            </label> 
          </div>
          <div className="gsub"> 
            <h4>Review Product</h4>
            <Link className="confirmaddprod"><button onClick={() => addAProduct()}>Add Product</button></Link>
          </div>
          
        </div>
    </div>
    </>
  )
}

export default AddProduct