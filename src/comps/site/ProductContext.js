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
      wishlist: false, 
      units: 1, 
      qty: 23,
      person: "women",
      instock: true,
      color: ["#111","#b0b0b0","#00aeff"],
      cat: ["jacket","women","fall","new"],
      sizes: ["XS","S","L"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    }, 
    { 
      id: 2,
      name: "Summer Dress Shirt", 
      price: 229,
      img: "https://i.imgur.com/a7ibChD.jpg",
      hot: false,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      qty: 19,
      person: "women",
      instock: true,
      color: ["#111","#ffbb00","#ffb4ff"],
      cat: ["women","shirt","dress","summer","new"],
      sizes: ["S","M","L"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
    { 
      id: 3,
      name: "Women's Casual Shoes", 
      price: 299,
      img: "https://i.imgur.com/mgjGwhr.jpg",
      hot: false,
      sale: true,
      addcart: false,
      wishlist: false, 
      units: 1, 
      qty: 35,
      person: "women",
      instock: true,
      color: ["#ffb4ff","#f5f5f5"],
      cat: ["shoes","women","new"],
      sizes: ["S","M","XL"], 
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
    { 
      id: 4,
      name: "Men's Casual Shorts", 
      price: 149,
      img: "https://i.imgur.com/72Hh6Y5.jpg",
      hot: false,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      qty: 8,
      person: "men",
      instock: true,
      color: ["#9c0000","#b0b0b0","#ffee00"],
      cat: ["men","shorts","pants","new"],
      sizes: ["S","M","L","XL"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
    { 
      id: 5,
      name: "Bomber Jacket", 
      price: 389,
      img: "https://i.imgur.com/PJ7RdQM.jpg",
      hot: false,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      qty: 9,
      person: "men",
      instock: true,
      color: ["#111","#b0b0b0","#ffee00"],
      cat: ["jacket","men","fall"],
      sizes: ["XS","S","M","L"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
    { 
      id: 6,
      name: "Casual Women's T-Shirt", 
      price: 129,
      img: "https://i.imgur.com/sbCcfWM.jpg",
      hot: true,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      qty: 13,
      person: "women",
      instock: true,
      color: ["#ff004c","#bbff00","#f5f5f5"],
      cat: ["shirt","women","summer","new"],
      sizes: ["S","M","L"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
    { 
      id: 7,
      name: "Women's Dress Shirt", 
      price: 199,
      img: "https://i.imgur.com/hvbVCfQ.jpg",
      hot: false,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      qty: 25,
      person: "women",
      instock: true,
      color: ["#00aeff","#b0b0b0","white"],
      cat: ["dress","women","shirt","new"],
      sizes: ["L","XL"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
    { 
      id: 8,
      name: "Men's Leather Belt", 
      price: 139,
      img: "https://i.imgur.com/1bKttCW.jpg",
      hot: true,
      sale: true,
      addcart: false,
      wishlist: false,
      units: 1,
      qty: 17,
      person: "men",
      instock: false,
      color: ["#111","#9c0000","#ffee00","#f5f5f5"],
      cat: ["men","belt","new"],
      sizes: ["XS","S","L"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
    { 
      id: 9,
      name: "Summer Flat Cap", 
      price: 89,
      img: "https://i.imgur.com/B8ApMYH.jpg",
      hot: false,
      sale: false,
      addcart: false,  
      wishlist: false,
      units: 1,
      qty: 15,
      person: "men", 
      instock: true,
      color: ["#b0b0b0","#111","#00aeff","red","#bbff00"],
      cat: ["men","women","hat","summer","new"],
      sizes: ["S","M","L"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },  
    {   
      id: 10,
      name: "Light Spring Coat", 
      price: 579,
      img: "https://i.imgur.com/G00krur.jpg", 
      hot: false,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      qty: 14,
      person: "women", 
      instock: true,
      color: ["#b0b0b0",'#ffb4ff'],
      cat: ["jacket","coat","women"],
      sizes: ["S","M","L"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },  
    {   
      id: 11,
      name: "Leather Dress Shoes", 
      price: 279,
      img: "https://i.imgur.com/Fu3NrOz.jpg", 
      hot: true,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      qty: 21,
      person: "women", 
      instock: true,
      color: ["#111","#ffee00",'#ffb4ff'],
      cat: ["shoes","women"],
      sizes: ["XS","M","XL"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
    {    
      id: 12,
      name: "Ripped Styled Jeans", 
      price: 339,
      img: "https://i.imgur.com/OKDAvcN.jpg", 
      hot: false,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      qty: 19,
      person: "women", 
      instock: true,
      color: ["#00aeff","#b0b0b0","#ffee00"],
      cat: ["pants","women"],
      sizes: ["XS","XL"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    }, 
    {    
      id: 13,
      name: "Men's Dress Shoes", 
      price: 639,
      img: "https://i.imgur.com/ncipsvH.jpg", 
      hot: true,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      qty: 12,
      person: "men", 
      instock: true,
      color: ["#9c0000","#111"],
      cat: ["shoes","men","summer"],
      sizes: ["S","M","L"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
    {     
      id: 14,
      name: "Boy's Denim Jeans", 
      price: 76,
      img: "https://i.imgur.com/CdqVwPQ.jpg", 
      hot: false,
      sale: true,
      addcart: false,
      wishlist: false, 
      units: 1,
      qty: 11,
      person: "kids", 
      instock: true,
      color: ["#00aeff","#ffee00"],
      cat: ["pants","kids"],
      sizes: ["XS","S","M"],
      selcolor: "",
      selsize: "",
      purchased_status: false,
      purchased_qty: 0,
      earnings: 0,
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
  ])  
  const [general, setGeneral] = useState(
    {
      wishnum: 0,
      cartitems: 0,
      subtotal: 0,
      taxrate: 0.15,
      order_proc: 0,
      active_order: 0,
      earnings: 0,
      profit: 0,
      revenue_range: [],
      products_sold: [],
      colorarr: ["#111","#b0b0b0","#ff004c","#bbff00","#9c0000","#ffbb00","#ffee00","#ffb4ff","#00aeff","#f5f5f5"],
      sizesarr: ["XS","S","M","L","XL"],
      coupons: [],
      customers: [],
    }   
  )
  
  return (
    <ProductContext.Provider value={{products, setProducts,general,setGeneral}}>
      {props.children}
    </ProductContext.Provider>
  )
} 

export default ProductContextProvider 