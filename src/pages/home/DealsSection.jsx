import React from 'react'

const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
     <div className='deals__image'>
        <img src="https://www.pngall.com/wp-content/uploads/5/Womens-Fashion-Accessories-PNG-HD-Image.png" alt="" className='mb-12' />
        {/* <img src="https://www.pngkit.com/png/full/79-798851_hand-painted-three-tailored-dresses-png-transparent-fashion.png" alt="" />
        <img src="https://static.vecteezy.com/system/resources/previews/023/658/113/non_2x/modern-happy-female-lifestyle-fashion-portrait-beautiful-attractive-young-woman-girl-enjoy-stylish-walk-with-shopping-bag-packages-on-the-street-trendy-outfit-on-shopping-mall-browse-product-free-png.png" alt="" />
     */}
     </div>
       <div className='deals__content'>
         <h4>Get Up To 25% Discounts</h4>
         <p>Unlock the door to fashionable savings! Shop our discount sale and make heads turn with your stylish outfits. </p>
         <div className='deals__countdown flex-wrap'>
            <div className='deals__countdown__card'>
             <h4>14</h4>
             <p>Days</p>
            </div>
            <div className='deals__countdown__card'>
             <h4>20</h4>
             <p>Hours</p>
            </div>
            <div className='deals__countdown__card'>
             <h4>15</h4>
             <p>Mins</p>
            </div>
            <div className='deals__countdown__card'>
             <h4>02</h4>
             <p>Secs</p>
            </div>
         </div>
       </div>
    </section>
  )
}

export default DealsSection