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
import './App.css'

function App() {
 
  return (
    <>
      <Navbar/>
      <Quote />
      <Properties />
      <Bullets />
      <div className='mt-10 mx-16 w-11/12 border-b-2 border-purple-400 rounded-xl mb-10'/>
      <Cards />
      <div className='mt-10 mx-16 w-11/12 border-b-2 border-purple-400 rounded-xl mb-10'/>
      <Developers />
      <Quote2 />
      <Step />
      <Agent />
      <div className='mt-10 mx-16 w-11/12 border-b-2 border-purple-400 rounded-xl mb-10'/>
      <Form />
      <div className='mt-10 mx-16 w-11/12 border-b-2 border-purple-400 rounded-xl mb-10'/>
      <Faqs />
      <Footer />

    </>
  )
}

export default App;
