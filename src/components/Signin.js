import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomePage from './HomePage'

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    function handleClick(e) {
        e.preventDefault();
        navigate("/")
    }

    function handleClick1 (e){
        e.preventDefault();
        navigate("/forgotpassword")
    }

    const getEmail = localStorage.getItem("emailData")
    const getPassword = localStorage.getItem("passwordData")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.current.value === "abc@gmail.com" && password.current.value === "12345")
            localStorage.setItem("emailData", "abc@gmail.com")
            localStorage.setItem("passwordData", "12345")
    }


    return (
        <>
            {
                getEmail && getPassword?
                    <HomePage /> :
                    <form onSubmit={handleSubmit}>
                        <div className='container-signin my-4'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-md-7'>
                                    <div className='shadow-lg p-3'>
                                        <h2 className='text-muted text-center'>Signin Form</h2>
                                        <div className='mb-3'>
                                            <label htmlFor='email'>Email</label>
                                            <input type="email" placeholder='Email' value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} required />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='password'>Password</label>
                                            <input type="password" placeholder='password' value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} required />
                                        </div>

                                        <div className='mb-2'>
                                            <button className='btn btn-primary' onClick={handleClick}>Login</button>
                                            <br/>
                                            <br/>
                                            <button className='btn btn-primary' onClick={handleClick1}>Reset Password?</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
            }
        </>
    )
}

export default Signin