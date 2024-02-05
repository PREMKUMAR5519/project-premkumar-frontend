import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Register.css'
import register_fitness from '../images/resister_fitness.png'
import fitness_register from '../images/register_fitness.png'
import fitsible from '../images/fitsible.png'
import { ToastContainer, toast } from 'react-toastify';
//validation schema using yup
const RegistrationSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too short')
        .max(50, 'Too long')
        .required('Required'),
    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'password must be atleat 8 charecters')
        .required('Required'),
})
function Register() {
    const navigateTo = useNavigate()
    const [show,setShow]=useState(false)


    const handleCheck=()=>{
        setShow(!show)
    }
    return (
        <div className='main_container' >
            <div className='form2_container' >
                <div className='form2_container1' >
                    <div className='form2_container_header' >
                        <div className='form2_container_header2' >
                        <span><img className='logo_img' src={fitsible} alt="" /></span><span>Fitsible</span>
                        </div>
                    </div>
                    <div className='form2_container1_0' >
                        <img className='form_img_top' src={fitness_register} alt="" />
                    </div>
                    <div className='form2_container1_1' >
                        <img className='form_img' src={register_fitness} alt="" />
                    </div>
                </div>
                <div className='form2_container2' >
                    <Formik
                        initialValues={{ username: '', email: '', password: '' }}
                        validationSchema={RegistrationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            axios.post('http://localhost:3000/auth/register', {
                                name: values.username,
                                email: values.email,
                                password: values.password

                            }).then(res=>{
                                toast(`${res.data.msg}✅`,{position: "top-center",
                              autoClose: 1500})

                            }
                                
                               
                            ).catch(console.log("errors")
                            
                               

                            )
                            setSubmitting(false);
                            
                           navigateTo('/login')
                        }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <div className='form_main_div' >
                                    <h1 className='create_account' >Create Account</h1>
                                    <div id='field_div' className="form-floating mb-3">
                                        <Field type="name" className="form-control" id="floating-Input" placeholder="name@example.com" name="username" />
                                        <label htmlFor="floatingInput">Enter Name</label>
                                        <ErrorMessage className='error_msg' name="username" component="span" />
                                    </div>

                                    <div id='field_div' className="form-floating mb-3">
                                        <Field className="form-control" id="floating--Input" placeholder="name@example.com" type="email" name="email" />
                                        <label htmlFor="floatingInput">Email address</label>
                                        <ErrorMessage className='error_msg' name="email" component="div" />
                                    </div>
                                    <div id='field_div' className="form-floating mb-3">
                                        <Field className="form-control" id="floatingInput" placeholder="name@example.com" type={`${show?"text":"password"}`} name="password" />
                                        <label htmlFor="floatingInput"> <ErrorMessage name="password" />Password</label>
                                        <ErrorMessage className='error_msg' name="password" component="div" />
                                        <div className="form-check">
                                        <input onClick={handleCheck} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                show password
                                            </label>
                                    </div>
                                    </div>
                                    <div className='button_div' >
                                        <button className='registernewbtn' type="submit" disabled={isSubmitting}> Submit</button>
                                    </div>
                                    <h3 id='already_user' >Existing User?<Link to='/login'>Login</Link></h3>
                                </div>
                            </Form>
                        )}

                    </Formik>

                </div>


            </div>

        </div>
    )
}

export default Register