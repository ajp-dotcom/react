import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ addUser, editing, currentUser, updateUser }) => {
  const [user, setUser] = useState(editing ? currentUser : { name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      updateUser(user.id, user);
    } else {
      addUser(user);
    }
    setUser({ name: '', email: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          placeholder="Enter name"
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {editing ? 'Update User' : 'Add User'}
      </Button>
    </Form>
  );
};

export default UserForm;
