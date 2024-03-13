import './App.css'
import MainContent from "./components/MainContent.jsx";
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { useSelector } from 'react-redux';
import Module from './components/Module.jsx';



function App() {
  const checkLogin=useSelector(state=>state.login)
  const checkRegister=useSelector(state=>state.register)
  
  return (
    <>
      <Header/>
      <Module/>
      <MainContent/>
      <Footer/>
    </>
  )
}

export default App
