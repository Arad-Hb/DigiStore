const INITIAL_STATE={isLoading:false,categories:[],error:""}

const categoriesReducer=(state=INITIAL_STATE,action)=>{
 switch (action.type){
    case 'SEND_REQUEST_FOR_CATEGORIES_REDUCER':{
        return{...state,isLoading:true,error:""}
    }
    case 'RECIEVED_DATA_FOR_CATEGORIES_REDUCER':{
        return{isLoading:false,categories:action.payLoad,error:""}
    }
    case 'REQUEST_FAILED_FOR_CATEGORIES_REDUCER':{
        return{isLoading:false,categories:[],error:action.payLoad}
    }
    default:
            return state
 }
}
export default categoriesReducer