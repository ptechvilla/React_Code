import React, { useState } from 'react'
import { Box, TextField, Grid, Button,Alert } from '@mui/material'


const SendPasswordResetEmail = () => {
    const [error, setError] = useState({
        status: 'false',
        msg: '',
        type: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = ({
            email: data.get('email'),
        })
        if (actualData.email) {
            document.getElementById('password-reset-email-form').reset();
            console.log(actualData);
            setError({ status: true, msg: 'Password Reset Email Sent Successfully Check your Email !!', type: 'success' })
        }else{
            setError({ status: true, msg: 'Password Provide valid Email !!', type: 'success' }) 
        }
    }
    return (<>
        <Grid container justifyContent='center'>
            <Grid item sm={6} sx={12}>
                <Box component='form' noValidate sx={{ mt: 1 }} id='password-reset-email-form' onSubmit={handleSubmit}>
                    <TextField required fullWidth name="email" id="email" label="email here" />
                    <Box textAlign='center'>
                        <Button type="submit" sx={{ mt: 3, mb: 2, px: 5 }} variant='contained'>Send</Button>
                    </Box>
                    {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
                </Box>
            </Grid>
        </Grid>
    </>

    )
}

export default SendPasswordResetEmail