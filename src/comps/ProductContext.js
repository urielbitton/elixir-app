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
      person: "women",
      instock: true,
      color: ["Black","Gray","Blue"],
      cat: ["jacket","women","fall","new"],
      sizes: ["XS","S","L"],
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
      person: "women",
      instock: true,
      color: ["Black","Orange","Light Pink"],
      cat: ["women","shirt","dress","summer","new"],
      sizes: ["S","M","L"],
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
      person: "women",
      instock: true,
      color: ["Pink","White"],
      cat: ["shoes","women","new"],
      sizes: ["S","M","L"],
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
      person: "men",
      instock: true,
      color: ["Brown","Gray"],
      cat: ["men","shorts","pants","new"],
      sizes: ["S","M","L","XL"],
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
      person: "men",
      instock: true,
      color: ["Black","Gray"],
      cat: ["jacket","men","fall"],
      sizes: ["XS","S","M","L"],
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
      person: "women",
      instock: true,
      color: ["Red Stripes","Green Stripes","White"],
      cat: ["shirt","women","summer","new"],
      sizes: ["S","M","L"],
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
    { 
      id: 7,
      name: "Women's Dress Shirt", 
      price: 199,
      img: "https://i.imgur.com/hvbVCfQ.jpg",
      hot: true,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      person: "women",
      instock: true,
      color: ["Blue","Gray","White"],
      cat: ["dress","women","shirt","new"],
      sizes: ["L","XL"],
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
      person: "men",
      instock: false,
      color: ["Black","Brown"],
      cat: ["men","belt","new"],
      sizes: ["XS","S","L"],
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
      person: "men", 
      instock: true,
      color: ["Gray","Black","Blue","Red","Green"],
      cat: ["men","women","hat","summer","new"],
      sizes: ["S","M","L"],
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
      person: "women", 
      instock: true,
      color: ["Gray"],
      cat: ["jacket","coat","women","new"],
      sizes: ["S","M","L"],
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },  
    {   
      id: 11,
      name: "Black Dress Shoes", 
      price: 279,
      img: "https://i.imgur.com/Fu3NrOz.jpg", 
      hot: true,
      sale: false,
      addcart: false,
      wishlist: false,
      units: 1,
      person: "women", 
      instock: true,
      color: ["Black"],
      cat: ["shoes","women"],
      sizes: ["XS","M","XL"],
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
      person: "women", 
      instock: true,
      color: ["Blue","Gray"],
      cat: ["pants","women"],
      sizes: ["XS","XL"],
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
      person: "men", 
      instock: true,
      color: ["Brown","Black"],
      cat: ["shoes","men","summer"],
      sizes: ["S","M","L"],
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
      person: "kids", 
      instock: true,
      color: ["Blue"],
      cat: ["pants","kids"],
      sizes: ["XS","S","M"],
      descript: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus enim ultricies est volutpat, sed pellentesque mauris volutpat. Duis efficitur facilisis justo, sed vehicula tortor suscipit sit amet. Suspendisse potenti. Morbi fringilla tempor velit eget varius.",
    },
  ])  
  const [general, setGeneral] = useState(
    {
      wishnum: 0,
      cartitems: 0,
      subtotal: 0,
    }
  )
  
  return (
    <ProductContext.Provider value={{products, setProducts,general,setGeneral}}>
      {props.children}
    </ProductContext.Provider>
  )
} 

export default ProductContextProvider 