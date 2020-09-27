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

  const [findname, setFindname] = useState('')
  const [updated, setUpdated] = useState()
  const pattern = new RegExp('\\b' + findname, 'i')
  let timeupdate = new Date()

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
        return <DashTableRow img={prod.img} name={prod.name} price={prod.price} color={prod.color} qty={prod.purchased_qty} status={prod.purchased_status} instock={prod.instock} hot={prod.hot} sale={prod.sale} id={prod.id} openproduct={openProduct} updated={updated}/>
  })

  const colorarr = ["black","lightgray","red","orange","brown","green","yellow","pink","blue","white"]

  function openProduct(id, name, price, img, instock, color) {
    setId(id)
    setName(name)
    setPrice(price)
    setImg(img)
    setInstock(instock)  
    setColor(color)
  }  

  function editProduct(id) {
    const colors = []
    document.querySelectorAll('.colorbox').forEach(el => {
      if(el.classList.contains('coloradded')) 
        colors.push(el.getAttribute('data-color'))
    })
    products.map(prod => {
      if(prod.id === id) {
        prod.name = name
        prod.price = price
        prod.img = img
        prod.instock = instock
        prod.color = colors
      }
    })
    setUpdated(timeupdate.getSeconds())
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
  },[])

  return (
    <div className="myproductspage">
      <h2 className="homepagetitle">My Products</h2>
      <div className="spacer"></div>

      <div className="myproductsgrid">
      <div className="dashbox dashlarge">
        <div className="headeropts">
          <h5>Recently Sold</h5>
          <label><i class="fas fa-search" aria-hidden="true"></i><input placeholder="Find a product" onChange={(e) => setFindname(e.target.value.toLowerCase())}/></label>
          <div className="clear"></div>
        </div>
        <table>
          <thead>
            <tr>
              <th style={{color: sort===0?"var(--color)":""}} onClick={() => setSort(0)}><h6>No.<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===1?"var(--color)":""}} onClick={() => setSort(1)}><h6>Product Name<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===2?"var(--color)":""}} onClick={() => setSort(2)}><h6>Unit Price<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===3?"var(--color)":""}} onClick={() => setSort(3)}><h6>Quantity Sold<i className="fas fa-sort"></i></h6></th>
              <th style={{color: sort===4?"var(--color)":""}} onClick={() => setSort(4)}><h6>Earnings<i className="fas fa-sort"></i></h6></th>
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
        <div className="innerprodopts">
          <label>
            <h6>Product Name</h6>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
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

          <button className="saveproduct" onClick={() => editProduct(id)}>Save Product</button>
        </div>
      </div>

      </div> 
    </div>
  )
}

export default Products