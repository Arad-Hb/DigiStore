import axios from "axios"

const sendRequest=()=>{
 return{type:'SEND_REQUEST_FOR_CATEGORIES_REDUCER'}
}
const recievedData=(categories)=>{
  return{type:'RECIEVED_DATA_FOR_CATEGORIES_REDUCER',payLoad:categories}
}
const requestFaild=(error)=>{
  return{type:'REQUEST_FAILED_FOR_CATEGORIES_REDUCER',payLoad:error.message}
}

export const recieveCategoriesFromAPI=()=>{
  return async(dispatch,getState)=>{
    dispatch(sendRequest())
    try{
      const response=await axios.get("http://localhost:9095/products/categories");
      const data=await response.data;
      dispatch(recievedData(data))
    }
    catch(error){
      dispatch(requestFaild(error))
    }
  }
}