import React from 'react'
import Product from './Product'
import Item from './Item'

function ProductPage() {
  return (
    <div className="productpage">
      <div className="grid xgrid pgrid">
        <div className="spacer"></div>
        <Product />
        <div className="spacer"></div>
        <hr />
        <div className="prodaccordion">
          <h2 re-taber="acc1">Description</h2>
          <h2 re-taber="acc2">Reviews</h2>
          <div className="accordion">
            <div re-tab="acc1">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod odio nec purus bibendum, sit amet ultricies ante venenatis. Nunc nec pulvinar justo. Nulla et enim tincidunt, euismod ipsum at, dapibus lorem. Phasellus at convallis lorem. Quisque varius vulputate libero, in mattis ipsum dictum eget. Pellentesque ut purus est. Proin vel ligula at velit vehicula varius tincidunt nec sem. Aenean laoreet tortor quis sapien placerat ornare. </p>
              <table>
                <tr><th>Colors</th><td>Pink, black</td></tr>
                <tr><th>Sizes</th><td>Large, Small, Extra Small</td></tr>
              </table>
            </div>
            <div re-tab="acc2">
              <p>There are no reviews yet. Add the first review.</p>
            </div>
          </div>
        </div>
        <div className="spacerl"></div> 
        <hr/>
        <div className="spacer"></div>
        <div className="similarprods">
          <h2>Similar Products</h2>
          <div className="similarprodgrid">
            <Item link="https://i.imgur.com/iFLjPjb.jpg" title="Men's Hoodie" price="89.00"/>
            <Item link="https://i.imgur.com/Fn8r6E5.jpg" title="Casual T-Shirt" price="129.00"/>
            <Item link="https://i.imgur.com/2lEwsyE.jpg" title="Tight Fit Jeans" price="149.00"/>
            <Item link="https://i.imgur.com/TaHouH3.jpg" title="Women's Fur Coat" price="899.00"/>
          </div> 
        </div>

      </div>
    </div>
  )
}

export default ProductPage