import React ,{ useState } from 'react'; 
import { Link } from 'react-router-dom'
import { users } from './users-db'
function Users() {
  const usersList = useState(users);
  return (
     <div>
      <h2>Users info</h2>
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
            <td>{user.creationDate}</td>
            <td>
              <button >
               enable
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      </div>
      <div>
        <br/>
        <button><Link to="/addUsers">Add new users</Link></button>
      </div>
    </div>
  )
}

export default Users
