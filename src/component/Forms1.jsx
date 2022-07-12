import React from 'react'
import { useState } from 'react';

export default function Forms1() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <>
            <div style={{ textAlign: "center", color: "red", fontSize: "35px" }}>Forms</div>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input
                        type="text"
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                    /><br/>
                </label>
                <label>Enter your age:
                    <input
                        type="number"
                        name="age"
                        value={inputs.age || "12"}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" />
            </form>
        </>
    )
}
