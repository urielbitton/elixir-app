import React, {createContext, useState} from 'react'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
  
  const [products, setProducts] = useState([
    { 
      id: 1,
      name: "Women's Fall Jacket", 
      price: 699,
      img: "https://i.imgur.com/OztKcJN.jpg",
      hot: true, 
      sale: false,
      addcart: false,
      units: 1,
    },
    { 
      id: 2,
      name: "Summer Dress Shirt", 
      price: 229,
      img: "https://i.imgur.com/a7ibChD.jpg",
      hot: false,
      sale: false,
      addcart: false,
      units: 1,
    },
    { 
      id: 3,
      name: "Women's Shoes", 
      price: 299,
      img: "https://i.imgur.com/mgjGwhr.jpg",
      hot: false,
      sale: true,
      addcart: false,
      units: 1,
    },
    { 
      id: 4,
      name: "Men's Casual Shorts", 
      price: 149,
      img: "https://i.imgur.com/72Hh6Y5.jpg",
      hot: false,
      sale: false,
      addcart: false,
      units: 1,
    },
    { 
      id: 5,
      name: "Bomber Jacket", 
      price: 389,
      img: "https://i.imgur.com/PJ7RdQM.jpg",
      hot: false,
      sale: false,
      addcart: false,
      units: 1,
    },
    { 
      id: 6,
      name: "Casual Women's T-Shirt", 
      price: 129,
      img: "https://i.imgur.com/sbCcfWM.jpg",
      hot: true,
      sale: false,
      addcart: false,
      units: 1,
    },
    { 
      id: 7,
      name: "Women's Dress Shirt", 
      price: 199,
      img: "https://i.imgur.com/hvbVCfQ.jpg",
      hot: true,
      sale: false,
      addcart: false,
      units: 1,
    },
    { 
      id: 8,
      name: "Men's Leather Belt", 
      price: 139,
      img: "https://i.imgur.com/1bKttCW.jpg",
      hot: true,
      sale: true,
      addcart: false,
      units: 1,
    },
    { 
      id: 9,
      name: "Unisex Flat Cap", 
      price: 89,
      img: "https://i.imgur.com/B8ApMYH.jpg",
      hot: false,
      sale: false,
      addcart: false,
      units: 1,
    },    
  ]) 
 
  
  return (
    <ProductContext.Provider value={{products, setProducts}}>
      {props.children}
    </ProductContext.Provider>
  )
} 

export default ProductContextProvider 