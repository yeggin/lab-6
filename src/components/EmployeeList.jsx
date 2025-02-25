import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';


import React from 'react'

const EmployeeList = ({ employees, onEdit, onDelete}) => {
  return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Birthdate</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {employees.map((employee) => (
                    <TableRow key={employee.id}>
                        <TableCell>{employee.first_name}</TableCell>
                        <TableCell>{employee.last_name}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.salary}</TableCell>
                        <TableCell>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={() => onEdit(employee)}
                            style={{ marginRight: '10px' }}
                            >
                            Edit
                            </Button>
                            <Button 
                            variant="contained" 
                            color="error" 
                            onClick={() => onDelete(employee)}
                            >
                            Delete
                        </Button>  
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>

    </TableContainer>
  );
};

export default EmployeeList;
