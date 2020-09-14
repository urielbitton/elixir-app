import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { ProductContext } from './ProductContext'
import PageBanner from './PageBanner'

function Wishlist() {
  return (
    <div className="wishlistcont">
      <PageBanner title="Wishlist" subtitle="My wishlist on elixir" bgimg="https://i.imgur.com/eNtn9hp.jpg"/>
    </div>
  )
}

export default Wishlist