import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom'
import { useUserContext } from './UserContext';
import '../styles/NewUser.css'



//validation schema using yup
const RegistrationSchema = Yup.object().shape({
  age: Yup.string()
    .required('Required'),
  height: Yup.string()
    .required('Required'),
  weight: Yup.string()
    .required('Required'),
})
function NewUser() {
  const navigateTo = useNavigate()
  const { user } = useUserContext()
  return (
    <div className="main_containernew" >
     <div className='newuser_1' >


      <Formik
        initialValues={{ age: '', height: '', weight: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:3000/personalDetails", {
            userId: user.id,
            age: values.age,
            height: values.height,
            weight: values.weight,
            gender: values.gender

          }).then(res => {
            navigateTo('/ExistingUser')
          })
          setSubmitting(false);
        }}>
        {({ isSubmitting }) => (
          <Form> 
            <h1>Details</h1>
            <div id='field_divnew' className="form-floating mb-3">
            <Field className="form-control"  id="floating_new" placeholder="name@example.com" type="number" name="age" />
            <label htmlFor="floatingInput">Enter Age</label>
            <ErrorMessage className='error_msg' name="age" component="span" />
            </div>
            <div id='field_divnew' className="form-floating mb-3">
            <Field  className="form-control"  id="floating_new" placeholder="name@example.com" type="number" name="height" />
            <label htmlFor="floatingInput">Enter Height cm</label>
            <ErrorMessage  className='error_msg' name="height" component="span" />
            </div>
            <div id='field_divnew' className="form-floating mb-3">
            <Field className="form-control"  id="floating_new" placeholder="name@example.com" type="number" name="weight" />
            <label htmlFor="floatingInput">Enter weight kg</label>
            <ErrorMessage className='error_msg' name="weight" component="span" />
            </div>
           <div className='seconds_inputs' >

        
            <label>
              <Field type="radio" name="gender" value="male"/>
                Male
            </label>

            <label>
            <Field type="radio" name="gender" value="female"/>
                Female
            </label>
            </div>
            <div className='button_divs' >
            <button className='register_buton' type="submit" disabled={isSubmitting}>
              Submit
            </button>
            </div>


      

          </Form>
        )}

      </Formik>
            </div>
  
    </div>
  )
}

export default NewUser