//Using setTimeout which returns a promise

function setTimeoutPromisified(duration){
    return new Promise(function(resolve)  {
        setTimeout(resolve,duration);

    });
}

function callBack(resolve){
    console.log("Promise Done !, Hello Tirthraj");
}

setTimeoutPromisified(3000).then(callBack);

//Done with the code

