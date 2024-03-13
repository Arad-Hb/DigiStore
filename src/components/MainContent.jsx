import { useEffect } from 'react'
import Card from './Card'
import Loading from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { recieveProductsFromAPI } from '../redux/productsActions'
import Categories from './Categories'
import Register from './Register'

const MainContent = () => {
  const productsData=useSelector(state=>state.products)
  const registerData=useSelector(state=>state.register)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(recieveProductsFromAPI())
  },[])


  if(productsData.isLoading===true){
    return <Loading/>
  }
  if(productsData.error.length!==0){
    return <h1>{productsData.error}</h1>
  }
  if(registerData.isRegister===true){
    return <Register/>
  }

  return(
    <>
    <Categories/>
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        {productsData.products.map(item=>{
          return(
            <div key={item.id}>
              <div style={{width:'150px'}}><Card key={item.id} product={item}/></div>
            </div>
          )
        })
      }
    </div>
    </>
    
  )
}

export default MainContent