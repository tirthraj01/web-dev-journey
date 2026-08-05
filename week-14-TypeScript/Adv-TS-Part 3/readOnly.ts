//Readonly
type User2={
    readonly name:string,
    readonly age:number
}
const user: User2 ={
    name:"tir",
    age: 18
}

user.age = 18  //cannot assign to 'age' because it is a read-only property
