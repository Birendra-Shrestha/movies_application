import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const [password, setPassword] = useState('')
    const [newpassword, setNewPassword]=useState('')
    const [confirmpassword, setConfirmPassword ]= useState('')

    const navigate = useNavigate()
    function handleClick(e) {
        e.preventDefault();
        navigate("/signin")
    }

    // const getEmail = localStorage.getItem("emailData")
    // const getPassword = localStorage.getItem("passwordData")
    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
                    <form onSubmit={handleSubmit}>
                        <div className='container-signin my-4'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-md-7'>
                                    <div className='shadow-lg p-3'>
                                        <h2 className='text-muted text-center'>Reset Password Form</h2>
                                        <div className='mb-3'>
                                            <label htmlFor='password'>Current Password</label>
                                            <input type="password" placeholder='Current password' value={password} className='form-control' onChange={(e) => setPassword(e.target.value)} required />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='password'>New Password</label>
                                            <input type="password" placeholder='New password' value={newpassword} className='form-control' onChange={(e) => setNewPassword(e.target.value)} required />
                                        </div>
                                        <div className='mb-3'>
                                            <label htmlFor='password'> Confirm New Password</label>
                                            <input type="password" placeholder='Confirm New password' value={confirmpassword} className='form-control' onChange={(e) => setConfirmPassword(e.target.value)} required />
                                        </div>

                                        <div className='mb-2'>
                                            <button className='btn btn-primary' onClick={handleClick}>Reset Password?</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
    </>
  )
}

export default ForgotPassword