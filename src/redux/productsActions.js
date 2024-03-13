import axios from "axios"

const sendRequest=()=>{
 return{type:'SEND_REQUEST_FOR_PRODUCTS_REDUCER'}
}
const recievedData=(products)=>{
  return{type:'RECIEVED_DATA_FOR_PRODUCTS_REDUCER',payLoad:products}
}
const requestFaild=(error)=>{
  return{type:'REQUEST_FAILED_FOR_PRODUCTS_REDUCER',payLoad:error.message}
}

export const recieveProductsFromAPI=()=>{
  return async(dispatch,getState)=>{
    dispatch(sendRequest())
    try{
      const response=await axios.get("http://localhost:9095/products");
      const data=await response.data;
      dispatch(recievedData(data))
    }
    catch(error){
      dispatch(requestFaild(error))
    }
  }
}