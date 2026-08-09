interface User {
 name: string;
 age: number;
}

function sumOfAge(user1: User, user2: User) {
  return a.age + b.age;
};

// Example usage
const result = sumOfAge({
 name: "Tirth",
 age: 20
}, {
 name: "Tirthraj",
 age: 21
});
console.log(result);   // Output: 41
