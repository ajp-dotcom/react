import React, { useState } from 'react';
import UserForm from '../components/User/UserForm';
import UserTable from '../components/User/UserTable';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({ id: null, name: '', email: '' });

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, email: user.email });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>{editing ? 'Edit User' : 'Add User'}</h2>
          <UserForm
            addUser={addUser}
            editing={editing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </Col>
        <Col>
          <h2>View Users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
