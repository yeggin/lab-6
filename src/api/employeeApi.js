const API_URL = 'http://localhost:3001/api/employeeAPI';

export const getEmployees = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  };

export const addEmployee = async (employee) => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error adding employee:', error);
      throw error;
    }
  };

export const updateEmployee = async (employee) => {
  try {
    const response = await fetch(`${API_URL}/${employee.employee_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    }
    return await response.json(); // Expecting a JSON response
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

export const deleteEmployee = async (employee) => {
    try {
      const response = await fetch(`${API_URL}/${employee.employee_id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      return true;
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  };
