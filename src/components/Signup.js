import React, { useState } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')


    function handleSubmit(e) {
        e.preventDefault('firstname');
        console.log('You clicked submit.');
    }

    const navigate=useNavigate()
    function handleClick(){
        localStorage.setItem('FirstName', firstname)
        localStorage.setItem('LastName', lastname)
        localStorage.setItem('Email', email)
        localStorage.setItem('Password', password)
        localStorage.setItem('ConfirmPassword', cpassword)

        navigate("/signin")
    }

    return (
        <>
            <Formik
                initialValue={{ firstname: '', lastname: '', email: '', password: '', cpassword: '' }}
                validationSchema={Yup.object({
                    firstname: Yup.string()
                        .max(20, 'must be 10 character or less')
                        .required('Firstname is mandatory'),

                    lastname: Yup.string()
                        .max(20, 'must be 10 character or less')
                        .required('Lastname is mandatory'),

                    email: Yup.string()
                        .email('Invalid email format')
                        .required('Email is mandatory'),

                    password: Yup.string()
                        .required('Password is mandatory')
                        .matches(/(?=.*[A-Za-z])(?=.*[0=9])(?=.*[!@#$%^&*-])[A-Za-z0-9!@#$%^&*-]{8,}$/,
                            'must contain one numeric, one lowecase, uppercase and special character'),

                    cpassword: Yup.string()
                        .required('Confirm password is mandatory')
                        .oneOf([Yup.ref('password'), null], 'password and confirm password doesnot match'),

                })}
            >
                <div className='container-signup'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-7'>
                            <div className='shadow-lg p-3'>
                                <h2 className='text-muted text-center'>Signup Form</h2>
                                <Form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label htmlFor='firstname'>FirstName</label>
                                        <input type='text' name='firstname' className='form-control'onChange={(e) => setFirstName(e.target.value)} required/>
                                        <ErrorMessage name='firstname'>
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor='lastname'>LastName</label>
                                        <input type='text' name='lastname' className='form-control'onChange={(e) => setLastName(e.target.value)} required />
                                        <ErrorMessage name='lastname'>
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor='email'>Email</label>
                                        <input type='email' name='email' className='form-control'onChange={(e) => setEmail(e.target.value)} required/>
                                        <ErrorMessage name='email'>
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor='password'>Password</label>
                                        <input type='password' name='password' className='form-control'onChange={(e) => setPassword(e.target.value)} required/>
                                        <ErrorMessage name='password'>
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor='password'>Confirm Password</label>
                                        <input type='password' name='cpassword' className='form-control'onChange={(e) => setCpassword(e.target.value)} required />
                                        <ErrorMessage name='cpassword'>
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='mb-2'>
                                        <button className='btn btn-primary' onClick={handleClick}>Register</button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Formik>
        </>
    )
}

export default Signup;