let ctr = 0 ;
function callBack(){
    console.log(ctr);
    ctr = ctr + 1;
}

setInterval(callBack,5000);
