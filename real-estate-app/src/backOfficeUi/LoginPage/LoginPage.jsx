import React, { useEffect } from 'react'
import { useState } from 'react'
import constants from '../../components/Constant'
import {Link, useNavigate } from 'react-router-dom'
import Logo from './img/LOGO-NAME_WHITE.svg'
import axios from 'axios'

const LoginPage = () => {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const loginEndpoint = `${constants.ENDPOINT}/api/login`;


  async function handleLogin(e) {
    e.preventDefault();

    const payload = {
      username: username,
      password: password
    }

    await axios.post(loginEndpoint, payload)
      .then(result => {
      console.log(result)
      if (result.data.sucess === 'true') {
        const userType ='userType';
        localStorage.setItem(userType, result.data.data.userType);

        const auth = localStorage.getItem('userType');
        if (auth === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/');
        }
      } else {
        alert("INVALID CREDENTIALS!")
      }
    })
  }

  useEffect(() => {
    const auth = localStorage.getItem('userType');
    if (auth === 'admin') {
      navigate('/admin-dashboard');
    }
  }, []);
  

  return (
    <>
    <div className='bg-blue-gray-50 flex justify-center items-center h-screen'>
      <div className='w-80 h-[385px] drop-shadow-2xl text-base bg-white rounded-3xl'>
        <div className='flex justify-center py-6 bg-purple-800 rounded-t-2xl'>
            <img src={Logo} alt="" width={150} className=''/>
        </div>
        <form className='pt-3 leading-10 px-5'>
            <div>
                <label htmlFor="username" className='pl-1 font-semibold'>Username</label>
                <div>
                  <input 
                  type="text" 

                  name="username" 
                  id="username" 
                  value={username}
                  autoComplete='true'
                  className='shadow-inner w-full h-10  bg-gray-300 p-2 rounded-xl text-gray-500'
                  onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
            </div>
            <div className='pt-2'>
                <label htmlFor="password" className='pl-1 font-semibold'>Password</label>
                <div>
                  <input
                  type="password"
                  name="password" 
                  id="password" 
                  value={password}
                  autoComplete='true'
                  className='shadow-inner w-full h-10 bg-gray-300 p-2 rounded-xl text-gray-500'
                  onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className='flex justify-end pt-5'>
            <button 
                id='Login'
                onClick={handleLogin}
                className='text-white px-4 bg-purple-900 rounded-xl drop-shadow-lg hover:bg-purple-800 duration-300'>
                    Log in
            </button>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default LoginPage
