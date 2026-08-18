// T is a placeholder for any type passed in
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const numbers =;
const firstNumber = getFirstElement(numbers); // Automatically knows this is a number

const words = ["apple", "banana", "cherry"];
const firstWord = getFirstElement(words); // Automatically knows this is a string
