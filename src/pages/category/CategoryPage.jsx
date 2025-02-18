import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from "../../data/products.json"
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
      const {categoryName} = useParams(); 
    //   console.log(categoryName);
      const[filteredProducts, setFilteredProduts] = useState([]);

      useEffect(()=>{
        const filtered = products.filter((product) => product.category === categoryName.toLocaleLowerCase ());
     
        setFilteredProduts(filtered)
    },[categoryName])

  return (
    <>
    <section className='section__container bg-colors-primary-light'>
     <h2 className='section__header capitalize'>{categoryName}</h2>
     <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style game today!</p>
    </section>

    {/* products card  */}
    <div className='section__container'>
        <ProductCards products={filteredProducts}/>
    </div>
    </>
  )
}

export default CategoryPage