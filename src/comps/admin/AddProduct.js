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
  const [cat, setCat] = useState('new')
  const [descript, setDescript] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.')
  const [person, setPerson] = useState('')
  const [purchased_status, setPurchasedStatus] = useState(false)
  const [purchased_qty, setPurchasedQty] = useState(0)
 
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
    setProducts(prevProd => [...prevProd,{id:id, name: name, units:units,price:parseFloat(price), img:img, instock:stock,color:color, sizes:sizes, cat:cat.trim().split(','), descript:descript, purchased_status:purchased_status, purchased_qty:purchased_qty}])
    
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
        if(!box.classList.contains('sizeadd')) {
          box.style.border = '2px solid var(--color2)'
          box.classList.add('sizeadd')
        }
        else {
          box.style.border = ''
          box.classList.remove('sizeadd')
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
              <h6>SKU Number (optional)</h6><input placeholder="e.g. 1001" onChange={(e) => setId(e.target.value)}/>
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
              <button onClick={() => setStock(true)}>In Stock</button>
              <button onClick={() => setStock(false)}>Out Of Stock</button>
            </div>
            <label>
              <h6>Product Type</h6>
              <select>
                <option disabled>Choose a Type</option><option value="women">Women</option><option value="men">Men</option><option value="kids">Kids</option><option value="unisex">Unisex</option>
              </select>
            </label>
            <label>
              <h6>Product Colors</h6>
              <div className="colorbox"></div><div className="colorbox"></div><div className="colorbox"></div><div className="colorbox"></div><div className="colorbox"></div><div className="colorbox"></div><div className="colorbox"></div>
            </label>
            <label>
              <h6>Product Sizes</h6>
              <div className="sizesbox" onClick={(e) => setSizes(e.target.innerText)}>XS</div><div className="sizesbox">S</div><div className="sizesbox">M</div><div className="sizesbox">L</div><div className="sizesbox">XL</div>
            </label>
            <label>
              <h6>Product Categories</h6>
              <input placeholder="Seperate by commas" onClick={(e) => setCat(e.target.value)}/>
            </label>
            <label>
              <h6>Product Description</h6>
              <textarea placeholder="Tight fit women's fall dress" onClick={(e) => setDescript(e.target.value)}></textarea>
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