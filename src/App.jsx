import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Quote from './components/Quote/Quote';
import Cards from './components/Cards/Cards';
import './App.css'

function App() {
 
  return (
    <>
      <Navbar/>
      <Quote />
      <Cards />
    </>
  )
}

export default App;
