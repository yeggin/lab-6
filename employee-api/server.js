const express = require('express');
const mysql = require('mysql2');
const app = express();
  // Parse JSON request bodies
app.use(express.json());

app.use((req, res, next) => {
    // Content Security Policy without 'unsafe-eval'
    res.setHeader(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self';"
    );
    
    // CORS middleware to handle preflight requests (OPTIONS)
    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.sendStatus(200); // Respond OK to preflight requests
    }); 
    
    // CORS headers
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle OPTIONS preflight requests
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); // Respond OK to preflight requests
    }

    next();
});


  

const db = mysql.createConnection({
  host: 'database-1.cnqe00p5d1ax.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Timndbpw10!',
  database: 'joannedb'
});

db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
  });

app.get('/api/employees', (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching employees' });
    } else {
      res.json(results);
    }
  });
});

// Update
app.put('/employees/:id', (req, res) => {
    const employee = req.body;
    const sql = 'UPDATE Employees SET first_name = ?, last_name = ?, email = ?, birthdate =?, salary = ? WHERE EmployeeID = ?';
    db.query(sql, [employee.first_name, employee.last_name, employee.email, employee.birthdate, employee.salary, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Employee updated');
    });
});

// Delete
app.delete('/employees/:id', (req, res) => {
    const sql = 'DELETE FROM Employees WHERE EmployeeID = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Employee deleted');
    });
});

app.listen(3001, () => console.log('Server running on port 3001'));
