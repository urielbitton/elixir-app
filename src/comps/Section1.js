import React from 'react'
import Item from './Item'

function Section1() {

  

  return (
    <section className="section1">
      <div className="grid xgrid">
        <h4 className="sectitle">New Arrivals</h4>
        <h5 className="secsubtitle">Shop Collection</h5>
        <div className="sectionnav">
          <h6 className="activesecnav">All</h6><h6>Shirts</h6><h6>Pants</h6><h6>Shoes</h6><h6>Coats</h6>
        </div>

        <div className="sectiongrid">
          <div className="large">
            <a href="#"> 
            <h2>Women's Wear</h2>
            <div>
              <img src="https://i.imgur.com/RFR8pzC.jpg" alt="item"/>
            </div>
            </a>
          </div>

          <Item link="https://i.imgur.com/mgjGwhr.jpg" title="Women's Shoes" price="299.00"/>
          <Item link="https://i.imgur.com/2lEwsyE.jpg" title="Tight Fit Jeans" price="149.00"/>
          <Item link="https://i.imgur.com/iFLjPjb.jpg" title="Men's Hoodie" price="89.00"/>
          <Item link="https://i.imgur.com/Fn8r6E5.jpg" title="Casual T-Shirt" price="129.00"/>
          <Item link="https://i.imgur.com/TaHouH3.jpg" title="Women's Fur Coat" price="899.00"/>
          <Item link="https://i.imgur.com/DMRfG7x.jpg" title="Short Fit Jeans" price="139.00"/>
        </div>

      </div> 
    </section> 
  )
}
 
export default Section1