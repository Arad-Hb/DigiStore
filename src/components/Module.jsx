import React from 'react'
import LogIn from './LogIn'
import { useSelector } from 'react-redux';
import CountriesFlag from './CountriesFlag';

const Module = () => {
   const loginData=useSelector(state=>state.login)
   const countryData=useSelector(state=>state.country)
   const validUser=useSelector(state=>state.users)
  return(
    <div>
      <div>
        {loginData.isLogin?<LogIn/>:<div></div>}
      </div>
      <div>
        {countryData.isCountry?<CountriesFlag/>:<div></div>}
      </div>
    </div>
  )
}

export default Module