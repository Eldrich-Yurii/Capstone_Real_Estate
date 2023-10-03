import { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/Navbar';
import Quote from './components/Quote/Quote';
import Cards from './components/Cards/Cards';
import Quote2 from './components/Quote/Quote2';
import Bullets from './components/Bullets/Bullets';
import Step from './components/Quote/Step';
import Developers from './components/Developers/Developers';
import Agent from './components/Agent/Agent';
import Properties from './components/Properties/Properties';
import Form from './components/Form/Form';
import Faqs from './components/Faqs/Faqs'
import Footer from './components/Footer/Footer';
import AdminPage from './backOfficeUi/Admin/AdminPage';
import LoginPage from './backOfficeUi/LoginPage/LoginPage';
import './App.css'

function App() {
 
  return (
    <>
      {/* <Navbar/>
      <Quote />
      <Properties />
      <Cards />
      <Developers />
      <div className='mt-8 mb-8 mx-10 w-[405px] border-b-2 border-purple-400 rounded-xl md:lg:mt-10 md:lg:mx-16 md:lg:w-11/12 md:lg:mb-10'/>
      <Bullets />
      <div className='mt-72  mb-5 mx-10 w-[405px] border-b-2 border-purple-400 rounded-xl md:lg:mt-10 md:lg:mx-16 md:lg:w-11/12'/>
      <Quote2 />
      <Step />
      <Agent />
      <div className='mt-10  mb-5 mx-10 w-[405px] border-b-2 border-purple-400 rounded-xl md:lg:mt-10 md:lg:mx-16 md:lg:w-11/12'/>
      <Form />
      <div className='mt-10  mb-5 mx-10 w-[405px] border-b-2 border-purple-400 rounded-xl md:lg:mt-10 md:lg:mx-16 md:lg:w-11/12'/>
      <Faqs />
      <Footer /> */}
      <LoginPage />
      {/* <AdminPage /> */}
    </>
  )
}

export default App;
