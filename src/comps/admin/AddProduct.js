import React, { useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom";
import { ProductContext } from '../../comps/site/ProductContext'

function AddProduct() {

  const {products, setProducts} = useContext(ProductContext)

  const [name, setName] = useState('Product Name')
  const [units, setUnits] = useState(1)
  const [id, setId] = useState('') 
  const [price, setPrice] = useState(0)
  const [img, setImg] = useState('')
  const [stock, setStock] = useState(false)
  const [color, setColor] = useState([''])
  const [sizes, setSizes] = useState([''])
  const [cat, setCat] = useState('')
  const [descript, detDescript] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.')

  const history = useHistory()
  const [imgview, setImgview] = useState('')

 
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

  function addAProduct() {
    setProducts(prevProd => [...prevProd,{name: name, units:units, id:id,price:parseFloat(price), img:img, stock:stock,color:color, sizes:sizes, cat:cat.split(','), descript:descript}])
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
              <h6>SKU Number (optional)</h6><input placeholder="e.g. elx12345" onChange={(e) => setId(e.target.value)}/>
            </label>
            <label>
              <h6>Price (CAD)</h6>
              <div className="currencydiv">$</div><input className="priceinp" placeholder="0.00" onChange={(e) => setPrice(e.target.value)}/><div className="clear"></div>
            </label>
            <label>
              <h6>Product Image</h6>
              <div className="uploadercont"><input className="uploadpic" type="file" onChange={uploadImg}/><i class="fas fa-cloud-upload-alt"></i><h5>{imgview===""?"Upload an image":"Change Image"}</h5></div>
              <div className="imgviewcont" style={{backgroundImage: "url("+imgview+")"}}></div><div className="clear"></div>
            </label>
          </div>
          <div className="gsub">
            <div className="label">
              <h6>Stock Status</h6>
              <button data-instock="true" onClick={(e) => setStock(e.target.getAttribute('data-instock'))}>In Stock</button>
              <button data-instock="false" onClick={(e) => setStock(e.target.getAttribute('data-instock'))}>Out Of Stock</button>
            </div>
            <label>
              <h6>Product Colors</h6>
              <select>
                <option disabled>Choose a Color</option><option value="black">Black</option><option value="white">White</option><option value="red">Red</option><option value="green">Green</option><option value="brown">Brown</option><option value="yellow">Yellow</option><option value="pink">Pink</option>
              </select>
            </label>
            <label>
              <h6>Product Sizes</h6>
              <div className="sizesbox" onClick={(e) => setStock(e.target.innerText)}>XS</div><div className="sizesbox" onClick={(e) => setStock(e.target.innerText)}>S</div><div className="sizesbox" onClick={(e) => setStock(e.target.innerText)}>M</div><div className="sizesbox" onClick={(e) => setStock(e.target.innerText)}>L</div><div className="sizesbox" onClick={(e) => setStock(e.target.innerText)}>XL</div>
            </label>
            <label>
              <h6>Product Categories</h6>
              <input placeholder="Seperate by commas" onClick={(e) => setStock(e.target.value)}/>
            </label>
            <label>
              <h6>Product Description</h6>
              <textarea placeholder="Tight fit women's fall dress" onClick={(e) => setStock(e.target.value)}></textarea>
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