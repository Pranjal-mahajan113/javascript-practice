const ticket = new Promise(function (resolve,reject){
    const isboarded = false;
    if(isboarded){
        resolve("You are not in the flight");
    }else {
        reject("Your flight has been cancelled");
    }
})

ticket.then((data)=>{
    console.log("wohoo",data);
}).catch((data)=>{
    console.log("oh no",data);
})