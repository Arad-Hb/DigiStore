import React from 'react'

const Card = (props) => {
  const product=props.product
    
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}$</h1>
    </div>
  )
}

export default Card