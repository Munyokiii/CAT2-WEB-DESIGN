// Prompt the user to enter employee name, hours worked, and rate per hour
const employeeName = prompt("Enter employee name:");
const hoursWorked = prompt("Enter hours worked:");
const ratePerHour = prompt("Enter rate per hour:");

// Calculate basic pay
const basicPay = hoursWorked * ratePerHour;

// Calculate tax based on basic pay
let tax;
if (basicPay > 50000) {
  tax = basicPay * 0.2;
} else if (basicPay >= 20000) {
  tax = basicPay * 0.1;
} else {
  tax = 0;
}

// Calculate net pay
const netPay = basicPay - tax;

// Display the results
alert(`Employee Name: ${employeeName}\nBasic Pay: ${basicPay}\nTax: