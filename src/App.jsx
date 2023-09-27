import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Quote from './components/Quote/Quote';
import Cards from './components/Cards/Cards';
import Quote2 from './components/Quote/Quote2';
import Inquire from './components/Inquire/Inquire';
import Footer from './components/Footer/Footer';
import Step from './components/Quote/Step';
import Developers from './components/Developers/Developers';
import Properties from './components/Properties/Properties';
import Faqs from './components/Faqs/Faqs'
import './App.css'

function App() {
 
  return (
    <>
      <Navbar/>
      <Quote />
      <Cards />
      <div className='mt-10 mx-16 w-11/12 border-b-4 border-purple-500'/>
      <Quote2 />
      <Step />
      <Properties />
      <Developers />
      <Inquire />
      <Faqs />
      <Footer />

    </>
  )
}

export default App;
