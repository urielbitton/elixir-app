import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory  } from "react-router-dom"
import PageBanner  from './PageBanner'
import { ProductContext } from "./ProductContext";

function OrderConfirm() {

  const {products, general} = useContext(ProductContext)

  return (
    <div className="orderconfirmpage">
      <PageBanner title="Order Confirmation" subtitle="Confirmation of your order with Elixir" bgimg="https://i.imgur.com/fmUs80b.jpg"/>

      <div className="grid xgrid pgrid">
        <h2>Thank you for your order.</h2>
        <h6>Here is your order summary.</h6>

        <table>
          <thead>
            <th>Product</th>
            <th></th> 
            <th>Price</th>
            <th>Quantity</th>
            <th>Date Purchased</th>
            <th>Subtotal</th>
          </thead>
          <tbody> 
             {
               products.map(prod => {
                 if(prod.purchased_status===true && prod.neworder===true)
                  return <tr><td><img src={prod.img} alt=""/></td><td>{prod.name}</td><td>${prod.price.toFixed(2)}</td><td>{prod.tempqty}</td><td>{prod.datesold}</td><td>${parseFloat(prod.price*prod.tempqty).toFixed(2)}</td></tr>
               })
             }
          </tbody>
        </table> 
        <div className="ordertotalsdiv">
             <h6>Tax Amount ({general.taxrate*100}%): <span>${parseFloat((general.taxrate*general.subtotal)+general.subtotal).toFixed(2)}</span></h6>
             <h6>Subtotal: <span>${parseFloat(general.subtotal).toFixed(2)}</span><i className="clear"></i></h6>
             <h6>Total: <span>${parseFloat(general.total).toFixed(2)}</span><i className="clear"></i></h6>
        </div>
        <div className="spacer"></div>  
        <div className="msgcont">
          <div className="msgbox"><p><i class="fas fa-envelope"></i>A copy of your order has been sent to your email. <small>Add Another Email</small></p></div>
        </div>
        <div className="spacer"></div>     
        <h5>Thank you for shopping with Elixir.</h5>
        <Link to="/"><button>Return to Homepage</button></Link>
      </div>
    </div>
  )
}

export default OrderConfirm