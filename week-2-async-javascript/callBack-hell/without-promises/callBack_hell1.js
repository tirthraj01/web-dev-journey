
setTimeout(function(){
    console.log("Hello Tirthraj")

    setTimeout(function() {
        console.log("How are you ?")

        setTimeout(function() {
            console.log("All good ?")
        } , 4000);
    }, 2000);
}, 1000);

