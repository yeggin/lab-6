import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Container, Typography, TextField, Button } from '@mui/material';
import '../styles/EmpMgmt.css';

const EmployeeForm = ({ employee, onSubmit, onClose, open }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    birthdate: '',
    salary: ''
  });

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    } else {
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        birthdate: '',
        salary: ''
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle>{employee ? 'Edit Employee' : 'Add Employee'}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            name="first_name"
            label="First Name"
            value={formData.first_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="last_name"
            label="Last Name"
            value={formData.last_name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="salary"
            label="Salary"
            value={formData.salary}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          {/* You can include birthdate field if needed */}
          <DialogActions>
            <Button type="submit" color="primary">
              {employee ? 'Update' : 'Add'}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EmployeeForm;
