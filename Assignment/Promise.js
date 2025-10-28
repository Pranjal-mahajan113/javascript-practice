// let pizzaorder = new Promise((deliver,cancel) =>{
//     let pizzaready = true;
//     if(pizzaready){
//         deliver("Pizza is ready");
//     }
//     else{
//         cancel("Order cancel");

//     }

// });

// pizzaorder.then((msg) =>{
// console.log(msg);

// })
// .catch((err)=>{
//     console.log("err")
// })

const hellopromise = new Promise ((resolve,reject) =>{
    let Hello = true;
    if(Hello) {
        resolve("Hello ")
    }else{
        reject("Promise is Rejected ")
    }


});
hellopromise.then((msg) =>{
    console.log(msg + "World")

})
.catch((err) =>{
console.log(err);
})
