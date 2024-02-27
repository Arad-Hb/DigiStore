import { useState } from 'react'
import './App.css'
import MainContent from "./components/MainContent.jsx";
import SignUp from './components/SignUp.jsx';
import AddNewProduct from './components/AddNewProduct.jsx';



function App() {
  

  return (
    <>
      <AddNewProduct/>
      <SignUp/>
      <MainContent/>
     
    </>
  )
}

export default App
