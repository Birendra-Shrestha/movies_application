import React, { useState } from 'react'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handle = () => {
        localStorage.setItem('Email', email)
        localStorage.setItem('Password', password)
    }
    return (
        <>
            <div className='container-signin my-4'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-7'>
                        <form className='shadow-lg p-3'>
                            <h2 className='text-muted text-center'>Login Form</h2>
                            <div className='mb-3'>
                                <label htmlFor='email'>Email</label>
                                <input placeholder='Email' value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password'>Password</label>
                                <input placeholder='password' value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className='mb-2'>
                                <button className='btn btn-primary' onClick={handle}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin