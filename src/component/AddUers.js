 import React from 'react';
 import * as Yup from 'yup';


import { Formik, Form, Field, ErrorMessage } from 'formik';

function AddUers() {
    const phoneRegExp = /^[1-9]{1}[0-9]{9}$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required'),
  password: Yup.string().required('Required'),
});
  const initialValues = { name: '', username: '', email: '', phone: '', password: '' };

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <Field type="tel" name="phone" />
          <ErrorMessage name="phone" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
 export default AddUers
