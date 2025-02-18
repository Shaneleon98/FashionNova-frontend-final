import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import CartModel from '../pages/shop/CartModel'
import { useLogoutUserMutation } from '../redux/features/auth/authApi'
import { logout } from '../redux/features/auth/authSlice'

const Navbar = () => {

  const products = useSelector((state) => state.cart.products)
//   console.log(products);
  const [isCartOpen,setisCartOpen] = useState(false);
  const handleCartToggle = () => {
    setisCartOpen(!isCartOpen)
  }

  // show user if logged in 
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate()
  // console.log(user);
  
 //dropdown menu
 const[isDropDownOpen, setIsDropDownOpen] = useState(false);

 const handDropDownToggle = () => {
   setIsDropDownOpen(!isDropDownOpen)
 }

 // admin dropdown menus
 const adminDropDownMenus = [
  {label: "Dashboard", path: "/dashboard/admin"},
  {label: "Manage Items", path: "/dashboard/manage-products"},
  {label: "All Orders", path: "/dashboard/manage-orders"},
  {label: "Add Product", path: "/dashboard/add-product"},
 ]

 //user dropdown menus
  const userDropDownMenus = [
    {label: "Dashboard", path: "/dashboard"},
    {label: "Profile", path: "/dashboard/profile"},
    {label: "Payments", path: "/dashboard/payments"},
    {label: "Orders", path: "/dashboard/orders"},
   ]

   const dropdownMenus = user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus]

   const handleLogOut = async () => {
      try {
        await logoutUser().unwrap();
        dispatch(logout())
        navigate('/')
      } catch (error) {
        console.error("Failed to log out");
        
      }
   }

  return (
    <header className='fixed-nav-bar w-nav'>
        <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
            
        <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer'></i>

        
           
            <ul className='nav__links'>

                <li className='link'><Link to="/">Home</Link></li>
                <li className='link'><Link to="/shop">Shop</Link></li>
                <li className='link'><Link to="/search">Pages</Link></li>
                <li className='link'><Link to="/">Contact</Link></li>
                {/* <li className='link'><path/> */}
                                

            </ul>
          
            <div className='nav__logo'>
            <Link to="/">Fashion Nova<span>.</span></Link>
            </div>
           
            <div className='nav__icons relative'>
                <span>
                    <Link to="/search">
                    <i className="ri-search-2-line"></i>
                    </Link>
                </span>
                <span>
                    <button onClick={handleCartToggle} className='hover:text-primary'>
                    <i className="ri-shopping-bag-4-line"></i>
                    <sup className='text-sm inline-block px-1.5 text-white rounded-full bg-colors-primary text-center'>{products.length}</sup>
                    </button>
                </span>
                <span>
                  {
                    user && user ? (<>
                    <img 
                    onClick={handDropDownToggle }
                    src={user?.profileImage || "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png"} alt="" className='size-6 rounded-full cursor-pointer' />

                    {
                        isDropDownOpen && (
                          <div className='absolute right-0 mt-3 p-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                            <ul className='font-medium space-y-4 p-2'>
                              {dropdownMenus.map((menu,index) => (
                                <li key={index}>
                                  <Link
                                  onClick={() => setIsDropDownOpen(false)}
                                  className='dropdown-items' to={menu.path}>
                                  {menu.label}</Link>
                                </li>
                              ))}
                              <li><Link onClick={handleLogOut} className='dropdown-items'>Logout</Link></li>
                            </ul>
                          </div>
                        )
                    }

                    </>): <Link to ="login">
                    <i className="ri-user-3-line"></i>
                    </Link>
                  }
                    
                </span>
            </div>
        </nav>

        {
            isCartOpen && <CartModel products={products} isOpen={isCartOpen} onClose ={handleCartToggle}/>
        }
    </header>
  )
}

export default Navbar