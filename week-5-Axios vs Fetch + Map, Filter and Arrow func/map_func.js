// normal way to solve 
const input = [1,2,3,4,5];

const newArray = [];

for( let i = 0; i<input.length ; i++) {
    newArray.push(input[i]*2);

}

console.log(newArray);

// using map

function transform(i){
    return i * 2;
}
const ans = input.map(transform);

console.log(ans);
