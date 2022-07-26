import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Card, Button, CardContent, Grid } from '@mui/material'
import * as yup from 'yup';

const Formvalidation = () => {
    const defaultvalues = {
        name: "",
        email: "",
        password: "",
        course: "",
        date: "",
        gender: "",
        date: "",
        about: "",
        mobile: ""

    }

    const validationschema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().required("please enter email").email("please enter valid email"),
        password: yup.string().required("please enter password"),
        course: yup.string().required("please select any option"),
        gender: yup.string().required("select any option"),
        date: yup.string().required("date is required"),
        about: yup.string().min(5, "Too short").max(500, "two long").required("required"),
        mobile: yup.number().min(10, "Must be more than 10 characters").required("required")


    })
    const handleSubmit = (values) => {
        console.log("values", values)
    }

    return (
        <>
            <h1 style={{ textAlign: 'center', color: 'blue' }}>Form validation using Formik and Yup Library</h1>

            <Card sx={{ backgroundColor: 'ButtonFace', width: "700px", height: '500px', marginLeft: '350px' }}>
                <CardContent>
                    <Formik initialValues={defaultvalues}
                        validationSchema={validationschema}
                        onSubmit={handleSubmit} >
                            <Form style={{ marginLeft: "90px" }}>
                                <Grid container spacing={2}>
                                    <Grid item sx={6}>
                                        <label><b>Name:  </b>  </label>
                                        <Field type='text' name='name' placeholder='enter your name' />
                                        <div style={{ color: 'red' }}>
                                            <ErrorMessage name='name' />
                                        </div>
                                    </Grid>

                                    <Grid item sx={6}>
                                        <label><b>Email:  </b></label>
                                        <Field type='text' name='email' placeholder='enter your email' />
                                        <div style={{ color: 'red' }}>
                                            <ErrorMessage name='email' />
                                        </div>
                                    </Grid>

                                    <Grid item sx={6}>
                                        <label><b>Password:  </b></label>
                                        <Field type='password' name='password' placeholder='enter your password' />
                                        <div style={{ color: 'red' }}>
                                            <ErrorMessage name='password' />
                                        </div>
                                    </Grid>

                                    <Grid item sx={6}>
                                        <label><b>Course:  </b></label>
                                        <Field component="select" name='course'>
                                            <option >please select</option>
                                            <option value='c++'>C++</option>
                                            <option value='php'>php</option>
                                        </Field>
                                        <div style={{ color: 'red' }}>
                                            <ErrorMessage name='course' />
                                        </div>
                                    </Grid>
                                    <br />

                                    <Grid item sx={6}>
                                        <label><strong><b>Gender: </b></strong></label>&nbsp;&nbsp;

                                        <Field type="radio" name="gender" value="Male" />
                                        <label>Male:</label>&nbsp;&nbsp;

                                        <Field type="radio" name="gender" value="Female" />
                                        <label>Female:</label><br />
                                        <div style={{ color: 'red' }}>
                                            <ErrorMessage name='gender' />
                                        </div>
                                    </Grid>

                                    <Grid item sx={6}>
                                        <label><b>Date: </b> </label>
                                        <Field type="date" name="date" /><br />
                                        <div style={{ color: 'red' }}>
                                            <ErrorMessage name='date' />
                                        </div>
                                    </Grid>

                                    <Grid item sx={6}>
                                        <label><b>Mobile: </b> </label>
                                        <Field type="text" name="mobile" /><br />
                                        <div style={{ color: 'red' }}>
                                            <ErrorMessage name='mobile' />
                                        </div>
                                    </Grid>

                                    <Grid item sx={6}>
                                        <label><b>About:  </b></label>
                                        <Field type='text' name='about' as="textarea" />
                                        <div style={{ color: 'red' }}>
                                            <ErrorMessage name='about' />
                                        </div>
                                    </Grid>


                                    <Grid item style={{ marginTop: "14px", margin: "auto" }}>
                                        <Button type="submit" variant="contained" color="primary" size="small" >submit</Button>
                                    </Grid>
                                </Grid>
                            </Form>
                        
                    </Formik>
                </CardContent>
            </Card>
        </>
    )
}

export default Formvalidation