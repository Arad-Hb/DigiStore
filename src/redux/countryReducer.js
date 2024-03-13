const INITIAL_STATE={isCountry:false}

const countryReducer=(state=INITIAL_STATE,action)=>{
 switch (action.type){
    case 'SET_COUNTRY_COMPONENT':{
        return{isCountry:!state.isCountry}
    }
    default:
            return state
 }
}
export default countryReducer