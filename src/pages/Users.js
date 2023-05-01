import React ,{ useState } from 'react';
//import { Link } from 'react-router-dom';
import { users } from './dbconst';
import UsersCard from '../component/UsersCard';
import * as Yup from 'yup';
import { Formik, Form,  ErrorMessage } from 'formik';

function Users() {
  const usersList = useState(users);
  const initialValues = { name: '', username: '', email: '', phone: '', password: '' };
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
//___________________________________________________________________________________
const [newUserInput, setNewUserInput] = useState({});
const   setUsersList = useState(users);

const handleOnChange = (event) => {
  const keyName = event.target.name;
  const value = event.target.value;
  setNewUserInput((prev) => {
    // Copy the previous object (state) and only change the keyName that I want
    // prev is aka newMovieInput
    return { ...prev, [keyName]: value };
  });
};




const handleSubmit = (event) => {
  event.preventDefault();
  setUsersList((prev) => {
    return [newUserInput, ...prev];
  });
 
  




  // Clear the form
  setNewUserInput({
    name: "",
    fullname: "",
    phone: "",
    email: "",
    password: "",
    createdAt: "",
        role: "",
        enabled: false,
  });
};
  return (
    <div>
      <h2>Users info</h2>
      <div>
        tables
      </div>
      {/* <div>
        <button><Link to="/addUsers">Add new users</Link></button> */}
      {/* </div> */}
      {usersList.map((user) => {
          return <UsersCard{...user} />;
        })}
        <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          {/* <Field type="text" name="name"  onChange={handleOnChange} /> */}
          <input
             type="text"
             name="name" 
             onChange={handleOnChange}
             
             value={newUserInput.name}
           />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          {/* <Field type="text" name="username"  onChange={handleOnChange} /> */}
          <input
             type="text" name="username" 
             onChange={handleOnChange}
             
             value={newUserInput.username}
           />
          
          <ErrorMessage name="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          {/* <Field type="email" name="email"  onChange={handleOnChange}/> */}
          <input
             type="email" name="email"
             onChange={handleOnChange}
            
             value={newUserInput.email}
           />
          <ErrorMessage name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          {/* <Field type="tel" name="phone"  onChange={handleOnChange} /> */}
          <input
            type="tel" name="phone"
             onChange={handleOnChange}
            
             value={newUserInput.phone}
           />
          <ErrorMessage name="phone" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          {/* <Field type="password" name="password"    onChange={handleOnChange}/> */}
          <input
            type="password" name="password" 
             onChange={handleOnChange}
            
             value={newUserInput.password}
           />
          <ErrorMessage name="password" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  )
}

export default Users
