import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Quote from './components/Quote/Quote';
import Cards from './components/Cards/Cards';
import Inquire from './components/Inquire/Inquire';
import Footer from './components/Footer/Footer';
import Step from './components/Quote/Step';
import './App.css'

function App() {
 
  return (
    <>
      <Navbar/>
      <Quote />
      <Cards />
      <Step />
      <Inquire />
      <Footer />

    </>
  )
}

export default App;
