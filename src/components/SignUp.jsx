import React, { useRef } from 'react'

const SignUp = () => {
    const signUpRequest=async()=>{
        const response=await fetch('http://localhost:9095/users/register',{
            method:'post',
            body:JSON.stringify({
                username:username.current.value,
                password:password.current.value,
            }),
            headers:{'content-type':'application/json'}
        })
        const receivedData=await response.json()
        console.log(receivedData);
    }
    
    const username=useRef()
    const password=useRef()
    const submitHandler=(e)=>{
        e.preventDefault()
        signUpRequest()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input name={username} type='text' ref={username} placeholder='username'/>
            <input name={password} type='password' ref={password} placeholder='password'/>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp