import React, {useEffect, useContext, useState} from 'react'
import { ProductContext } from './ProductContext'

function CompareView(props) {

  const {products, setProducts, general, setGeneral} = useContext(ProductContext)
  const [nums, setNums] = useState(2)
  const [update, setUpdate] = useState(0)
  
  const comparedprods = general.compareprods.map(prod => {
    return (<tr>
    <td><img src={prod.img} alt="" /></td>
    <td>{prod.name}</td>
    <td>${prod.price}</td>
    <td className="descript"><p>{prod.descript}</p></td>
    <td className="stock">{prod.instock?"In Stock":"Out of Stock"}</td>
    <td>{prod.color.map(color => {return <div className="colorbox" style={{background: color}}></div>})}</td>
    <td>{prod.sizes.map(size => {return <div className="sizebox">{size}</div>})}</td>
    <td><button>Add to Cart</button></td>
    <td><i class="far fa-window-close removecompare" onClick={() => removeCompared(prod.id)}></i></td>
  </tr>)
  })   

  function removeCompared(prodid) {
    general.compareprods.map(prod => {
      if(prod.id === prodid) {
        let prodindex = general.compareprods.indexOf(prod)
        general.compareprods.splice(prodindex,1)
        setUpdate(prev => prev+1)
      } 
      products.map(el => {
        if(el.id === prodid) {
          el.compared = false
          props.updatecompstatus()
        }
      })
    }) 
    
  }

  useEffect(() => {
    document.querySelector('.compareview table').style.width = 1200+(nums*200)
    const close = document.querySelector('.comparecont .close')
    close.onclick = () => {
      document.querySelector('.comparecont').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('.comparecont').style.display = 'none'
      }, 100)
      document.body.style.overflowY = 'auto'
    }
  },[])  

  return (  
    <div className="comparecont" data-update={props.update} data-update2={update}>
      <i className="close"></i>
       <div className="compareview">
         <h2>Compare Products</h2>
         <div className="compareinner">
          <table>
            <tr className="compareheader">
              <th></th>  
              <th><span>Name</span></th>
              <th><span>Price</span></th>
              <th className="descript"><span>Description</span></th>
              <th><span>Availability</span></th>
              <th><span>Colors</span></th>
              <th><span>Sizes</span></th>
              <th><span>Add to Cart</span></th>
              <th><span>Remove</span></th>
            </tr>  
            {comparedprods}
            <div className="clear"></div>
          </table>
         </div>
       </div>
    </div>
  )
}

export default CompareView