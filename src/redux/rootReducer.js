import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import usersReducer from "./usersReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import countryReducer from "./countryReducer";

export const rootReducer=combineReducers({products:productsReducer,categories:categoriesReducer,users:usersReducer,login:loginReducer,register:registerReducer,country:countryReducer})