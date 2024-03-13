import React from 'react'

const CategoryCard = (props) => {
  
  const category=props.data
  return (
    <div>{category.name}</div>
  )
}

export default CategoryCard