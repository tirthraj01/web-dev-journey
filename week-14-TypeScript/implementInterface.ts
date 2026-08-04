interface People{
    name:string,
    age:number
}

class Manager implements People{
    name:string;
    age:number;

    constructor( name: string, age: number) {
        this.name= name;
        this.age= age;
    }
}

let user = new Manager ( "Tirth", 18);
console.log(user.name)
console.log(user.age)
