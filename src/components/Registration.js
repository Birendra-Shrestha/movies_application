import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [formIsValid, setformIsValid]=useState("");


    // using localStorage
    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('confirmPassword', confirmPassword)

    // useEffect(()=>{
    //     const username=JSON.parse(localStorage.getItem('username'));
    //     if (username){
    //         setUsername(username);
    //     }
    // },[]);


    const handleSignUp = (e) => {
        e.preventDefault();

        // if (formIsValid){
        //     console.log('form submitted')
        // }
        // else{
        //     console.log('form is invalid');
        // }

        // Perform validation
        if (username.length > 10) {
            setErrorMessage("Username must be 10 characters or less.")
        }
        else if (!username.match(/^[a-zA-Z]+$/)) {
            setErrorMessage('firstname only contains alphabets', 'fnameMsg', 'red');
        }
        else if (!username.match) {
            setSuccessMessage("Valid Username");
        }
        else if (!email.endsWith("@gmail.com")) {
            setErrorMessage("Email must be a valid Gmail address.");
        }
        else if (password.length < 8) {
            setErrorMessage("Password must be 8 characters or more.");
        }
        else if (!password.match(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&?!*])[A-Za-z\d@#$%&?!*]{8,}$/)) {
            setErrorMessage("Invalid Password");
        }
        else if (password == confirmPassword) {
            setSuccessMessage("Password match.");
        }
        else if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
        } else {
            // All validations passed, submit the form
            console.log("Submitting form...");
        }


        // form submit
        const dataToSubmit = {
            username, email, password, confirmPassword
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(dataToSubmit)
        }).then(res => res.json())
            .then(res => {
                console.log(res)
                alert('Form Submitted Successfully')
            })

    };

    const handleClick=(e)=>{
        // e.preventDefault();
        
    };

    return (
        <>
            <div className='col-md-6 offset-md-3 shadow-lg p-3 mt-4'>
                <h2 className='text-muted text-center'>Registration</h2>
                <form action='./signin' method='post' onSubmit={handleSignUp} >
                    <div className='mb-3'>
                        <label>Username:    </label>
                        <input
                            type="text"
                            value={username}
                            className="form-control"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>


                    <div className='mb-3'>
                        <label>
                            Email:</label>
                        <input
                            type="email"
                            value={email}
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>


                    <div className='mb-3'>
                        <label>
                            Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            className="form-control"
                            autoComplete="on"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>


                    <div className='mb-3'>
                        <label>
                            Confirm Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={confirmPassword}
                            className="form-control"
                            autoComplete="on"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                   

                    <button type="submit" className='btn' onClick={handleClick}>Sign Up</button>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    {successMessage && <p style={{ color: 'Green' }}>{successMessage}</p>}

                </form>
            </div>

        </>
    )
}

export default Registration