import React, { useState } from 'react'
import CommonForm from './CommonForm'
import { registerFormControls } from '../config'

const initData = {
    name:'',
    email:'',
    password:''
  }
const Register = () => {
    const [registerFormData, setRegisterFormData] = useState(initData)
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(registerFormData)
        setRegisterFormData(initData)
    }
    return (
        <div>
            <h1>Register</h1>
            <CommonForm
                formControls={registerFormControls}
                formData={registerFormData}
                setFormData={setRegisterFormData}
                buttonText={"Sign Up"}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default Register