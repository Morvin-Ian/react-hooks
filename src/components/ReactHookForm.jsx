import React from 'react'
import { useForm } from 'react-hook-form'

const ReactHookForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const onSubmitForm = (data) => {
        console.log(data)
        reset()
    }

    return (
        <div>
            <h1>ReactHookForm</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <input {...register('email', {
                    required: true
                })} type="email" name="email" />
                {errors.email && errors.email.type === 'required' ? <p style={{ color: "red", margin: "5px" }}>Email is required</p> : null}
                <br />
                <input {...register('password', {
                    required: true
                })} type="password" name="password" />
                {errors.password && errors.password.type === 'required' ? <p style={{ color: "red", margin: "5px" }}> Password is required</p> : null}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReactHookForm