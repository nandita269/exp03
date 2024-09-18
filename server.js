const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to display the form
app.get('/add-employee', (req, res) => {
  res.render('add_employee');
});

// Route to handle form submission
app.post('/add-employee', (req, res) => {
  const { name, salary , add } = req.body;

  // Read existing data
  fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) throw err;

    const employees = JSON.parse(data);

    // Add new employee
    employees.push({ name, salary: parseFloat(salary) , add });

    // Write updated data to file
    fs.writeFile('employees.json', JSON.stringify(employees, null, 3), (err) => {
      if (err) throw err;
      res.redirect('/employees');
    });
  });
});

// Route to display employees
app.get('/employees', (req, res) => {
  fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) throw err;

    const employees = JSON.parse(data);
    const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);

    res.render('index', { employees, totalSalary });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
