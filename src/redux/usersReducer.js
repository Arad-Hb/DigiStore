const INITIAL_STATE={isLoading:false,data:[],error:""}

const usersReducer=(state=INITIAL_STATE,action)=>{
 switch (action.type){
    case 'SEND_REQUEST_FOR_USERS_REDUCER':{
        return{...state,isLoading:true,error:""}
    }
    case 'RECIEVED_DATA_FOR_USERS_REDUCER':{
        return{isLoading:false,data:action.payLoad,error:""}
    }
    case 'REQUEST_FAILED_FOR_USERS_REDUCER':{
        return{isLoading:false,data:[],error:action.payLoad}
    }
   
    default:
            return state
 }
}
export default usersReducer