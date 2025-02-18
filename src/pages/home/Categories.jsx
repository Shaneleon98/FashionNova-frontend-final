// import React from 'react'

// import category1 from "../../assets/category-01.jpg"
// import category2 from "../../assets/category-002.jpg"
// import category3 from "../../assets/category-03.jpg"
// import category4 from "../../assets/category-04.jpg"
// import { Link } from 'react-router-dom'

// const Categories = () => {
//   const categories = [
//     {name:'Accessories', path: 'accessories', image: category1},
//     {name:'Trending', path: 'trending', image: category2},
//     {name:'Jewellery', path: 'jewellery', image: category3},
//     {name:'Cosmetics', path: 'cosmetics', image: category4},
//   ]
//   return (
//     <>
//     <div className='product__grid'>
// {
//     categories.map((category)=> {
//         <Link to ={`/categories/${category.path}`} className='categories__card'>
//          <img src="{category.image}" alt="{category.name}" />
//          <h4>{category.name}</h4>
//         </Link>
//     })
// }
//     </div>
//     </>
//   )
// }

// export default Categories

import React from 'react';
import { Link } from 'react-router-dom';

import category1 from "../../assets/category-1.jpg";
import category2 from "../../assets/Category-002.jpg";
import category3 from "../../assets/category-03.jpg";
import category4 from "../../assets/category-04.jpg";

const Categories = () => {
  const categories = [
    { name: 'Accessories', path: 'accessories', image: category1 },
    { name: 'Trending', path: 'dress', image: category2 },
    { name: 'Jewellery', path: 'jewellery', image: category3 },
    { name: 'Cosmetics', path: 'cosmetics', image: category4 },
  ];

  return (
    <div className="product__grid">
      {categories.map((category) => (
        <Link key={category.name} to={`/categories/${category.path}`} 
        className="categories__card">
          <img src={category.image} alt={category.name} />
          <h4>{category.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
