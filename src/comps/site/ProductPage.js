import React, {useContext, useEffect, useState, useRef} from 'react'
import Product from './Product'
import Item from './Item'
import { ProductContext } from './ProductContext'

function ProductPage(props) {

  const {products} = useContext(ProductContext)
  const [id, setId] = useState(props.prod.reviews.length)
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [update, setUpdate] = useState(0)
  const formRef = useRef()
  let mapcount = 0

  const similarprods = products.map(prod => {
    if(props.cat.some(el => prod.cat.includes(el)) && props.id !== prod.id && mapcount<4) {
      mapcount++
      return <Item prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} descript={prod.descript} hot={prod.hot} sale={prod.sale} color={prod.color} cat={prod.cat} sizes={prod.sizes} addcart={prod.addcart} instock={prod.instock} units={prod.units} wishlist={prod.wishlist} qty={prod.qty} compared={prod.compared} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updatewish={props.updatewish} openproduct={props.openproduct} key={prod.id} resetunits={props.resetunits} updatecompare={props.updatecompare} updatecompstatus={props.updatecompstatus}/> 
    }
  }) 
  function addReview() {
    let date = new Date()
    date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
    setId(prev => prev+1) 
    const reviewobj = {'id':id,'name':name, 'text':text,'title':title,'date':date,'display':'none','edit':false}
    products.map(prod => { 
      if(prod.id === props.prod.id) {
        prod.reviews.push(reviewobj)
      }
    })
    setUpdate(prev => prev+1)
  } 
  function editReview(revid) {
    props.prod.reviews.map(rev => {
      if(revid === rev.id) {
        rev.display = 'block'
        rev.edit = true
        setUpdate(prev => prev+1)
      }
    })
  }
  function saveReview(revid) {
    props.prod.reviews.map(rev => {
      if(revid === rev.id) {
        rev.edit = false
        rev.display = 'none'
        setText(text)
        setUpdate(prev => prev+1)
      }
    }) 
  }

  const prodreviews = products.map(prod => { 
    return (prod.id === props.prod.id)?
      prod.reviews.map(rev => {
        return <div className="reviewbox" data-id={rev.id}>
          <div className="left">
            <img src="https://i.imgur.com/g7JKbDk.png" alt=""/>
            <h6>{rev.name}</h6>
            <div className="clear"></div>
            <h4>{rev.title}</h4> 
            <span>Reviewed On: <i>{rev.date}</i></span> 
            <p>{rev.text}</p>
            <div className="reviewsactions">
              <small onClick={() => rev.edit?saveReview(rev.id):editReview(rev.id)}>{rev.edit?"Save":"Edit"}</small><small>|</small><small>Delete</small><small>|</small><small>Report</small>
            </div>
            <textarea className="editreviewtext" value={rev.text} onChange={(e) => {rev.text = e.target.value;setUpdate(prev => prev+1)}} style={{display:rev.display}}></textarea>
          </div>    
          <div className="clear"></div>
          </div>
      }) 
      :"" 
  }) 

  useEffect(() => {
    const taber = document.querySelectorAll('[re-taber]')
    taber.forEach(el => {
      el.onclick = () => {
        taber.forEach(el2 => el2.style.color = '')
        el.style.color = '#333'
        document.querySelectorAll('[re-tab]').forEach(el2 => el2.style.display = 'none')
        document.querySelector('[re-tab="'+el.getAttribute('re-taber')+'"]').style.display = 'block'
      }
    })
    
  })

  return ( 
    <div className="productpage"> 
      <div className="grid xgrid pgrid">
        <div className="spacer"></div>
        <Product prod={props.prod} id={props.id} name={props.name} img={props.img} price={props.price} descript={props.descript} color={props.color} cat={props.cat} sizes={props.sizes} units={props.units} addcart={props.addcart} wishlist={props.wishlist} instock={props.instock} qty={props.qty} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updateunits={props.updateunits} updatewish={props.updatewish} wishnum={props.wishnum} setprodcolor={props.setprodcolor} setprodsize={props.setprodsize} />
        <div className="spacer"></div>
        <hr />
        <div className="ratingscont">
          <h2>Ratings</h2>
        </div>
        <hr />
        <div className="prodaccordion">
        <h2 style={{color:"#333"}} re-taber="reviews">Reviews</h2>
          <h2 re-taber="description">Description</h2>
          <div className="accordion">
            <div re-tab="description"> 
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod odio nec purus bibendum, sit amet ultricies ante venenatis. Nunc nec pulvinar justo. Nulla et enim tincidunt, euismod ipsum at, dapibus lorem. Phasellus at convallis lorem. Quisque varius vulputate libero, in mattis ipsum dictum eget. Pellentesque ut purus est. Proin vel ligula at velit vehicula varius tincidunt nec sem. Aenean laoreet tortor quis sapien placerat ornare. </p>
              <table>
                <tr><th>Colors</th><td>Pink, black</td></tr>
                <tr><th>Sizes</th><td>Large, Small, Extra Small</td></tr>
              </table>
            </div>
            <div re-tab="reviews" className="reviewstab" data-update={update}>
              <p>{props.prod.reviews.length<1?"There are no reviews yet. Add the first review.":""}</p> 
              <form ref={formRef}> 
                <label><h6>Name</h6><input placeholder="Your Name" onChange={(e) => setName(e.target.value)}/></label>
                <label><h6>Title</h6><input placeholder="Review Title" onChange={(e) => setTitle(e.target.value)}/></label>
                <label><h6>Review</h6><textarea placeholder="Add your review here..." onChange={(e) => setText(e.target.value)}/></label>
              </form>
              <br/> 
              <button onClick={() => {formRef.current.reset(); addReview()}}>Add Review</button>
              <div className="reviewscont">
                <h5>{props.prod.reviews.length>0?"Product Reviews":""}</h5>
                {prodreviews} 
              </div>

            </div>
          </div>
        </div> 
        <div className="spacerl"></div> 
        <hr/> 
        <div className="spacer"></div> 
        <div className="similarprods">
          <h2>Similar Products</h2>
          <div className="similarprodgrid">
            {similarprods}  
          </div> 
        </div>
 
      </div>  
    </div>
  )
}

export default ProductPage