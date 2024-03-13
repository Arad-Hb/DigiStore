

const sendRequest=()=>{
    return{type:'SEND_REQUEST_FOR_USERS_REDUCER'}
   }
   const recievedData=(data)=>{
     return{type:'RECIEVED_DATA_FOR_USERS_REDUCER',payLoad:data}
   }
   const requestFaild=(error)=>{
     return{type:'REQUEST_FAILED_FOR_USERS_REDUCER',payLoad:error.message}
   }
  
   
   export const checkValidUser=(data)=>{
    return async(dispatch,getState)=>{
      dispatch(sendRequest())
      try{
        const response=await fetch("http://localhost:9095/users/login",{
          method: "post",
          headers: {
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log(result)
        dispatch(recievedData(result))
          }
          catch(error){
            dispatch(requestFaild(error))
          }
    }
   }