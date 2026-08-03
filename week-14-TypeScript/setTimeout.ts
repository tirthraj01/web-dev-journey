//function takes another function as input, and runs it after 1 sec
function delayedCall(fn: () => void){
    setTimeout(fn,1000);
}

delayedCall(function(){
    console.log("hello")
})

