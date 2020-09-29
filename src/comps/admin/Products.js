import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../comps/site/ProductContext'
import DashTableRow from './DashTableRow'

function Products() {

  const {products, setProducts,general} = useContext(ProductContext)
  const [sort, setSort] = useState(0)
  const [id, setId] = useState(1)
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [price, setPrice] = useState(0)
  const [instock, setInstock] = useState()
  const [color, setColor] = useState([''])
  const [sizes, setSizes] = useState([''])
  const [prodsel, setProdsel] = useState(false)
  const [sale, setSale] = useState(false)
  const [cat, setCat] = useState([''])
  const [descript, setDescript] = useState('')

  const [findname, setFindname] = useState('')
  const [updated, setUpdated] = useState(0)
  const pattern = new RegExp('\\b' + findname, 'i')

  const myproducts = products.sort((a,b) => {
    if(sort===0)
      return a.id-b.id
    else if(sort===1) {
      if(a.name < b.name)
        return -1
      else if(a.name < b.name)
        return 1
    }
    else if(sort===2)
      return a.price-b.price
    else if(sort===3)
      return a.qty-b.qty
    else if(sort===4)
      return a.earnings-b.earnings
    
  }).map(prod => {
      if(pattern.test(prod.name.toLowerCase()))
        return <DashTableRow img={prod.img} name={prod.name} price={prod.price} color={prod.color} sizes={prod.sizes} sale={prod.sale} cat={prod.cat} descript={prod.descript} qty_purch={prod.purchased_qty} status={prod.purchased_status} instock={prod.instock} hot={prod.hot} sale={prod.sale} id={prod.id} openproduct={openProduct} updated={updated}/>
  })

  const colorarr = ["black","lightgray","red","orange","brown","green","yellow","pink","blue","white"]
  const sizesarr = ["XS","S","M","L","XL"]

  function openProduct(id, name, price, img, instock, color, sizes, sale, cat, descript) {
    setProdsel(true)
    setId(id)
    setName(name)
    setPrice(price)
    setImg(img)
    setInstock(instock)  
    setColor(color)
    setSizes(sizes)
    setSale(sale)
    setCat(cat)
    setDescript(descript)
  }  

  function editProduct(id) {
    let colors = []
    let prodsizes = []
    document.querySelectorAll('.colorbox').forEach(el => {
      if(el.classList.contains('coloradded')) 
        colors.push(el.getAttribute('data-color'))
    })
    document.querySelectorAll('.sizebox').forEach(el => {
      if(el.classList.contains('sizeadded')) 
        prodsizes.push(el.getAttribute('data-size'))
    })

    products.map(prod => {
      if(prod.id === id) {
        prod.name = name
        prod.price = price
        prod.img = img
        prod.instock = instock
        prod.color = colors
        prod.sizes = prodsizes
        prod.sale = sale
        prod.cat = cat
        prod.descript = descript
      }  
    })
    setUpdated(prev => prev+1)
    colors = []
    prodsizes = []
    document.querySelectorAll('.colorbox').forEach(el => { el.classList.remove('coloradded');el.style.border = '' })
    document.querySelectorAll('.sizebox').forEach(el => { el.classList.remove('sizeadded');el.style.cssText += 'background:#f1f1f1;color:#555' })

    const notif = document.createElement('div')
    notif.innerHTML = `<i className="fas fa-circle-notch"></i><p>Product "${name}" has been successfully edited.</p><button className="viewprodbtn">View</button>`
    document.querySelector('.notifcont').appendChild(notif)
    setTimeout(() => {
      notif.style.cssText += 'opacity:1;left:0'
    }, 100)
    setTimeout(() => {
      notif.style.cssText += 'opacity:0;left:-40px'
      setTimeout(() => {
        notif.style.display = 'none'
      }, 100)
    }, 4000)  
  }
 
  function removeProduct(id) {
    products.map(prod => {
      if(prod.id === id) {
        let prodindex = products.indexOf(prod)
        products.splice(prodindex,1)
      }   
    })
    setUpdated(prev => prev+1) 
    setProdsel(false)
  }  

  function uploadImg() {
    var file = document.querySelector(".uploadpic").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        setImg(reader.result) 
    } 
    if(file) {
        reader.readAsDataURL(file);
      } 
  }

  useEffect(() => {
    document.querySelectorAll('.myproductsoptions .colorbox').forEach(box => {
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
    document.querySelectorAll('.myproductsoptions .sizebox').forEach(box => {
      box.onclick = () => {
        if(!box.classList.contains('sizeadded')) {
          box.style.cssText += 'background:#111;color:#fff'
          box.classList.add('sizeadded')
        }
        else { 
          box.style.cssText += 'background:#f1f1f1;color:#555'
          box.classList.remove('sizeadded')
        }
      }
    })
  },[])

  return (
    <div className="myproductspage">
      <h2 className="homepagetitle">My Products</h2>
      <div className="spacer"></div>

      <div className="myproductsgrid">
      <div className="dashbox dashlarge">
        <div className="headeropts">
          <h5>All Products</h5>
          <label><i className="fas fa-search" aria-hidden="true"></i><input placeholder="Find a product" onChange={(e) => setFindname(e.target.value.toLowerCase())}/></label>
          <div className="clear"></div>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{color: sort===0?"var(--color)":""}}><h6 onClick={() => setSort(0)}>No.<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===1?"var(--color)":""}}><h6 onClick={() => setSort(1)}>Product Name<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===2?"var(--color)":""}}><h6 onClick={() => setSort(2)}>Unit Price<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===3?"var(--color)":""}}><h6 onClick={() => setSort(3)}>Quantity Sold<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===4?"var(--color)":""}}><h6 onClick={() => setSort(4)}>Earnings<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===5?"var(--color)":""}}><h6>Stock Status</h6></th> 
            </tr>
          </thead>  
          <tbody>
            {myproducts}
          </tbody>  
          <tfoot>
            <div className="spacers"></div>
          </tfoot>
        </table>
      </div>

      <div className="myproductsoptions dashbox">
        <h4>Manage Products</h4>
        <div className="innerprodopts" style={{display: prodsel?"block":"none"}}>
          <label>
            <h6>Product Name</h6>
            <input className="prodnameinp" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
          <label className="imguploadlabel">
            <h6>Product Image</h6>
            <div className="uploadercont" style={{backgroundImage: "url("+img+")"}}><input className="uploadpic" type="file" onChange={uploadImg}/></div>
          </label>
          <label>
            <h6>Price (CAD)</h6>
            <div className="currencydiv">$</div><input className="priceinp" value={parseFloat(price).toFixed(2)} onChange={(e) => setPrice(e.target.value)}/><div className="clear"></div>
          </label> 
          <div className="label">
            <h6>Stock Status</h6>
            <button className={instock?"stock":""} onClick={() => setInstock(true)}>In Stock</button>
            <button className={instock?"":"stock"} onClick={() => setInstock(false)}>Out of Stock</button>
          </div>
          <label>
          <h6>Product Colors {color.map(color => {return <div className="colorcircle" style={{background: color}}></div>})}</h6>
            {
              colorarr.map(color => {
                if(color === "white")
                  return <div className="colorbox" data-color="#f7f7f7" style={{background: "#f7f7f7"}}></div>
                else
                  return <div className="colorbox" data-color={color} style={{background: color}}></div>
              })
            } 
          </label>
          <label>
            <h6>Product Sizes - {sizes.map(size=> {return <small className="smallsizes">{size}</small>})}</h6>
            {
              sizesarr.map(size => {
                return <div className="sizebox" data-size={size}>{size}</div>
              })
            } 
          </label>
          <div className="label">
            <h6>On Sale Status</h6>
            <button className={sale?"sale":""} onClick={() => setSale(true)}>On Sale</button>
            <button className={sale?"":"sale"} onClick={() => setSale(false)}>Regular Price</button>
          </div> 
          <label>
            <h6>Categories</h6>
            {cat.map(el => {return <small>{el}, </small>})}
            <br/><br/>
            <input placeholder="Seperate by commas" onChange={(e) => setCat(e.target.value.split(','))}/>
          </label>
          <label>
            <h6>Product Description</h6>
            <textarea placeholder={descript} onChange={(e) => setDescript(e.target.value)}></textarea>
          </label>

          <button className="saveproduct" onClick={() => editProduct(id)}>Save Product</button>
          <button className="removeproduct" onClick={() => removeProduct(id)}>Remove Product</button>
        </div>
        <div className="defaultinnerprod" style={{display: prodsel?"none":"block"}}>
          <h6>Select a product to manage<i className="fas fa-th"></i></h6>
        </div>
      </div>
 
      </div> 
    </div>
  )
}

export default Products