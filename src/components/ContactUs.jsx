import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import '../styles/ContactUs.css'
import { ToastContainer, toast } from 'react-toastify';

//validation schema using yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
    name: Yup.string()
        .required('Required'),
})
function ContactUs() {


    return (
        <div className='contactus_main_container' >
          <div className='contactus_main_container_1'>
          <Formik
                        initialValues={{ email: '', report: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            axios.post("http://localhost:3000/reports", {
                                email: values.email,
                                report: values.name

                            }).then(
                              toast("Report Sent✅",{position: "top-right",
                              autoClose: 1500})
                            )

                            setSubmitting(false);


                        }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <div className='contactus_main_div' >
                                    <h1 className='report_account' >Report Issue</h1>
                                    <div id='field_divvv' className="form-floating mb-3">
                                        <Field type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput" >Email address</label>
                                        <ErrorMessage className='error_msg' name="email" component="div" />
                                    </div>
                                    <div id='field_divv' className="form-floating mb-3">
                                        <Field  className="form-control" id="inputcontact" placeholder="name@example.com" type="text" name="name" />
                                        <label htmlFor="floatingInput">Message</label>
                                        <ErrorMessage className='error_msg' name="name" component="div" />
                                    </div>
    
                                    <div className='button_div' >
                                        <button className='contactusbtn' type="submit" disabled={isSubmitting}>Submit</button>
                                    </div>
                                </div>


                            </Form>
                        )}

                    </Formik>

          </div>
          <div className='contactus_main_container_2'>
            <h1>FITSIBLE</h1>
          <p>email:premkumarananthan1@gmail.com</p>
          <p>Linkedin: <a target="_blank" href="https://www.linkedin.com/in/premkumar-ananthan/">www.linkedin.com</a></p>
          <div className='namesdiv' >
          <p>Done By</p>
          <h3 className='premkumar'>PREMKUMAR</h3>
          </div>


          </div>

            

                </div>
 
    )
}
export default ContactUs