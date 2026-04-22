function setTimeoutPromisified(duration) {
  return new Promise(function(resolve){
    setTimeout(resolve,duration);

  });
}
async function solve(resolve){
    await setTimeoutPromisified(1000);
    console.log("Oye");

    await setTimeoutPromisified(2000);
    console.log("Kya kar rahi ho ?");;

    await setTimeoutPromisified(3000);
    console.log("Aur bataoo......");
    

    }
 solve();
