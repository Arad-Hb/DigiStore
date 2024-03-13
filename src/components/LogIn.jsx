import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React, { useEffect } from 'react'
import LogInError from './LogInError'
import { useDispatch, useSelector } from 'react-redux'
import { checkValidUser} from '../redux/usersActions'
import Loading from './Loading'
import EmptyDiv from './EmptyDiv'

const LogIn = () => {
    const dispatch=useDispatch()
    const validUser=useSelector(state=>state.users)
    console.log(validUser.data.success)
    let loginData={username:"",password:""}
    const validationSchema=Yup.object({
        username:Yup.string().required("enter username"),
        password:Yup.string().required("enter password"),
    })
    const submitHandler=(values)=>{
        loginData.username=values.username
        loginData.password=values.password
        dispatch(checkValidUser(loginData))
    }
  
    
    if(validUser.data.success===true){

        return<h1>correct information</h1>
    }

    
  return (
    <div>
        <Formik initialValues={loginData} onSubmit={submitHandler} validateOnBlur={false} validateOnChange={false} validationSchema={validationSchema}>
            <Form>
                <label htmlFor='username'>Enter UserName</label>
                <Field name='username' type='text'/>
                <ErrorMessage component={LogInError} name='username'/>
                <br/>
                <label htmlFor='password'>Enter Password</label>
                <Field name='password' type='password'/>
                <ErrorMessage component={LogInError} name='password'/>
                <button type='submit'>Log In</button>
            </Form>
        </Formik>
    </div>
  )
}

export default LogIn