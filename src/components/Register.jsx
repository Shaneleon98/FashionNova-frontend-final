import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterUserMutation } from '../redux/features/auth/authApi';

const Register = () => {
      const[message, setMessage] = useState('');
      const[username, setUsername] = useState('')
      const [email, setEmail] = useState('');
      const[password, setPassword] = useState('');

      const [registerUser, {isLoading}] = useRegisterUserMutation();
      const navigate = useNavigate();

      const handleRegister = async (e) => {
            e.preventDefault();
            const data = {
                username,
                email,
                password
            }
            // console.log(data);
            try {
                await registerUser(data).unwrap();
                alert("Registration successful!")
                navigate('/login')
            } catch (error) {
              setMessage("Registration failed")
            }
            
        }
  return (
    <section className='h-screen flex items-center justify-center' style={{background:"#FFE2E2"}}>
     <div>
        <div className='max-w-md  border shadow bg-white mx-auto p-6 h-96 rounded-md' id='register'>
        <form onSubmit={handleRegister}  className='space-y-7 max-w-sm mx-auto pt-5  bg-transparent'>
            <input type="text" name='username' id='username' onChange={(e) => setUsername(e.target.value)} placeholder='Username' required className='w-full focus:outline-none  px-5 py-3 '/>
            <input type="email" name='email' id='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' required className='w-full focus:outline-none  px-5 py-3 '/>
            <input type="password" name='password' id='password' onChange={(e) => setPassword(e.target.value)} placeholder='Password' required className='w-full focus:outline-none   px-5 py-3 '/>
            {
                message && <p className='text-red-500'>{message}</p>
            }
            <button type='submit' className='w-full mt-5 text-white font-medium py-3 rounded-md' id='button_log'> 
            Login
            </button>
        </form>

        <p className='my-5 italic text-sm text-center'>Don't have an account? <Link to="/login" className='text-white px-1 underline'>Register</Link>here.</p>
        </div>
     </div>
    </section>
  )
}

export default Register