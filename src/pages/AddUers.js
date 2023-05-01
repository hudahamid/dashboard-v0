import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./adduser.css";
import { Button } from "react-bootstrap";
import { users } from "./users-db";

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
      UserName: "",
      phone: "",
      email: "",
      password: "",
    });
  };
  //sorting
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const sortData = (field, direction) => {
    const sortedData = [...users].sort((a, b) => {
      if (a[field] < b[field]) {
        return direction === "asc" ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return direction === "asc" ? 1 : -1;
      }
      return 0;
    });
    setUsersList(sortedData);
  };

  return (
    <div class="mx-3 justify-center px-5 pt-4">
      <li class="nav-item dropdown pb-3 mb-4">
        <a
          class="nav-link dropdown-toggle"
          
          href="window.location"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          sort
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li   class="dropdown-item" 
              onClick={() => {
                setSortField("name");
                setSortDirection(
                  sortField === "name" && sortDirection === "asc"
                    ? "desc"
                    : "asc"
                );
                sortData("name", sortDirection);
              }}
            >
              name
            
          </li>
          <li
              class="dropdown-item"
                
              
              onClick={() => {
                setSortField("role");
                setSortDirection(
                  sortField === "role" && sortDirection === "asc"
                    ? "desc"
                    : "asc"
                );
                sortData("role", sortDirection);
              }}
            >
              role
            
          </li>

          <li
            
              class="dropdown-item"
               
              
              onClick={() => {
                setSortField("creationDate");
                setSortDirection(
                  sortField === "creationDate" && sortDirection === "asc"
                    ? "desc"
                    : "asc"
                );
                sortData("creationDate", sortDirection);
              }}
            >
              creation date
            
          </li>
        </ul>
      </li>
      <table class="table">
        <thead className="mx-3 px-3 pt-4">
          <tr>
            <th
              onClick={() => {
                setSortField("name");
                setSortDirection(
                  sortField === "name" && sortDirection === "asc"
                    ? "desc"
                    : "asc"
                );
                sortData("name", sortDirection);
              }}
            >
              Name
            </th>
            <th
              onClick={() => {
                setSortField("role");
                setSortDirection(
                  sortField === "role" && sortDirection === "asc"
                    ? "desc"
                    : "asc"
                );
                sortData("role", sortDirection);
              }}
            >
              Role
            </th>
            <th
              onClick={() => {
                setSortField("creationDate");
                setSortDirection(
                  sortField === "creationDate" && sortDirection === "asc"
                    ? "desc"
                    : "asc"
                );
                sortData("creationDate", sortDirection);
              }}
            >
              Creation Date
            </th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody class="mx-3 px-3 pt-4">
          {usersList.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.createdAt}</td>
              <td>
                <Button
                  variant={isEnabled ? "success" : "danger"}
                  onClick={handleToggle}
                >
                  {isEnabled ? "Enabled" : "Disabled"}
                </Button>
              </td>
            </tr>
          ))}
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
          required
        />
        <input
          type="text"
          placeholder="User Name"
          name="userName"
          value={newUserInput.UserName}
          onChange={handleOnChange}
          required
        />
        <input
          type="tel"
          placeholder="phone"
          name="phone"
          value={newUserInput.phone}
          onChange={handleOnChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={newUserInput.email}
          onChange={handleOnChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUserInput.email}
          onChange={handleOnChange}
          required
        />
        <Button
          class="btn btn-primary btn-lg custom-btn"
          type="submit"
          text={"Add new users"}
        >
          Add new users
        </Button>
      </form>
    </div>
  );
}

export default AddUers;
