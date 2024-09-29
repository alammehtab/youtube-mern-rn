import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, Table, TableBody, TableCell, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import './App.css'

const API_URL = 'http://localhost:3000/api/users'

const App = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [editMode, setEditMode] = useState(false);

  // Fetch all users
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get(API_URL)
      .then(response => setUsers(response.data.data))
      .catch(err => console.error(err));
  };

  // Add new user
  const addUser = () => {
    axios.post(API_URL, currentUser)
      .then(response => {
        setUsers([...users, response.data.data]);
        handleClose();
        fetchUsers()
      })
      .catch(err => console.error(err));
  };

  // Update existing user
  const updateUser = () => {
    axios.put(`${API_URL}/${currentUser.id}`, currentUser)
      .then(() => {
        setUsers(users.map(user => (user.id === currentUser.id ? currentUser : user)));
        handleClose();
      })
      .catch(err => console.error(err));
  };

  // Delete user
  const deleteUser = (id) => {
    axios.delete(`${API_URL}/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(err => console.error(err));
  };

  const handleClickOpen = (user = { name: '', email: '' }) => {
    setCurrentUser(user);
    setEditMode(!!user.id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentUser({ name: '', email: '' });
  };

  return (
    <Container maxWidth="md" sx={{display:'flex',flexDirection:'column'}}>
      <Typography variant="h4" align="center" gutterBottom>User Management System</Typography>

      <Button variant="contained" color="primary" onClick={() => handleClickOpen()} sx={{alignSelf:'flex-end'}}>
        Add User
      </Button>

      {/* User Table */}
      <Table sx={{ marginTop: '20px' }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button variant="contained" color="secondary" onClick={() => handleClickOpen(user)}>Edit</Button>
                <Button variant="contained" color="error" onClick={() => deleteUser(user.id)} sx={{ ml: 1 }}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add/Edit User Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={currentUser.name}
            onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={currentUser.email}
            onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={editMode ? updateUser : addUser}>
            {editMode ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default App;
