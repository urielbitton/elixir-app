import React, { useContext, useEffect, useState } from "react"
import { ProductContext } from "../../comps/site/ProductContext"
import DashTableRow from "./DashTableRow"

function Products() {
  const { products, setProducts, general } = useContext(ProductContext)
  const [sort, setSort] = useState([0, 0])
  const [id, setId] = useState(1)
  const [name, setName] = useState("")
  const [img, setImg] = useState("")
  const [price, setPrice] = useState(0)
  const [instock, setStock] = useState()
  const [color, setColor] = useState([""])
  const [sizes, setSizes] = useState([""])
  const [prodsel, setProdsel] = useState(false)
  const [sale, setSale] = useState(false)
  const [cat, setCat] = useState([""])
  const [descript, setDescript] = useState("")
  const [qty, setQty] = useState(0)

  const [findname, setFindname] = useState("")
  const [updated, setUpdated] = useState(0)
  const pattern = new RegExp("\\b" + findname, "i")
  let allcount = 0,allqtypurch = 0,allearnings = 0,allavgprice = 0

  const myproducts = products.sort((a, b) => {
      if (sort[0] === 0) {
        if (sort[1] === 0) return a.id - b.id
        else return b.id - a.id
      } else if (sort[0] === 1) {
        if (sort[1] === 0) {
          if (a.name > b.name) return -1
          else if (a.name < b.name) return 1
        } else {
          if (a.name > b.name) return 1
          else if (a.name < b.name) return -1
        }
      } else if (sort[0] === 2) {
        if (sort[1] === 0) return a.price - b.price
        else return b.price - a.price
      } else if (sort[0] === 3) {
        if (sort[1] === 0) return a.qty - b.qty
        else return b.qty - a.qty
      } else if (sort[0] === 4) {
        if (sort[1] === 0) return a.purchased_qty - b.purchased_qty
        else return b.purchased_qty - a.purchased_qty
      } else if (sort[0] === 5) {
        if (sort[1] === 0) return a.earnings - b.earnings
        else return b.earnings - a.earnings
      } else if (sort[0] === 6) {
        if (sort[1] === 0) return a.instock - b.instock
        else return b.instock - a.instock
      }
    }).map((prod) => {
      if (pattern.test(prod.name.toLowerCase()))
        return (
          <DashTableRow img={prod.img} name={prod.name} price={prod.price} color={prod.color} sizes={prod.sizes} sale={prod.sale} cat={prod.cat} descript={prod.descript} qty={prod.qty} qty_purch={prod.purchased_qty} status={prod.purchased_status} instock={prod.instock} hot={prod.hot} sale={prod.sale} id={prod.id} openproduct={openProduct} updated={updated} hide="none" />
        )
      })

  function openProduct(id,name,price,img,instock,color,sizes,sale,cat,descript,qty) {
    setProdsel(true)
    setId(id)
    setName(name)
    setPrice(price)
    setImg(img)
    setStock(instock)
    setColor(color)
    setSizes(sizes)
    setSale(sale)
    setCat(cat)
    setDescript(descript)
    setQty(qty)
  }

  function editProduct(id) {
    let colors = []
    let prodsizes = []
    document.querySelectorAll(".colorbox").forEach((el) => {
      if (el.classList.contains("coloradded"))
        colors.push(el.getAttribute("data-color"))
    })
    document.querySelectorAll(".sizebox").forEach((el) => {
      if (el.classList.contains("sizeadded"))
        prodsizes.push(el.getAttribute("data-size"))
    })

    products.map((prod) => {
      if (prod.id === id) {
        prod.name = name
        prod.price = price
        prod.img = img
        prod.instock = instock
        prod.color = colors
        prod.sizes = prodsizes
        prod.sale = sale
        prod.cat = cat
        prod.descript = descript
        prod.qty = qty
      }
    })
    setUpdated((prev) => prev + 1)

    const notif = document.createElement("div")
    notif.innerHTML = `<i className="fas fa-circle-notch"></i><p>Product "${name}" has been successfully edited.</p><button className="viewprodbtn">View</button>`
    document.querySelector(".notifcont").appendChild(notif)
    setTimeout(() => {
      notif.style.cssText += "opacity:1;left:0"
    }, 100)
    setTimeout(() => {
      notif.style.cssText += "opacity:0;left:-40px"
      setTimeout(() => {
        notif.style.display = "none"
      }, 100)
    }, 4000)
  }

  function removeProduct(id) {
    products.map((prod) => {
      if (prod.id === id) {
        let prodindex = products.indexOf(prod)
        products.splice(prodindex, 1)
      }
    })
    setUpdated((prev) => prev + 1)
    setProdsel(false)
  }

  function uploadImg() {
    var file = document.querySelector(".uploadpic").files[0]
    var reader = new FileReader()
    reader.onloadend = function () {
      setImg(reader.result)
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }

  useEffect(() => {
    document.querySelectorAll(".myproductsoptions .colorbox").forEach((box) => {
      box.onclick = () => {
        box.classList.toggle("coloradded")
      }
    })
    document.querySelectorAll(".myproductsoptions .sizebox").forEach((box) => {
      box.onclick = () => {
        box.classList.toggle("sizeadded")
      }
    })
  }, [])

  return (
    <div className="myproductspage">
      <h2 className="homepagetitle">My Products</h2>
      <div className="myproductsgrid">
        <div className="dashbox dashlarge dashtable">
          <div className="headeropts">
            <h5>All Products</h5>
            <label>
              <i className="fas fa-search" aria-hidden="true"></i>
              <input placeholder="Find a product" onChange={(e) => setFindname(e.target.value.toLowerCase())} />
            </label>
            <div className="clear"></div>
          </div>
          <table>
            <thead>
              <tr>
              <th style={{ color: sort[0] === 0 ? "var(--color)" : "" }}> <h6 onClick={() => sort[1] === 0 ? setSort([0, 1]) : setSort([0, 0]) } > No.<i className="fas fa-sort"></i> </h6> </th> 
              <th style={{ color: sort[0] === 1 ? "var(--color)" : "" }}> <h6 onClick={() => sort[1] === 0 ? setSort([1, 1]) : setSort([1, 0]) } > Product Name<i className="fas fa-sort"></i> </h6> </th> 
              <th style={{ color: sort[0] === 2 ? "var(--color)" : "" }}> <h6 onClick={() => sort[1] === 0 ? setSort([2, 1]) : setSort([2, 0]) } > Unit Price<i className="fas fa-sort"></i> </h6> </th> 
              <th style={{ color: sort[0] === 3 ? "var(--color)" : "" }}> <h6 onClick={() => sort[1] === 0 ? setSort([3, 1]) : setSort([3, 0]) } > Qty<i className="fas fa-sort"></i> </h6> </th> 
              <th style={{ color: sort[0] === 4 ? "var(--color)" : "" }}> <h6 onClick={() => sort[1] === 0 ? setSort([4, 1]) : setSort([4, 0]) } > Quantity Sold<i className="fas fa-sort"></i> </h6> </th> 
              <th style={{ color: sort[0] === 5 ? "var(--color)" : "" }}> <h6 onClick={() => sort[1] === 0 ? setSort([5, 1]) : setSort([5, 0]) } > Earnings<i className="fas fa-sort"></i> </h6> </th> 
              <th style={{ color: sort[0] === 6 ? "var(--color)" : "" }}> <h6 onClick={() => sort[1] === 0 ? setSort([6, 1]) : setSort([6, 0]) } > Stock Status<i className="fas fa-sort"></i> </h6> </th>
              </tr> 
            </thead>
            <tbody>{myproducts}</tbody>
            <tfoot>
              {products.map((prod) => {
                allcount++
                allearnings += prod.earnings
                allqtypurch += prod.purchased_qty
                allavgprice += prod.price
              })}
              <td className="tfootdetails" colSpan="7">
                <h6>
                  {allcount}{" "}
                  <span>{allcount === 1 ? "Product" : "Products"}</span>
                </h6>
                <h6>
                  ${allearnings} <span>Total earnings</span>
                </h6>
                <h6>
                  {allqtypurch} <span>Quantities sold</span>
                </h6>
                <h6>
                  ${(allavgprice / allcount).toFixed(2)}{" "}
                  <span>Average price</span>
                </h6>
              </td>
            </tfoot>
          </table>
        </div>

        <div className="myproductsoptions dashbox" data-updated={updated}>
          <h4 className="rightbartitle">Manage Products</h4>
          <div className="innerprodopts" style={{ display: prodsel ? "block" : "none" }} >
            <label> <h6>Product Name</h6> <input className="prodnameinp" value={name} onChange={(e) => setName(e.target.value)} /> </label>
            <label className="imguploadlabel"> <h6>Product Image</h6> <div className="uploadercont" style={{ backgroundImage: "url(" + img + ")" }} > <input className="uploadpic" type="file" onChange={uploadImg} /> </div> </label>
            <label> <h6>Price (CAD)</h6> <div className="currencydiv">$</div> <input className="priceinp" value={parseFloat(price).toFixed(2)} onChange={(e) => setPrice(e.target.value)} /> <div className="clear"></div> </label>
            <div className="label"> <h6>Stock Status</h6> <button className={instock ? "stock" : ""} onClick={() => setStock(true)} > In Stock </button> <button className={instock ? "" : "stock"} onClick={() => setStock(false)} > Out of Stock </button> </div>
            <label> <h6>Product Quantity</h6> <input type="number" value={qty} className="prodqtyinp" onChange={(e) => { setQty((e.target.value>0?e.target.value:0, qty>0?setStock(true):"")) }} /> </label>
            <label> <h6>Product Colors</h6> {general.colorarr.map((allcolor) => {  
              if (color.includes(allcolor)) 
                return <div className="colorbox coloradded" data-color={allcolor} style={{ background: allcolor }} ></div>
              else 
                return <div className="colorbox" data-color={allcolor} style={{ background: allcolor }} ></div> 
             })} 
             </label>
            <label>
              <h6>Product Sizes</h6>
              {general.sizesarr.map((allsize) => {
                if (sizes.includes(allsize))
                  return (
                    <div className="sizebox sizeadded" data-size={allsize}>
                      {allsize}
                    </div>
                  )
                else
                  return (
                    <div className="sizebox" data-size={allsize}>
                      {allsize}
                    </div>
                  )
              })}
            </label>
            <div className="label"> <h6>On Sale Status</h6> <button className={sale ? "sale" : ""} onClick={() => setSale(true)} > On Sale </button> <button className={sale ? "" : "sale"} onClick={() => setSale(false)} > Regular Price </button> </div>
            <label> <h6>Categories</h6> <input value={cat.map((el) => { return el })} onChange={(e) => setCat(e.target.value.split(","))} /> </label>
            <label> <h6>Product Description</h6> <textarea value={descript} onChange={(e) => setDescript(e.target.value)} ></textarea> </label>

            <button className="saveproduct" onClick={() => editProduct(id)}>Save Product</button>
            <button className="removeproduct" onClick={() => removeProduct(id)}>Remove Product</button>
          </div>
          <div className="defaultinnerprod" style={{ display: prodsel ? "none" : "block" }}>
            <h6>Select a product to manage<i className="fas fa-th"></i></h6>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Products
