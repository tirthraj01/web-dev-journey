//Using interfaces
interface UserType {
    firstName: string,
    lastName: string
    age: number,
}
function greet2(user: UserType){

}
let user: UserType = {
    firstName:"Tirthraj",
    lastName: "Chavan",
    age: 18
}

console.log("Hello", user.firstName , user.lastName, "your age is ", user.age)
