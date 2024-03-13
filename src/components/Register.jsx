import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react' 
import * as Yup from 'yup'
import RegisterErrors from './RegisterErrors'

const Register = () => {
    const formData={
        username:"",
        password:"",
        contact:{mobile:"",address:""},
        gender:"",
        image:""
    }
    const validationSchema=Yup.object({
            username:Yup.string().required("enter username"),
            password:Yup.number().required("enter password"),
            contact:Yup.object({
                mobile:Yup.string().required('enter mobile number'),
                address:Yup.string().required('enter address')
            }),
            gender:Yup.string().required('select your gender')
        })

    const registerSubmitHandler=values=>{
        const RequeastData=new FormData()
        RequeastData.append('username',values.username)
        RequeastData.append('password',values.password)
        RequeastData.append('gender',values.gender)
        RequeastData.append('contact',values.contact)
        RequeastData.append('image',values.image)
       console.log(values);
       console.log(RequeastData);
    }
  return (
    <div>
        <Formik initialValues={formData} onSubmit={registerSubmitHandler} validateOnBlur={false} validateOnChange={false} validationSchema={validationSchema}>
            <Form>
                <label htmlFor='username'>Enter UserName</label>
                <Field name='username' type='text'/>
                <ErrorMessage component={RegisterErrors} name='username'/>
                <br/>
                <label htmlFor='password'>Enter Password</label>
                <Field name='password' type='password'/>
                <ErrorMessage component={RegisterErrors} name='password'/>
                <br/>
                <label htmlFor='contact.mobile'>Enter Mobile Number</label>
                <Field name='contact.mobile' type='number'/>
                <ErrorMessage component={RegisterErrors} name='contact.mobile'/>
                <br/>
                <label htmlFor='contact.address'>Enter Address</label>
                <Field name='contact.address' type='text' as="textarea"/>
                <ErrorMessage component={RegisterErrors} name='contact.address'/>
                <br/>
                <Field as='select' name='gender' type='text'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </Field>
                <br/>
                <Field type='file' name='image'/>
                <br/>
                <button type='submit'>Register</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Register