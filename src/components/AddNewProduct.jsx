import React, { useRef, useState } from 'react'

const AddNewProduct = () => {
    const [productData,setProductData]=useState({name:" ",price:0})
    const productImage=useRef()

    const nameChangeHandler=(e)=>{
        setProductData(prev=>({...prev,name:e.target.value}))
        
    }
    const priceChangeHandler=(e)=>{
        setProductData(prev=>({...prev,price:e.target.value}))
        
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        sendProduct()
    }
    const sendProduct = async () => {
        const requestBody = new FormData()
        
        requestBody.append("data", JSON.stringify(productData))
        requestBody.append("files", productImage.current.files[0])
        try {
            const response = await fetch("http://localhost:9095/products", {
                method: "post",
                body: requestBody
            })
            const result = await response.json()
            console.log(result)
        }
        catch (error) {
            console.log(error)
        }
    }
    
    
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text'  onChange={nameChangeHandler} value={productData.name} />
            <input type='number' onChange={priceChangeHandler} value={productData.price} />
            <input type='file' multiple="multiple" ref={productImage} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddNewProduct