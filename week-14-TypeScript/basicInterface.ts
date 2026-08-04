interface User {
    name: string,
    age: number,
    address?: {            //here address is optional ( by using ? )
        city: string,
        country:string,
        pinCode: number | string // here pincode can be either number or string 
    }
}

let user = {
    name:"Tirthraj",
    age: 18,
    address:{
        city:"DK",
        country:"India",
        pinCode:123123
    }
}

console.log(user)
