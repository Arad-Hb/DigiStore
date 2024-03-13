const INITIAL_STATE={isLoading:false,products:[],error:""}

const productsReducer=(state=INITIAL_STATE,action)=>{
 switch (action.type){
    case 'SEND_REQUEST_FOR_PRODUCTS_REDUCER':{
        return{...state,isLoading:true,error:""}
    }
    case 'RECIEVED_DATA_FOR_PRODUCTS_REDUCER':{
        return{isLoading:false,products:action.payLoad,error:""}
    }
    case 'REQUEST_FAILED_FOR_PRODUCTS_REDUCER':{
        return{isLoading:false,products:[],error:action.payLoad}
    }
    default:
            return state
 }
}
export default productsReducer