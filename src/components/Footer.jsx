import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
    <footer className='section__container footer__container'>
        <div className='footer__col'>
            <h4>CONTACT INFO</h4>
            <p>
                <span><i className='ri-map-pin-2-fill'></i></span>
                Fifth Avenue, 34th Street, New York
            </p>
             <p>
                <span><i className='ri-mail-fill'></i></span>
                support@fashoinnova.com
             </p>
             <p>
                <span><i className='ri-phone-fill'></i></span>
                (+012) 3453 786
             </p>

        </div>
        <div className='footer__col'>
            <h4>COMPANY</h4>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Work With Us</a>
            <a href="/">Blogs</a>
            <a href="/">Terms and Conditions</a>
        </div>
        <div className='footer__col'>
            <h4>USEFUL LINK</h4>
            <a href="/"><Link to="/">Home</Link></a>
            <a href="/"><Link to="/shop">Shop</Link></a>
            <a href="/"><Link to="/search">Pages</Link></a>
            <a href="/"><Link to="/">Contact</Link></a>
         
        </div>
        <div className='footer__col'>
            <h4>INSTAGRAM</h4>
            <div className='instagram__grid'>
                <img src="https://i.pinimg.com/736x/72/f9/af/72f9afab90f332ba79222c8463914f2a--picnic-parties-picnics.jpg" alt="" />
                <img src="https://hips.hearstapps.com/hmg-prod/images/chanel-fall-winter-2022-23-ready-to-wear-ad-campaign-by-inez-vinoodh-6-hd-1662487093.jpg" alt="" />
                <img src="https://rare-gallery.com/uploads/posts/341801-Gigi-Hadid-American-Model-Celebrity-Girls-Women-Fashion-Model-Photoshoot-Photo-Shoot.jpg" alt="" />
                <img src="https://cdn.wallpapersafari.com/93/96/okbNfA.jpg" alt="" />
                <img src="https://bournecrisp.com.au/wp-content/uploads/2019/07/accessories-make-or-break-1100x733.jpg" alt="" />
                <img src="https://handcmediastorage.blob.core.windows.net/productimages/RL/RLSLZ002-N03-150438-1400px-1820px.jpg" alt="" />

            </div>
        </div>
    </footer>
    <div className='footer__bar'>
       Copyright @ 2025 Made with <span className="heart">♥</span> Fashion Nova
    </div>
    </>
  )
}

export default Footer