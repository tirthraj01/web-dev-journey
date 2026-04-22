function s3done(){
    console.log("All good ?");
}
function s2done(){
    console.log("How are uh ?");
    setTimeout(s3done,4000); 
}
function s1done(){
    console.log("Hello Tirthraj");
    setTimeout(s2done,3000);
}
setTimeout(s1done,1000);
