const INITIAL_STATE={isLogin:false}

const loginReducer=(state=INITIAL_STATE,action)=>{
 switch (action.type){
    case 'SET_LOGIN_COMPONENT':{
        return{isLogin:!state.isLogin}
    }
    default:
            return state
 }
}
export default loginReducer