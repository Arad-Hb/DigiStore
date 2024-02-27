import React, { useEffect, useState } from 'react'
import Card from './Card'
import Loading from './Loading'

const MainContent = () => {
  const [isLoading,setIsLoading]=useState(false)
  const [products,setProducts]=useState([])

  const getProducts=async ()=>{
  const response=await fetch("http://localhost:9095/products")
  const jsonBody=await response.json()
  setProducts(jsonBody)
  setIsLoading(true)
}
useEffect(()=>{
  setTimeout(()=>{
    getProducts()
  },3000)
  
},[])

  return !isLoading?<Loading/>:
  (
    <div>
        {products.map(item=>{
          return <div><Card key={item.id} product={item}/></div>
            
        })
      }
    </div>
  )
}

export default MainContent