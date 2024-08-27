import React, { useState } from 'react'
import CommonForm from './CommonForm'
import { LoginFormControls } from '../config'

const initData = {
  email:'',
  password:''
}

const Login = () => {
  const [loginFormData, setLoginFormData] = useState(initData)

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log(loginFormData)
    setLoginFormData(initData)
  }

  return (
    <div>
        <h1>Login</h1>
        <CommonForm 
          formData={loginFormData}
          setFormData = {setLoginFormData} 
          formControls={LoginFormControls}
          buttonText = "Sign In"
          handleSubmit = {handleSubmit}
        />
    </div>
  )
}

export default Login