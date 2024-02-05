import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'
import { useUserContext } from './UserContext';
import jwt_decode from "jwt-decode";
import register_fitness from '../images/resister_fitness.png'
import fitness_register from '../images/register_fitness.png'
import fitsible from '../images/fitsible.png'



//validation schema using yup
const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
    password: Yup.string()
        .min(8, 'password must be atleat 8 charecters')
        .required('Required'),
})
function Login() {
    const { setUser, setEmail } = useUserContext()
    const navigateTo = useNavigate()
    const [Invalid, setInvalid] = useState("")
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
                        initialValues={{ email: '', password: '' }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            axios.post("http://localhost:3000/auth/login", {
                                email: values.email,
                                password: values.password

                            }).then(res => {
                                localStorage.setItem('userTokken', res.data.tokken)
                                const decoded = jwt_decode(res.data.tokken)
                                setUser({
                                    token: res.data.tokken,
                                    id: decoded.user.id,
                                    name: decoded.user.username
                                })
                                navigateTo('/verifier')
                            })
                                .catch((err) => {
                                     console.log(err)
                                    setInvalid("Invalid User Id or Password")
                                })


                            // handle response data here
                            // console.log("users", user)
                            setEmail(values.email)

                            setSubmitting(false);

                        }}>
                        {({ isSubmitting }) => (
                            <Form>
                                <div className='form_main_div' >
                                    <h1 className='create_account' >Login</h1>
                                    <div id='field_div' className="form-floating mb-3">
                                        <Field type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                        <label htmlFor="floatingInput">Email address</label>
                                        <ErrorMessage className='error_msg' name="email" component="div" />
                                    </div>
                                    <div id='field_div' className="form-floating mb-3">
                                        <Field className="form-control" id="floating-Input" placeholder="name@example.com" type={`${show?"text":"password"}`} name="password" />
                                        <label htmlFor="floatingInput">Password</label>
                                        <ErrorMessage className='error_msg' name="password" component="div" />
                                        <div className="form-check">
                                        <input onClick={handleCheck} className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                show password
                                            </label>
                                    </div>
                                    </div>
                                    
                                    <div className='button_div' >
                                        <button className='registernewbtn' type="submit" disabled={isSubmitting}>login</button>
                                    </div>
                                    <h5 className='new_user_font' >New User?<Link to='/register'>Register</Link></h5>
                                </div>


                            </Form>
                        )}

                    </Formik>
                    <h5 className='invalid' >{Invalid}</h5>
                </div>
            </div>
        </div>
    )
}
export default Login