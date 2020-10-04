import React, {useEffect, useContext, useState} from 'react'
import { ProductContext } from './ProductContext'

function CompareView(props) {

  const {products, setProducts, setGeneral} = useContext(ProductContext)

  const [nums, setNums] = useState(2)

  useEffect(() => {
    document.querySelector('.compareview table').style.width = 1200+(nums*200)
    const close = document.querySelector('.comparecont .close')
    close.onclick = () => {
      document.querySelector('.comparecont').style.opacity = '0'
      setTimeout(() => {
        document.querySelector('.comparecont').style.display = 'none'
      }, 100);
    }
  },[]) 

  return (  
    <div className="comparecont">
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
            </tr>  
            <tr>
              <td><img src={props.img} alt="" /></td>
              <td>{props.name}</td>
              <td>${props.price}</td>
              <td className="descript"><p>{props.descript}</p></td>
              <td className="stock">{props.instock?"In Stock":"Out of Stock"}</td>
              <td>{props.color.map(color => {return <div className="colorbox" style={{background: color}}></div>})}</td>
              <td>{props.sizes.map(size => {return <div className="sizebox">{size}</div>})}</td>
              <td><button>Add to Cart</button></td>
            </tr>
            <div className="clear"></div>
          </table>
         </div>
       </div>
    </div>
  )
}

export default CompareView