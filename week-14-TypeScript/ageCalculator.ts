// 1. Explicitly type simple variables
const greeting: string = "Hello, TypeScript!";
const currentYear: number = 2026;

// 2. Define a function with typed parameters and a typed return value
function calculateAge(birthYear: number): number {
    return currentYear - birthYear;
}

// 3. Execute and display results
console.log(greeting);

const age = calculateAge(1995);
console.log(`🎂 Age calculated by the program: ${age} years old.`);
