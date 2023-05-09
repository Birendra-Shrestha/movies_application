// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Registration = () => {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");
//     const [successMessage, setSuccessMessage] = useState("");


//     // using localStorage
//     localStorage.setItem('username', username)
//     localStorage.setItem('email', email)
//     localStorage.setItem('password', password)
//     localStorage.setItem('confirmPassword', confirmPassword)


//     const handleSignUp = (e) => {
//         e.preventDefault();

//         // Perform validation
//         if (username.length > 10) {
//             setErrorMessage("Username must be 10 characters or less.")
//         }
//         else if (!username.match(/^[a-zA-Z]+$/)) {
//             setErrorMessage('Username only contains alphabets', 'fnameMsg', 'red');
//         }

//         else if (!email.endsWith("@gmail.com")) {
//             setErrorMessage("Email must be a valid Gmail address.");
//         }
//         else if (password.length < 8) {
//             setErrorMessage("Password must be 8 characters or more.");
//         }
//         else if (!password.match(/(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%&?!*])[A-Za-z\d@#$%&?!*]{8,}$/)) {
//             setErrorMessage("Invalid Password");
//         }
//         else if (password == confirmPassword) {
//             setSuccessMessage("Password match.");
//         }
//         else if (password !== confirmPassword) {
//             setErrorMessage("Passwords do not match.");
//         } else {
//             // All validations passed, submit the form
//             console.log("Submitting form...");
//         }


//         // form submit
//         const dataToSubmit = {
//             username, email, password, confirmPassword
//         }
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify(dataToSubmit)
//         }).then(res => res.json())
//             .then(res => {
//                 console.log(res)
//                 alert('Form Submitted Successfully')
//             })

//     };


//     return (
//         <>
//             <div className='col-md-6 offset-md-3 shadow-lg p-3 mt-4'>
//                 <h2 className='text-muted text-center'>Registration</h2>
//                 <form action='./signin' method='post' onSubmit={handleSignUp} >
//                     <div className='mb-3'>
//                         <label>Username:    </label>
//                         <input
//                             type="text"
//                             value={username}
//                             className="form-control"
//                             onChange={(e) => setUsername(e.target.value)}
//                             required
//                         />
//                     </div>


//                     <div className='mb-3'>
//                         <label>
//                             Email:</label>
//                         <input
//                             type="email"
//                             value={email}
//                             className="form-control"
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>


//                     <div className='mb-3'>
//                         <label>
//                             Password:</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={password}
//                             className="form-control"
//                             autoComplete="on"
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>


//                     <div className='mb-3'>
//                         <label>
//                             Confirm Password:</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={confirmPassword}
//                             className="form-control"
//                             autoComplete="on"
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                     </div>
//                     <input type="submit" value="Submit"/>
//                     {/* <button type="submit" className='btn' onClick={handleClick}>Sign Up</button> */}
//                     {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//                     {successMessage && <p style={{ color: 'Green' }}>{successMessage}</p>}

//                 </form>
//             </div>

//         </>
//     )
// }

// export default Registration

import React, { useState } from 'react';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};

        if (!firstName.trim()) {
            errors.firstName = 'First name is required';
        }

        if (!lastName.trim()) {
            errors.lastName = 'Last name is required';
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email address is invalid';
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
        } else if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }

        if (!confirmPassword.trim()) {
            errors.confirmPassword = 'Confirm password is required';
        } else if (confirmPassword !== password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            // form is valid, submit data
        }
    };

    return (

        <>
            <div className='col-md-6 offset-md-3 shadow-lg p-3 mt-4'>
                <h2 className='text-muted text-center'>Registration</h2>

                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </label>
                    <br />
                    <label>
                        Last Name:
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </label>
                    <br />
                    <label>
                        Confirm Password:
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} minLength={8} required />
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>

        </>

    );
};

export default Registration;