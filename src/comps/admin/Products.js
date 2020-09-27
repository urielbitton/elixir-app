import React, { useContext, useState } from 'react'
import { ProductContext } from '../../comps/site/ProductContext'
import DashTableRow from './DashTableRow'

function Products() {

  const {products, setProducts,general} = useContext(ProductContext)
  const [sort, setSort] = useState(0)
  const [id, setId] = useState(1)
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [imgview, setImgview] = useState(img)
  const [price, setPrice] = useState(0)

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
        return <DashTableRow img={prod.img} name={prod.name} price={prod.price} qty={prod.purchased_qty} status={prod.purchased_status} instock={prod.instock} hot={prod.hot} sale={prod.sale} id={prod.id} openproduct={openProduct} updated={updated}/>
  })

  function openProduct(id, name, price, img) {
    setId(id)
    setName(name)
    setPrice(price)
    setImg(img)
    setImgview(img)
  } 

  function editProduct(id) {
    products.map(prod => {
      if(prod.id === id) {
        prod.name = name
        prod.price = price
        prod.img = img
      }
    })
    setUpdated(timeupdate.getSeconds())
  }

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
            <div className="uploadercont" style={{backgroundImage: "url("+imgview+")"}}><input className="uploadpic" type="file" onChange={uploadImg}/></div>
          </label>
          <label>
            <h6>Price (CAD)</h6>
            <div className="currencydiv">$</div><input className="priceinp" value={parseFloat(price).toFixed(2)} onChange={(e) => setPrice(e.target.value)}/><div className="clear"></div>
          </label> 

          <button className="saveproduct" onClick={() => editProduct(id)}>Save Product</button>
        </div>
      </div>

      </div> 
    </div>
  )
}

export default Products