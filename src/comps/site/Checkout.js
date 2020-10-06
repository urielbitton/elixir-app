import React, { useContext, useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom"
import PageBanner from "./PageBanner"
import { ProductContext } from "./ProductContext"
 
function Checkout(props) {
  const {products, general, customers, setCustomers, orders, setOrders} = useContext(ProductContext)

  const [taxrate, setTaxrate] = useState(general.taxrate)
  const [total, setTotal] = useState((props.subtotal + props.subtotal * taxrate).toFixed(2) - props.couponamount)
  const [subtotal, setSubtotal] = useState(props.subtotal.toFixed(2))
  const [details, setDetails] = useState(false)
  const [disable, setDisable] = useState(false)

  const [id, setId] = useState(customers.length)
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [signup, setSignup] = useState("")
  const [order, setOrder] = useState(0)
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [postal, setPostal] = useState("")
  const [address, setAddress] = useState("")
  const [spent, setSpent] = useState(0)

  const [number, setNumber] = useState(Math.floor(Math.random() * 9999) + 1000)
  const [custname, setCustname] = useState("")
  const [date, setDate] = useState(genDate())
  const [status, setStatus] = useState("Pending Payment")
  const [ordtotal, setOrdtotal] = useState(total)

  let history = useHistory()

  function genDate() {
    let date = new Date()
    return (date.getFullYear() +"-" +(date.getMonth() + 1) +"-" +(date.getDate() < 10 ? "0" + date.getDate() : date.getDate()))
  }
  function createCustomer() {
    setCustomers((prevCust) => [...prevCust,
      {
        id: id,
        name: fname + " " + lname,
        email: email,
        phone: phone,
        signup: genDate(),
        orders: 1,
        country: country,
        city: city,
        postal: postal,
        address: address,
        spent: total
      }
    ])
  }
  function createOrder() {
    setOrders((prevOrder) => [
      ...prevOrder,
      {
        number: number,
        custname: fname + " " + lname,
        date: date,
        status: status,
        total: ordtotal
      }
    ])
  }

  function placeOrder() {
    createCustomer()
    createOrder()
    setDisable(true)
    general.order_proc += 1
    general.profit += parseInt(total - subtotal * taxrate, 10)
    general.earnings += parseInt(total, 10)
    general.total = total
    general.subtotal = subtotal
    general.revenue_range.push(subtotal)
    general.products_sold.push(props.cartitems)
    //reset neworder products
    products.map((prod) => {
      prod.neworder = false
      prod.tempqty = 0
    })
    products.map((prod) => {
      if (prod.addcart) {
        prod.purchased_status = true
        prod.neworder = true
        prod.purchased_qty += prod.units
        prod.qty -= prod.units
        prod.tempqty = prod.units
        prod.datesold = genDate()
        prod.earnings = prod.price * prod.purchased_qty
      }
      if (prod.purchased_qty > 8) {
        prod.hot = true
      }
      if (prod.purchased_qty > prod.qty) {
        prod.instock = false
      }
    })
    setTimeout(() => {
      props.zerocartnum()
    }, 500)
    setTimeout(() => {
      history.push("/orderconfirm")
      window.scrollTo(0, 0)
      setDisable(false)
    }, 2000)
  }

  useEffect(() => {
    const placeorderbtn = document.querySelector(".placeorderbtn")
    placeorderbtn.onclick = () => {
      document.querySelector(".mark").scrollIntoView()
      document.querySelector(".msgnotif").style.display = "block"
      setTimeout(() => {
        document.querySelector(".msgnotif").style.opacity = "1"
      }, 100)
    }
  }, [])

  return (
    <div className="checkoutpage">
      <PageBanner
        title="Checkout"
        subtitle="Checkout your products"
        bgimg="https://i.imgur.com/hgx84Pw.jpg"
      />
      <div className="grid xgrid pgrid">
        <div className="logreg">
          <p>
            Returning customer? <a href="#">Click here to login</a>
          </p>
          <p>
            Want to create an account? <a href="#">Click here to register</a>
          </p>
        </div>

        <div className="checkoutgrid">
          <div className="billingdiv">
            <h2>Billing Details</h2>
            <div className="billinggrid">
              <label className="span1">
                <h6>First Name</h6>
                <input onChange={(e) => setFname(e.target.value)} />
              </label>
              <label className="span1">
                <h6>Last Name</h6>
                <input onChange={(e) => setLname(e.target.value)} />
              </label>
              <label>
                <h6>Country</h6>
                <input onChange={(e) => setCountry(e.target.value)} />
              </label>
              <label>
                <h6>Street Address</h6>
                <input
                  placeholder="House Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input placeholder="Apt, Unit #" />
              </label>
              <label>
                <h6>City</h6>
                <input onChange={(e) => setCity(e.target.value)} />
              </label>
              <label>
                <h6>State/Province</h6>
                <input />
              </label>
              <label>
                <h6>Postal Code/ZIP</h6>
                <input onChange={(e) => setPostal(e.target.value)} />
              </label>
              <label>
                <h6>Phone Number</h6>
                <input onChange={(e) => setPhone(e.target.value)} />
              </label>
              <label>
                <h6>Email</h6>
                <input onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>
                <h6>Order Notes</h6>
                <textarea placeholder="Add notes about your order..."></textarea>
              </label>
            </div>
          </div>
          <div className="ordertotaldiv">
            <h2>Your Order</h2>
            <div className="carttotals">
              <div className="totalprods">
                <h4>Products</h4>
                <div>
                  {products.map((prod) => {
                    return prod.addcart ? (
                      <div>
                        <h6>
                          {prod.name}
                          <span>
                            <span style={{ fontSize: "10px" }}>&#10006; </span>
                            {prod.units}
                          </span>
                        </h6>
                        <h6>
                          ${parseFloat(prod.price).toFixed(2) * prod.units}
                        </h6>
                        <div className="clear"></div>
                      </div>
                    ) : (
                      ""
                    )
                  })}
                  <small
                    className="seedetails"
                    onClick={() => setDetails(true)}
                  >
                    See details
                  </small>
                  <div className="clear"></div>
                </div>
              </div>
              <div>
                <h6>Subtotal</h6>
                <h6>${subtotal}</h6>
                <div className="clear"></div>
              </div>
              <div>
                <h6>Tax Rate ({taxrate * 100}%)</h6>
                <h6>${(subtotal * taxrate).toFixed(2)}</h6>
                <div className="clear"></div>
              </div>
              <div>
                <h6>Shipping Fees</h6>
                <h6>Free Shipping</h6>
                <div className="clear"></div>
              </div>
              <div
                style={{ display: props.couponamount > 0 ? "block" : "none" }}
              >
                <h6>Coupon Code</h6>
                <h6 style={{ color: "var(--color)" }}>
                  {props.couponname}: -$
                  {parseFloat(props.couponamount).toFixed(2)}
                </h6>
                <div className="clear"></div>
              </div>
              <div>
                <h6>Order Total</h6>
                <h6 className="ordertotal">${parseFloat(total).toFixed(2)}</h6>
                <div className="clear"></div>
              </div>
              <div>
                <label>
                  <input name="payment" type="radio" />
                  <small>Bank Transfer</small>
                </label>
                <label>
                  <input name="payment" type="radio" />
                  <small>Cash On Delivery</small>
                </label>
              </div>
              <div>
                <button
                  className="placeorderbtn"
                  onClick={() => (!disable ? placeOrder() : "")}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="spacerl"></div>
        <div className="mark"></div>

        <div className="msgcont msgnotif">
          <h2>Order Placed</h2>
          <div className="msgbox">
            <p>
              <i className="fas fa-check-circle"></i>Your order has been placed
              successfully! Your order confirmation has been sent to your email.
            </p>
          </div>
        </div>
      </div>

      <div className={details ? "detailscont opendetails" : "detailscont"} onClick={() => setDetails(false)}>
        <i className="close"></i>
        <div className="details" onClick={(e) => e.stopPropagation()}>
          <h3>Product Details</h3>
          <div className="innerdetails">
            {products.map((prod) => {
              return prod.addcart ? (
                <div className="detailsrow">
                  <img src={prod.img} alt="detimg" />
                  <h6>{prod.name}</h6>
                  <div className="detgrid">
                    <small>Price: {prod.price}</small>
                    <small>Units: {prod.units}</small>
                    <small>
                      Subtotal: {parseFloat(prod.price).toFixed(2) * prod.units}
                    </small>
                    <small>Color: {prod.selcolor}</small>
                    <small>Size: {prod.selsize}</small>
                  </div>
                  <div className="clear"></div>
                </div>
              ) : (
                ""
              )
            })}
          </div>
          <button onClick={() => setDetails(false)}>Done</button>
          <Link to="/cart">
            <button>Edit Products</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Checkout
