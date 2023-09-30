import { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar/Navbar';
import Quote from './components/Quote/Quote';
import Cards from './components/Cards/Cards';
import Quote2 from './components/Quote/Quote2';
import Bullets from './components/Bullets/Bullets';
import Inquire from './components/Inquire/Inquire';
import Step from './components/Quote/Step';
import Developers from './components/Developers/Developers';
import Agent from './components/Agent/Agent';
import Properties from './components/Properties/Properties';
import Faqs from './components/Faqs/Faqs'
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
 
  return (
    <>
      <Navbar/>
      <Properties />
      <Quote />
      <Cards />
      <Bullets />
      <div className='mt-10 mx-16 w-11/12 border-b-4 border-purple-400 rounded-xl mb-10'/>
      <Quote2 />
      <Step />
      <Developers />
      <Agent />
      <Inquire />
      <Faqs />
      <Footer />

    </>
  )
}

export default App;
