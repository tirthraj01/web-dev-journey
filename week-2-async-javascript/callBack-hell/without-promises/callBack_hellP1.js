function setTimeoutPromisified(duration) {
  return new Promise(function(resolve){
    setTimeout(resolve,duration);

  });
}

setTimeoutPromisified(1000).then(function (resolve) {
  console.log("Hello Tirthraj");
  setTimeoutPromisified(3000).then(function (resolve) {
    console.log("How are uh ?");
    setTimeoutPromisified(5000).then(function (resolve) {
      console.log("Where are you ?");
    });
  });
});
