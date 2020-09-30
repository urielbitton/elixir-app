import React, {useContext, useState, useEffect} from 'react'
import PageBanner from './PageBanner' 
import { ProductContext } from './ProductContext'
import Item from './Item'
 
function Shop(props) { 
  const {products} = useContext(ProductContext) 
  const [filteron, setFilteron] = useState(false)
  const [pricefilt, setPricefilt] = useState("all")
  const [catfilter, setCatfilter] = useState("all")
  const [colorfilt, setColorfilt] = useState("all")
  const [sizesfilt, setSizesfilt] = useState("all")
  const [sortfilt, setSortfilt] = useState("all")
  const [reset, setReset] = useState(true)
  const [gridview, setGridview] = useState(true)

  const allprods = products.map(prod => {
      if(((prod.price >= pricefilt[0] && prod.price < pricefilt[1])|| pricefilt === "all") && (prod.cat.includes(catfilter) || catfilter === "all") && (prod.color.includes(colorfilt.toLowerCase()) || colorfilt === "all") && (prod.sizes.includes(sizesfilt) || sizesfilt === "all")) {
        return <Item prod={prod} id={prod.id} name={prod.name} img={prod.img} price={prod.price} descript={prod.descript} hot={prod.hot} sale={prod.sale} color={prod.color} cat={prod.cat} sizes={prod.sizes} addcart={prod.addcart} wishlist={prod.wishlist} updatecartnum={props.updatecartnum} updatesub={props.updatesub} updatewish={props.updatewish} openproduct={props.openproduct} key={prod.id} resetunits={props.resetunits}/>
      }   
  }) 

  let colormap = {"#111":"Black","#b0b0b0":"Gray","#ff004c":"Red","#bbff00":"Green","#9c0000":"Brown","#ffbb00":"Orange","#ffee00":"Yellow","#ffb4ff":"Pink","#00aeff":"Blue","#f5f5f5":"White"}
  function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()]
    })
  }

  function resetFilters() {
    setPricefilt("all")
    setCatfilter("all")
    setColorfilt('all')
    setSizesfilt('all')
    setTimeout(() => { setReset(true) }, 100)
  }
  function resetPrice() {
    setPricefilt("all")
  }
  function resetCateg() {
    setCatfilter("all")
  }
  function resetColor() {
    setColorfilt("all")
  }
  function resetSize() {
    setSizesfilt("all")
  }

  useEffect(() => {
    let filtercol = document.querySelectorAll('.filterscont ul')
    filtercol.forEach(col => {
      col.querySelectorAll('li').forEach(link => {
        link.onclick = () => {
          col.querySelectorAll('li').forEach(el => el.classList.remove('activefilter'))
          link.classList.add('activefilter')
          setReset(false)
        }
      })
    })
    document.querySelector('.clearall').onclick = () => {
      document.querySelectorAll('.filterscont > div li').forEach(el => el.classList.remove('activefilter'))
      document.querySelectorAll('.filterscont > div li:first-child').forEach(el => el.classList.add('activefilter'))
    }
    document.querySelector('.priceclear').onclick = () => {
      document.querySelectorAll('.filterscont > div:first-child li').forEach(el => el.classList.remove('activefilter'))
      document.querySelector('.filterscont > div:first-child li:first-child').classList.add('activefilter')
    } 
    document.querySelector('.categclear').onclick = () => {
      document.querySelectorAll('.filterscont > div:nth-of-type(2) li').forEach(el => el.classList.remove('activefilter'))
      document.querySelector('.filterscont > div:nth-of-type(2) li:first-child').classList.add('activefilter')
    } 
    document.querySelector('.colorclear').onclick = () => {
      document.querySelectorAll('.filterscont > div:nth-of-type(3) li').forEach(el => el.classList.remove('activefilter'))
      document.querySelector('.filterscont > div:nth-of-type(3) li:first-child').classList.add('activefilter')
    } 
    document.querySelector('.sizeclear').onclick = () => {
      document.querySelectorAll('.filterscont > div:nth-of-type(4) li').forEach(el => el.classList.remove('activefilter'))
      document.querySelector('.filterscont > div:nth-of-type(4) li:first-child').classList.add('activefilter')
    }  
  },[]) 
  
  return (
    <div className="shoppage">
      <PageBanner title="Shop" subtitle="Find all our products here" bgimg="https://i.imgur.com/kp0n6CL.jpg"/>
      <div className="grid">
      <div className="spacers"></div>
      
      <div className="shopoptions">
      <div className="left">
          <h5><span>Showing</span> 1-20 of 100 <span>results</span></h5>
      </div>
      <div className="right">
        <div><h6 onClick={() => filteron?setFilteron(false):setFilteron(true)}>Filter<i className="fas fa-sliders-h"></i></h6></div>
        <div>
          <select>
            <option>20 items</option><option>25 items</option><option>30 items</option><option>35 items</option><option>40 items</option>
          </select>
        </div>
      <div><i onClick={() => setGridview(true)} className="fas fa-th"></i><i onClick={() => setGridview(false)} class="fas fa-grip-lines"></i></div>
      </div>
      <div className="clear"></div>

      <div className={filteron?"filterscont-on filterscont":"filterscont-off filterscont"}>
        <div>
          <h4>Price Filter</h4> 
          <ul><li className="activefilter" onClick={() => setPricefilt("all")}>All</li><li onClick={() => setPricefilt([0,100])}>$0 - $100</li><li onClick={() => setPricefilt([100,150])}>$100 - $150</li><li onClick={() => setPricefilt([150,200])}>$150 - $200</li><li onClick={() => setPricefilt([200,250])}>$200 - $250</li><li onClick={() => setPricefilt([250,500])}>$250 - $500</li><li onClick={() => setPricefilt([500,Infinity])}>$500+</li></ul>
        </div>
        <div>
          <h4>Categories</h4> 
          <ul><li className="activefilter" onClick={() => setCatfilter("all")}>All Categories</li><li onClick={() => setCatfilter('women')}>Women</li><li onClick={() => setCatfilter('men')}>Men</li><li onClick={() => setCatfilter('kids')}>Kids</li><li onClick={() => setCatfilter('shirt')}>Shirts</li><li onClick={() => setCatfilter('pants')}>Pants</li><li onClick={() => setCatfilter('jacket')}>Jackets</li><li onClick={() => setCatfilter('shoes')}>Shoes</li><li onClick={() => setCatfilter('hat')}>Hats</li></ul>
        </div>
        <div>
          <h4>Colors</h4>
          <ul><li className="activefilter" onClick={() => setColorfilt('all')}>All Colors</li><li onClick={() => setColorfilt('#111')}>Black</li><li onClick={() => setColorfilt('#f5f5f5')}>White</li><li onClick={() => setColorfilt('#00aeff')}>Blue</li><li onClick={() => setColorfilt('#b0b0b0')}>Gray</li><li onClick={() => setColorfilt('#ff004c')}>Red</li><li onClick={() => setColorfilt('#9c0000')}>Brown</li><li onClick={() => setColorfilt('#ffb4ff')}>Pink</li><li onClick={() => setColorfilt('#bbff00')}>Green</li><li onClick={() => setColorfilt('#ffbb00')}>Orange</li></ul>
        </div> 
        <div> 
          <h4>Sizes</h4> 
          <ul><li className="activefilter" onClick={() => setSizesfilt('all')}>All Sizes</li><li onClick={() => setSizesfilt('XS')}>Extra Small</li><li onClick={() => setSizesfilt('S')}>Small</li><li onClick={() => setSizesfilt('M')}>Medium</li><li onClick={() => setSizesfilt('L')}>Large</li><li onClick={() => setSizesfilt('XL')}>Extra Large</li></ul>
        </div> 
        <div>
          <h4>Sort By</h4>
          <ul><li className="activefilter">All</li><li>New</li><li>Hot</li><li>Rating</li><li>New Products</li><li>Price: Low to High</li><li>Price: High to Low</li></ul>
        </div>
        <div className="appliedfilters">
          <h6 className="clearall" onClick={() => resetFilters()} style={{display: reset?"none":"inline-block"}}><i class="fas fa-times"></i>Reset</h6>
          <h6 className="priceclear" onClick={() => resetPrice()} style={{display: pricefilt==='all'?"none":"inline-block"}}><i class="fas fa-times"></i>Price: {pricefilt[0]+"-"+pricefilt[1]}</h6>
          <h6 className="categclear" onClick={() => resetCateg()} style={{display: catfilter==='all'?"none":"inline-block"}}><i class="fas fa-times"></i>Category: {catfilter}</h6>
          <h6 className="colorclear" onClick={() => resetColor()} style={{display: colorfilt==='all'?"none":"inline-block"}}><i class="fas fa-times"></i>Color: {replaceAll(colorfilt,colormap)}</h6>
          <h6 className="sizeclear" onClick={() => resetSize()} style={{display: sizesfilt==='all'?"none":"inline-block"}}><i class="fas fa-times"></i>Size: {sizesfilt}</h6>
        </div>
      </div> 
    </div>
        
        <div className={gridview?"productsgrid":"productslist"}>
          {allprods}
        </div>

        <div className="spacerl"></div>

      </div> 
    </div>
  )
} 

export default Shop