import React,{useState} from 'react'
import {Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Signup = () => {
    const[firstname,setFirstName]=useState('')
    const[lastname,setLastName]=useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const handle = () => {
        localStorage.setItem('FirstName', firstname)
        localStorage.setItem('LastName', lastname)
        localStorage.setItem('Email', email)
        localStorage.setItem('Password', password)
        localStorage.setItem('ConfirmPassword', cpassword)
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
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
                        .matches(/(?=.*[A-Za-z])(?=.*[0=9])(?=.*[!@#$%^&*-])[A-Za-z0-9!@#$%^&*-]{8,}$/,
                            'must contain one numeric, one lowecase, uppercase and special character')
                        .required('Password is mandatory'),

                    cpassword: Yup.string()
                        .required('Confirm password is mandatory')
                        .oneOf([Yup.ref('password'), null], 'password and confirm password doesnot match'),

                })}
            >
                <div className='container-signup'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-7'>
                            <div className='shadow-lg p-3'>
                                <h2 className='text-muted text-center'>Register Form</h2>
                                <Form onSubmit={handleSubmit}>
                                    <div className='mb-3'>
                                        <label htmlFor='firstname'>FirstName</label>
                                        <Field type='text'  name='firstname' className='form-control' />
                                        <ErrorMessage name='firstname'>
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor='lastname'>LastName</label>
                                        <Field type='text' name='lastname' className='form-control' />
                                        <ErrorMessage name='lastname'>
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor='email'>Email</label>
                                        <Field type='email'  name='email' className='form-control' />
                                        <ErrorMessage name='email'>
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor='password'>Password</label>
                                        <input type='password'  name='password' className='form-control' />
                                        <ErrorMessage name='password'>
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor='password'>Confirm Password</label>
                                        <input type='password'  name='cpassword' className='form-control' />
                                        <ErrorMessage name='cpassword'>
                                            {msg => <div style={{ color: 'red' }}>{msg}</div>}
                                        </ErrorMessage>
                                    </div>

                                    <div className='mb-2'>
                                        <button className='btn btn-primary' onClick={handle}>Register</button>
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

export default Signup