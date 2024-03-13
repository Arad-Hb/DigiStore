import React, { useState } from 'react'
import styles from './Header.module.css'
import { FaAngleDown ,FaUserPlus,FaUser} from "react-icons/fa6";
import { RiShoppingBag3Line } from "react-icons/ri";
import Flag from 'react-flagkit';
import LogIn from './LogIn';
import { useDispatch, useSelector } from 'react-redux';
import { checkIsLogin } from '../redux/loginActions';
import { checkIsRegister } from '../redux/registerActions';
import { checkIsCountry } from '../redux/countryAction';


const Header = () => {
  const dispatch=useDispatch()
  
  
  const loginHandler=()=>{
    dispatch(checkIsLogin())
  }
  const registerHandler=()=>{
    checkIsRegister(dispatch)
  }
  const countryHandler=()=>{
    checkIsCountry(dispatch)
  }
  
    
  return (
    <div className={`${styles.header}`}>
        <div>
            <img src='https://images.mobileshop.eu/logo.png' className={`${styles.headerLogo}`}/>
        </div>
        <div className={`${styles.headerNav}`}>
            <div className={`${styles.headerBasket}`}>
                <div className={`${styles.headerBasketContainer}`}>
                    <a href='#' className={`${styles.basketLink}`}>
                        <span className={`${styles.basketTitle}`}>My basket</span>
                        <RiShoppingBag3Line  className={`${styles.basketIcon}`}/>
                    </a>
                </div>
            </div>
            <div className={`${styles.headerRegister}`} onClick={registerHandler}>
                <a href='#' className={`${styles.registerLink}`}>
                    <span className={`${styles.registerTitle}`}>Register</span>
                    <FaUserPlus className={`${styles.registerIcon}`} />
                </a>
            </div>
            <div className={`${styles.headerLogin}`} onClick={loginHandler}>
                <a href='#' className={`${styles.loginLink}`}>
                    <span  className={`${styles.loginTitle}`}>Login</span>
                    <FaUser  className={`${styles.loginIcon}`}/>
                </a>
            </div>
            <div className={`${styles.headerCountries}`} onClick={countryHandler}>
                <a href='#' className={`${styles.countryFlags}`}>
                    <FaAngleDown  className={`${styles.countryIcon}`}/>
                    <Flag country="US" className={`${styles.countryFlag}`} role="button"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header