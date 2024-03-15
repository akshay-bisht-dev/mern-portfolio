import React from 'react'
// import contactImg from '../../assets/contact.webp'
import { Formik, Form, Field } from 'formik'
import { ContactSchema } from '../../schema/ContactSchema'

const Contact = () => {

    const initialValues = {
        name: '',
        email: '',
        query: ''
    }

    const onSubmit = (values, actions) => {
        console.log(values)
        actions.resetForm();
    }

    return (
        <>
            <div className='contact_div'>
                <div className='container'>
                    <div className='row'>
                        <div className=" col-12 col-md-6 contact_left">
                            <div className='container'>
                                <div className='row d-flex justify-content-center align-items-center py-5'>
                                    <div className="col-12 col-md-8">
                                        <h2>Get in Touch</h2>
                                        <Formik initialValues={initialValues} validationSchema={ContactSchema} onSubmit={onSubmit}>
                                            {({ errors, touched }) => (
                                                <Form action="#" method='POST'>
                                                    <div className='mb-2'>
                                                        <label htmlFor="name" className="form-label">Full Name</label>
                                                        <Field type="text" name="name" className="form-control" />
                                                        <div className="error_msg">
                                                            {errors.name && touched.name && (<p className='form_error'>{errors.name}</p>)}
                                                        </div>
                                                    </div>
                                                    <div className='mb-2'>
                                                        <label htmlFor="email" className="form-label">Email</label>
                                                        <Field type="email" name="email" className="form-control" />
                                                        <div className="error_msg">
                                                            {errors.email && touched.email && (<p className='form_error'>{errors.email}</p>)}
                                                        </div>
                                                    </div>
                                                    <div className='mb-2'>
                                                        <label htmlFor="message" className="form-label">Any Query</label>
                                                        <Field type="text" name="message" className="form-control" />
                                                        <div className="error_msg">
                                                            {errors.query && touched.query && (<p className='form_error'>{errors.query}</p>)}
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        <input type="submit" className="btn btn-outline-danger" id="your-name" name="submit" value="Submit" />
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-0 col-md-6 contact_right">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact