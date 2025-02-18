import React, { useEffect, useState } from 'react'
import productsData from "../../data/products.json"
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';
import { useFetchAllProductsQuery } from '../../redux/features/products/productsApi';

const filters = {
    categories:['all','accessories','dress','jewellery','cosmetics'],
    colors:['all','black','red','gold','blue','silver','beige','green'],
    priceRanges: [
        {label: 'under $50', min: 0, max: 50},
        {label: '$50-$100', min: 50, max: 100},
        {label: '$100-$200', min: 100, max: 200},
        {label: '$100 and above', min: 200, max: Infinity},

    ]
}

const ShopPage = () => {
//  const [products, setProducts] = useState(productsData);
 const[filtersState, setFiltersState] = useState({
    category:'all',
    color:'all',
    priceRange: ''
 });

 // filtering function
//  const applyFilters =() => {
//     let filteredProducts = productsData;


//  filter by category 
// if(filtersState.category && filtersState.category !== 'all'){
//    filteredProducts =  filteredProducts.filter(product => product.category === filtersState.category)
// }

// filter by color 
// if(filtersState.color && filtersState.color !== 'all'){
//   filteredProducts = filteredProducts.filter(product =>product.color === filtersState.color)
// }

// if(filtersState.priceRange){
//     const [minPrice, maxPrice] = filtersState.priceRange.split('-').map(Number);
//     filteredProducts = filteredProducts.filter(product => product.price>= minPrice && product.price<= maxPrice )
// }

// setProducts(filteredProducts)
// }

// useEffect(()=> {
//     applyFilters()
// },[filtersState])

// clearing filters 


const [currentPage, setCurrentPage] = useState(1);
const [ProductPerPage] = useState(8);

const {category, color, priceRange} = filtersState;
const [minPrice, maxPrice] = priceRange.split('-').map(Number);

const {data:{products = [], totalPages, totalProducts} = {}, error, isLoading} = useFetchAllProductsQuery({
    category: category !== 'all' ? category: '',
    color: color !== 'all' ? color: '',
    minPrice: isNaN(minPrice) ? '': minPrice,
    maxPrice: isNaN(maxPrice) ? '': maxPrice,
    page: currentPage,
    limit:ProductPerPage,
})



// claer the filter 
const clearFilters = () => {
    setFiltersState({
        category: 'all',
        color: 'all',
        priceRange:''
    })
}

//onclick function pagination button
const handlePageChange = (pageNumber) => {
    if(pageNumber > 0 && pageNumber <= totalPages){
        setCurrentPage(pageNumber)
    }
}

if(isLoading) return <div>Loading....</div>
if(error) return <div>Error loading products</div>

const startProduct = (currentPage - 1)* ProductPerPage + 1;
const endProduct = startProduct + products.length -1

  return (
    <>
    <section className='section__container bg-colors-primary-light'>
     <h2 className='section__header capitalize'>Shopping Time!</h2>
     <p className='section__subheader'>Discover the Hottest Picks: Elevate your style with Our Curated Collection's of Trending Women's Products.!</p>
    </section>

    <section className='section__container'>
       <div className='flex flex-col md:flex-row md:gap-12 gap-8'>
        {/* left side  */}
        <ShopFiltering
        filters={filters} 
        filtersState={filtersState} 
        setFiltersState={setFiltersState}
         clearFilters={clearFilters}
         />
        {/* right side  */}
        <div>
            <h3 className='text-xl font-medium mb-4'>Showing {startProduct} to {endProduct} of {totalProducts} products</h3>
             <ProductCards products={products} />

             {/* Pagination of the products  */}

             <div className='mt-6 flex justify-center'>
               <button 
                disabled= {currentPage === 1}
               onClick={()=> {handlePageChange(currentPage - 1)}} className='px-4 py-2 bg-pink-300 text-white rounded-md mr-2'>previous</button>
               {
                [...Array(totalPages)].map((_, index) => (
                      <button onClick={()=> handlePageChange(index + 1)}  key={index} className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-gray-300 text-white' :  'bg-pink-300 text-white' } rounded-md mx-1`}>{index + 1}</button>
                ))
               }
               <button 
                disabled= {currentPage === totalPages}
                onClick={()=> handlePageChange(currentPage + 1)} className='px-4 py-2 bg-pink-300 text-white rounded-md ml-2'>next</button>

             </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default ShopPage