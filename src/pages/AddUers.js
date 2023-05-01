import React,{useState} from 'react'

import { users } from './users-db'

function AddUers() {
  const [newUserInput, setNewUserInput] = useState({});
  const [usersList, setUsersList] = useState(users);
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
      userName: "",
      phone: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
     <table>
      <thead>
        <tr>
          <th >Name</th>
          <th >Role</th>
          <th >Creation Date</th>
          <th>Access</th>
        </tr>
      </thead>
      <tbody>
      {usersList.map((user) => ( 
  <tr key={user.id}>
    <td>{user.name}</td>
    <td>{user.role}</td>
    <td>{user.createdAt}</td>
    <td>
      <button>enable</button>
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
          <button type="submit" text={"Add new users"} />
        </form>
        
    </div>
  )
}

export default AddUers
