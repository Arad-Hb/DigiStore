const INITIAL_STATE={isRegister:false}

const registerReducer=(state=INITIAL_STATE,action)=>{
 switch (action.type){
    case 'SET_REGISTER_COMPONENT':{
        return{isRegister:!state.isRegister}
    }
    default:
            return state
 }
}
export default registerReducer