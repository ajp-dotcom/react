import React from 'react';
import { Table, Button } from 'react-bootstrap';

const UserTable = ({ users, editRow, deleteUser }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => editRow(user)}
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default UserTable;
