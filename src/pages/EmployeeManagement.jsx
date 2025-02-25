import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from '../api/employeeApi';
import '../styles/EmpMgmt.css'

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleAddEmployee = async (employee) => {
    try {
      const newEmployee = await addEmployee(employee);
      setEmployees([...employees, newEmployee]);
      setIsFormOpen(false);
    } catch (error) {
      console.error('Error adding employee:', error);
      // Handle error
    }
  };
  

  const handleUpdateEmployee = async (updatedEmployee) => {
    try {
      const result = await updateEmployee(updatedEmployee);
      setEmployees(employees.map(emp => emp.id === result.id ? result : emp));
      setIsFormOpen(false);
      setSelectedEmployee(null);
    } catch (error) {
      console.error('Error updating employee:', error);
      // Handle error
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await deleteEmployee(id);
      setEmployees(employees.filter(emp => emp.id !== id));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error('Error deleting employee:', error);
      // Handle error
    }
  };

  return (
    <>
    <div className='empmgmt'>
      <Typography variant="h4" gutterBottom>Employee Management</Typography>
      <section>
        <Button variant="contained" color="primary" onClick={() => setIsFormOpen(true)}>
          Add Employee
        </Button>
        <EmployeeList 
          employees={employees} 
          onEdit={(employee) => {
            setSelectedEmployee(employee);
            setIsFormOpen(true);
          }}
          onDelete={(employee) => {
            setSelectedEmployee(employee);
            setIsDeleteModalOpen(true);
          }}
        />
      </section>
      </div>
      <EmployeeForm 
        open={isFormOpen}
        employee={selectedEmployee}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedEmployee(null);
        }}
        onSubmit={selectedEmployee ? handleUpdateEmployee : handleAddEmployee}
        />
    </>  
    
  );
};

export default EmployeePage;
