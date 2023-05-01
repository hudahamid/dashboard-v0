import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import  "./adduser.css"
import { Button } from 'react-bootstrap';
import { users } from './users-db'

function AddUers() {
  const [isEnabled, setIsEnabled] = useState(false);
  const handleToggle = () => {
    setIsEnabled(!isEnabled);
  };
  const [newUserInput, setNewUserInput] = useState({});
  const [usersList, setUsersList] = useState(users);
  const handleOnChange = (event) => {
    const keyName = event.target.name;
    const value = event.target.value;
    setNewUserInput((prev) => {
      // Copy the previous object (state) and only change the keyName that I want
      // prev is aka newMovieInput.
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
      userName: "",
      phone: "",
      email: "",
      password: "",
    });
  };
  return (
    <div class='mx-3 justify-center px-5 pt-4'>
     <table class="table">
      <thead className='mx-3 px-3 pt-4'>
        <tr>
          <th >Name</th>
          <th >Role</th>
          <th >Creation Date</th>
          <th>Access</th>
        </tr>
      </thead>
      <tbody class='mx-3 px-3 pt-4'>
      {usersList.map((user) => ( 
  <tr key={user.id}>
    <td>{user.name}</td>
    <td>{user.role}</td>
    <td>{user.createdAt}</td>
    <td>
    <Button variant={isEnabled ? 'success' : 'danger'} onClick={handleToggle}>
      {isEnabled ? 'Enabled' : 'Disabled'}
    </Button>
    </td>
  </tr>))} 
  </tbody>
    </table>
       <form
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
            width: "500px",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder=" Name"
            name="name"
            value={newUserInput.name}
            onChange={handleOnChange}
          />
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            value={newUserInput.UserName}
            onChange={handleOnChange}
          />
          <input
            type="tel"
            placeholder="phone"
            name="phone"
            value={newUserInput.phone}
            onChange={handleOnChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={newUserInput.email}
            onChange={handleOnChange}
          />
          <input
            type="password" name="password" 
            placeholder="Password"
             value={newUserInput.email}
            onChange={handleOnChange}
          />
          <Button  class="btn btn-primary btn-lg custom-btn"  type="submit" text={"Add new users"} />
        </form>
        
    </div>
  )
}

export default AddUers
