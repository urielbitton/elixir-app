import React from 'react'

function AddProduct() {
  return (
    <div className="addproductcont">
      <div className="spacer"></div>
        <h3>Add a Product</h3>

        <div className="addform">
          <h6>Product Name <input /></h6>
          <h6>Product Image <input /></h6>
          <h6>Product Price <input /></h6>
          <h6>Product Units <input /></h6>
          <h6>Product ID <input /></h6>
          <h6>In Stock <input /></h6>
          <h6>Product Colors <input /></h6>
          <h6>Product Sizes <input /></h6>
          <h6>Product Categories <input /></h6>
          <h6>Product Description <input /></h6>
        </div>
    </div>
  )
}

export default AddProduct