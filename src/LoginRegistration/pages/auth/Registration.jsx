import React, { useState } from 'react'
import { Box, TextField, Button, Alert } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



const Registration = () => {
    const [error, setError] = useState({
        status: 'false',
        msg: '',
        type: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = ({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
            tc: data.get('tc'),

        })
        if (actualData.name && actualData.email && actualData.password && actualData.tc !== null) {
            if(actualData.password===actualData.password_confirmation){
                console.log(actualData);
                document.getElementById('registration-form').reset();
                setError({ status: true, msg: 'Registration successful', type: 'success' })
            }else{
                setError({ status: true, msg: "Password and Confirm password Doesn't match", type: 'error' })
            }
        }
        else {
            setError({ status: true, msg: 'All field are required', type: 'error' })
        }
    }
    return (<>
        <Box component='form' noValidate id='registration-form' onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth id='name' name='name' label='name here' />

            <TextField margin='normal' required fullWidth id='email' name='email' label='email Address' />

            <TextField margin='normal' required fullWidth id='password' name='password' label='password here' type='password' />

            <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Password_Confirmation' type='password' />

            <FormControlLabel control={< Checkbox value='agree' color="primary" name="tc" id="tc" />} label="I agree to term and condition." />

            <Box textAlign='center'>
                <Button type='submit' sx={{ mt: 3, mb: 2, px: 5 }} variant='contained' color="success">Join</Button>
            </Box>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
    </>

    )
}

export default Registration