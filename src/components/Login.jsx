import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';
// import './app.css';


const Login = () => {
    const[message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const dispatch = useDispatch();
    const [loginUser, {isLoading: loginLoading}] = useLoginUserMutation()
    const navigate = useNavigate()
    // console.log(loginUser);

    // handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = {
            email,
            password
        }
        // console.log(data);
        try { 
          const response = await loginUser(data).unwrap();
          console.log(response);
          const {token, user} = response;
          dispatch(setUser({user}))
          alert("login successful");
          navigate("/")
           
        } catch (error) {
            setMessage("Please provide a valid email and password")
        }
        
    }
  return (
    <section className='h-screen flex items-center justify-center' style={{background:"#FFE2E2"}}>
     {/* <div> */}
        <div className='max-w-sm  border shadow bg-white mx-auto p-8 h-96 rounded-md' id="login">
        {/* <img src="https://clipground.com/images/fashion-designer-png-4.png" alt="" /> */}
        <form onSubmit={handleLogin}  className='space-y-7 max-w-sm mx-auto pt-10 mt-6 bg-transparent'>
            <input type="email" name='email' id='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' required className='w-full focus:outline-none  px-5 py-3 '/>
            <input type="password" name='password' id='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' required className='w-full focus:outline-none   px-5 py-3 '/>
            {
                message && <p className='text-red-500'>{message}</p>
            }
            <button type='submit' className='w-full mt-5 text-white font-medium py-3 rounded-md' id='button_log'> 
            Login
            </button>
        </form>


        <p className='my-5 italic text-sm text-center'>Don't have an account? <Link to="/register" className='text-white px-1 underline'>Register</Link>here.</p>
        </div>
     {/* </div> */}
    </section>
  )
}

export default Login