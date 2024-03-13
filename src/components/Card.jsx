import React from 'react'
import styles from './Card.module.css'

const Card = (props) => {
  const products=props.product
    
  return (
    <div className={`${styles.productCard}`}>
      <div className={`${styles.productPic}`}>
        <img src={products.indexImageUrl}/>
      </div>
      <div className={`${styles.productDescribtion}`}>
        <span className={`${styles.productName}`}>{products.name}</span>
        <span className={`${styles.productPrice}`}>{products.price}</span>
      </div>
    </div>
  )
}

export default Card