interface User{
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}

type UpdateProps = Pick < User , 'name'| 'age'| 'email' >

type UpdatePropsOptional = Partial <UpdateProps>  ///Partial to mark optional ( ? )

function updateUser( updatedProps: UpdatePropsOptional){
    
}
updateUser({
    name:"Tir",
    age:18
})
