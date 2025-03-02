import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import EmployeeList from '../components/EmployeeList';
import EmployeeForm from '../components/EmployeeForm';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from '../api/employeeApi';
import '../styles/EmpMgmt.css';
import { AuthenticatedComponent } from '@asgardeo/auth-react';
import { useAuthContext } from '@asgardeo/auth-react';


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
    }
  };

  const handleAddEmployee = async (employee) => {
    try {
      const newEmployee = await addEmployee(employee);
      setEmployees((prevEmployees) => {
        const updatedEmployees = [...prevEmployees, newEmployee];
        return updatedEmployees;
      });
      setIsFormOpen(false);

    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  const handleUpdateEmployee = async (updatedEmployee) => {
    try {
      const result = await updateEmployee(updatedEmployee);
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) =>
          emp.employee_id === result.employee.employee_id ? result.employee : emp
        )
      );
      setIsFormOpen(false);
      setSelectedEmployee(null);
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  const handleDeleteEmployee = async (employee) => {
    try {
      await deleteEmployee(employee);
      setEmployees((prevEmployees) => {const updatedEmployees = prevEmployees.filter(emp => emp.employee_id !== employee.employee_id);
      setIsDeleteModalOpen(false);
      return updatedEmployees;
    });
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    
    <div className='empmgmt'>
      <Typography variant="h4" gutterBottom sx={{ color: 'black', fontWeight: 'bold', margin: '0 100px'}}>Employee Management</Typography>
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
            handleDeleteEmployee(employee)
            setSelectedEmployee(employee);
            setIsDeleteModalOpen(true);
          }}
        />
      </section>
      <EmployeeForm 
        open={isFormOpen}
        employee={selectedEmployee}
        onClose={() => {
          setIsFormOpen(false);
          setSelectedEmployee(null);
        }}
        onSubmit={selectedEmployee ? handleUpdateEmployee : handleAddEmployee}
      />
    </div>
  );
};

export default EmployeePage;
