import React, {useContext, useEffect, useState, useRef} from 'react'
import { ProductContext } from './ProductContext'

function Reviews(props) {

  const {products} = useContext(ProductContext)
  const [id, setId] = useState(props.prod.reviews.length)
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [update, setUpdate] = useState(0)
  const [rating, setRating] = useState(1)
  const [ratenum, setRatenum] = useState(props.prod.reviews.length)
  const [totalrates, setTotalrates] = useState(props.prod.avgrating.total)
  const formRef = useRef()
  let rateamount5 = 0, rateamount4 = 0, rateamount3 = 0, rateamount2 = 0, rateamount1 = 0
  let numarr = [0,0,0,0,0]
 
  props.prod.avgrating.avg = totalrates / ratenum

  function addReview() {
    setTotalrates(prev => prev+rating) 
    props.prod.avgrating.total = totalrates + rating
    let date = new Date()
    date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
    setId(id) 
    const reviewobj = {'id':id,'name':name, 'text':text,'title':title,'date':date,'display':'none','edit':false, 'textcopy':text,'rating':parseFloat(rating)}
    products.map(prod => { 
      if(prod.id === props.prod.id) {
        prod.reviews.unshift(reviewobj)
      }
    }) 
    setUpdate(prev => prev+1)
    setRatenum(prev => prev+1)
    setName('')
    setText('')
    setTitle('')
    setRating(1)
    setId(prev => prev+1)
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
        rev.text = rev.textcopy
        setUpdate(prev => prev+1)
      }
    }) 
  } 
  function deleteReview(revid) {
    props.prod.reviews.map(rev => {
      if(revid === rev.id) {
        let index = props.prod.reviews.indexOf(rev)
        props.prod.reviews.splice(index, 1) 
        setUpdate(prev => prev+1)
      }
    })
    setRatenum(prev => prev-1)
    props.prod.avgrating.avg = totalrates / ratenum 
  } 

  const prodreviews = products.map(prod => { 
    return (prod.id === props.prod.id)?
      prod.reviews.map(rev => {
        return <div className="reviewbox" data-id={rev.id} data-starnum={rev.rating}>
          <div className="left">
            <img src="https://i.imgur.com/g7JKbDk.png" alt=""/>
            <h6>{rev.name}</h6>
            <div className="clear"></div>
            <div className="starsrated">
            { Array.apply(null, { length: rev.rating }).map((el) => ( <i className="fas fa-star"></i> )) } 
            { Array.apply(null, { length: 5-rev.rating }).map((el) => ( <i className="far fa-star"></i> )) }   
            </div><h4>{rev.title}</h4> 
            <div className="clear"/>
            <span>Reviewed On: <i>{rev.date}</i></span> 
            <p>{rev.text}</p>
            <div className="reviewsactions">
              <small onClick={() => rev.edit?saveReview(rev.id):editReview(rev.id)}>{rev.edit?"Save":"Edit"}</small><small onClick={() => deleteReview(rev.id)}>Delete</small><small>Report</small>
            </div>
            <textarea className="editreviewtext" value={rev.textcopy} onChange={(e) => {rev.textcopy = e.target.value;setUpdate(prev => prev+1)}} style={{display:rev.display}}></textarea>
          </div>    
          <div className="clear"></div>
          </div>
      }) 
      :"" 
  }) 
  rateamount5 = props.prod.reviews.map(rev => {
    if(rev.rating===5) return 1
  }) 
  rateamount4 = props.prod.reviews.map(rev => {
    if(rev.rating===4) return 1 
  })
  rateamount3 = props.prod.reviews.map(rev => {
    if(rev.rating===3) return 1 
  }) 
  rateamount2 = props.prod.reviews.map(rev => {
    if(rev.rating===2) return 1 
  })
  rateamount1 = props.prod.reviews.map(rev => {
    if(rev.rating===1) return 1
  })

  useEffect(() => {
    const allstars = document.querySelectorAll('.starratings i')
    allstars.forEach(el => {
      el.onclick = () => {
        let starlevel = el.getAttribute('data-star')
        allstars.forEach(el2 => {
          if(starlevel < el2.getAttribute('data-star')) {
            el2.classList.remove('fas')
            el2.classList.add('far')
          }
          else {
            el2.classList.remove('far')
            el2.classList.add('fas')
          }
        })
        setRating(parseFloat(starlevel))
      }
    })
    document.querySelector('.addreviewbtn').onclick = () => {
      allstars.forEach(star => {
          star.classList.remove('fas')
          star.classList.add('far') 
          document.querySelector('[data-star="1"]').classList.add('fas') 
          document.querySelector('[data-star="1"]').classList.remove('far') 
      })
    }
  },[])

  return (
    <>
      <div className="ratingscont">
        <h2>Customer Ratings</h2>
        <div className="ratingscontinner">
          <h5 style={{display: isNaN(props.prod.avgrating.avg)?"none":"block"}}> 
            <span> 
             { Array.apply(null, { length: Math.round(props.prod.avgrating.avg) }).map((el) => <i className="fas fa-star"></i> ) } 
             { Array.apply(null, { length: 5-Math.round(props.prod.avgrating.avg) }).map((el) => ( <i className="far fa-star"></i> )) }   
             &emsp;
             {isNaN(props.prod.avgrating.avg)?"No Ratings yet":props.prod.avgrating.avg.toFixed(1)+" out of 5"}
           </span>
          </h5>
          <div className="reviewsflex" style={{display: isNaN(props.prod.avgrating.avg)?"none":"block"}}>
            <div className="reviewsinner">
              <div><h6>5 stars</h6><div></div><span>{rateamount5}</span></div>
              <div><h6>4 stars</h6><div></div><span>{rateamount4}</span></div>
              <div><h6>3 stars</h6><div></div><span>{rateamount3}</span></div>
              <div><h6>2 stars</h6><div></div><span>{rateamount2}</span></div>
              <div><h6>1 star</h6><div></div><span>{rateamount1}</span></div>
              {console.log(rateamount5)}
            </div>
          </div>
          <h6>{ratenum===0?"":(ratenum+" total ratings")} </h6>
        </div> 
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
            <label>
              <h5>Overall Rating</h5>
              <div className="starratings">
                <i className="fas fa-star" data-star="1"></i>
                <i className="far fa-star" data-star="2"></i>
                <i className="far fa-star" data-star="3"></i>
                <i className="far fa-star" data-star="4"></i>
                <i className="far fa-star" data-star="5"></i>
              </div>
            </label>
              <label><h6>Name</h6><input placeholder="Your Name" onChange={(e) => setName(e.target.value)}/></label>
              <label><h6>Title</h6><input placeholder="Review Title" onChange={(e) => setTitle(e.target.value)}/></label>
              <label><h6>Review</h6><textarea placeholder="Add your review here..." onChange={(e) => setText(e.target.value)}/></label>
            </form>
            <br/> 
            <button className="addreviewbtn" onClick={() => {formRef.current.reset(); addReview()}}>Add Review</button>
            <div className="reviewscont">
              <h5>{props.prod.reviews.length>0?"Product Reviews":""}</h5>
              {prodreviews} 
            </div>

          </div>
        </div>
      </div> 
    </>
  )
}

export default Reviews