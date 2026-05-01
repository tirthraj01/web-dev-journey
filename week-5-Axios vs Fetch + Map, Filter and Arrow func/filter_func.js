// normal way 
const input = [ 1,2,3,4,5];

const newArray = [];

for ( let i =  0; i < input.length ; i++){
    if ( input[i] % 2 == 0 ){
        newArray.push(input[i]);
    }
}

console.log(newArray);

//using filter logic
function filterlogic(i){
    if( i % 2 == 0){
        return true;
    }else{
        return false;
    }
}

const ans = input.filter(filterlogic);
console.log(ans);
