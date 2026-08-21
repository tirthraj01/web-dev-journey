// Basic math operations in TypeScript 

// 1. Addition
function add(a: number, b: number): number {
return a + b;
} 

// 2. Subtraction
function subtract(a: number, b: number): number {
return a - b;
} 

// 3. Multiplication
function multiply(a: number, b: number): number {
return a * b;
} 

// 4. Division (with basic error checking for dividing by zero)
function divide(a: number, b: number): number | string {
if (b === 0) {
return "Error: Cannot divide by zero!";
}
return a / b;
} 

// --- Testing the functions ---
const num1: number = 20;
const num2: number = 5; 

console.log(Addition: ${num1} + ${num2} =, add(num1, num2));         // Output: 25
console.log(Subtraction: ${num1} - ${num2} =, subtract(num1, num2));   // Output: 15
console.log(Multiplication: ${num1} * ${num2} =, multiply(num1, num2)); // Output: 100
console.log(Division: ${num1} / ${num2} =, divide(num1, num2));       // Output: 4
console.log(Division by Zero: ${num1} / 0 =, divide(num1, 0));         // Output: Error: Cannot divide by zero!
