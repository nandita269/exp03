const fs = require('fs');

// Read the data from the JSON file
fs.readFile('employees.json', 'utf8', (err, data) => {
  if (err) throw err;

  // Parse the JSON data
  const employees = JSON.parse(data);

  // Perform some operations on the data
  console.log('Employee Data:', employees);

  // For example, calculate the total salary
  const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
  console.log('Total Salary:', totalSalary);
});




#include<LiquidCrystal.h>
LiquidCrystal lcd(2,3,4,5,6,7, 8, 9, 10, 11);
void setup()
{
lcd.begin(16,2);
}
void loop()
{
lcd.setCursor(0,0);
lcd.print("CHANDIGARH");
lcd.setCursor(0,1);
lcd.print("UNIVERSITY");
}




