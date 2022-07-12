import React from 'react'
import './form.css'
import { Button } from '@material-ui/core'
import { useState } from 'react'

const RegistrationForm = () => {

    const [userRegistration, setuserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name);
        // console.log(value);

        setuserRegistration({ ...userRegistration, [name]: value })

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const newRecord = { ...userRegistration }
        console.log(newRecord);
        setRecords([newRecord,...records ]);
        // console.log(records);

        setuserRegistration({ username: "", email: "", phone: "", password: "" });

    }

    return (
        <>
      
            <h2 style={{ textAlign: "center", marginTop: "100px", color: "green", textDecoration: "underline"}}>Registration Form</h2>

            <form action='' className='f' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">FullName</label>
                    <input type="text"
                        value={userRegistration.username}
                        onChange={handleInput}
                        name='username' id='username' />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                        value={userRegistration.email}
                        onChange={handleInput}
                        name='email' id='email' />
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input type="text"
                        value={userRegistration.phone}
                        onChange={handleInput}
                        name='phone' id='phone' />
                </div>

                <div>
                    <label htmlFor="passdatastyleword">Password</label>
                    <input type="password"
                        value={userRegistration.password}
                        onChange={handleInput}
                        name='password' id='password' />
                </div>

                <Button type="submit" color="primary" variant="contained" size="small" className='btn'>Registration</Button>
            </form>

            <div>
                {
                    records.map((value) => {
                        return (
                            <div className='datastyle'>
                                <p>{value.username}</p>
                                <p>{value.email}</p>
                                <p>{value.phone}</p>
                                <p>{value.password}</p>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
export default RegistrationForm;

