function greet(user: { name: string; age: number }) {
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

greet({
    name: "Tirth",
    age: 22,
});

let user = {
    name: "Viraj",
    age: 19,
};

greet(user);
