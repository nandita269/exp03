const fs = require('fs');

// Sample employee data
const employees = [
  { id: 1, name: 'Ayushi', salary: 50000 },
  { id: 2, name: 'Sohail', salary: 60000 },
  { id: 3, name: 'Champ', salary: 70000 },
];

// Convert the employee data to a JSON string
const data = JSON.stringify(employees, null, 2);

// Write the data to a JSON file
fs.writeFile('employees.json', data, (err) => {
  if (err) throw err;
  console.log('Data has been inserted into employees.json');
});

