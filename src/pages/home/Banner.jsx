import React from 'react'
import { Link } from 'react-router-dom'
// import bannerImg from "../../assets/header.png"
const Banner = () => {
  return (
      <div className='section__container header__container'>
        <div className='header__content z-30'>
            <h4 className='uppercase'>UP TO 75% Discount on</h4>
            <h1>Live for Fashion</h1>
            <p>Get runway-ready with our discount sale on designer fashion. Elevate your style without emptying your wallet. Fall in love with our fashion sale! From chic dresses to stylish accessories, we have everything you need to slay the fashion game</p>
            <button className='btn'><Link to ='/shop'>EXPLORE NOW</Link></button>
        </div>
        <div className='header__image'>
            <img src="https://freepngimg.com/thumb/fashion/135092-fashion-shopping-young-bag-holding-girl.png" alt="banner image" />
            {/* <img src="https://wallpaperboat.com/wp-content/uploads/2020/11/10/60057/shopping-08.jpg" alt="" /> */}
        </div>
      </div>
  )
}

export default Banner