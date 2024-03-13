import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { recieveCategoriesFromAPI } from '../redux/categoriesActions'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const dispatch=useDispatch()
  const categories=useSelector(state=>state.categories)
  console.log(categories);
  
  useEffect(()=>{

  dispatch(recieveCategoriesFromAPI())
  },[])

  return (
    <div>{categories.categories.map(item=>{
        return <div key={item.id}><CategoryCard data={item}/></div>
    })}</div>
   
  )
}

export default Categories