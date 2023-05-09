import React, { useState } from 'react'

const Test = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.name && formState.email && formState.message) {
            // Handle form submission here
            console.log("Form submitted successfully!");
        } else {
            console.log("Form not submitted. Please fill in all fields.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Test;