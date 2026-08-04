//interfaces vs types
// create two types called User and admin,
// create a function that takes either a user or admin an input, and returns a string saying "welcome, [name]"
interface Admin{
    name: string;
    permissions:string
}

interface User{
    name:string;
    age:number;
}

type UserOrAdmin = User | Admin;

function greet(user: UserOrAdmin){
    console.log(user.name) 
}
