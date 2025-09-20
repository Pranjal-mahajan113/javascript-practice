// console.log("Start");
// setTimeout (function cb(){
//     console.log("callback");
// },5000);
// console.log("end");

// const ticket = new Promise(function (resolve,reject){
//     const isboarded = false;
//     if(isboarded){
//         resolve("done")
//     }else{
//         reject("cancle")
//     }
// });

// setTimeout(function (){
//     console.log("later 3");
// },3000);
// console.log("hello");

function getCheese(callback) {
  setTimeout(() => {
    const cheese = "🍕";
    console.log("Here is cheese", cheese);
    callback(cheese);
  }, 2000);
}
function makedough(cheese, callback) {
  setTimeout(() => {
    const dough = cheese + "🟠";
    console.log("Here is dough", dough);
    callback(dough);
  }, 2000);
}

function getpizza(dough ,callback) {
    setTimeout(()=>{
        const pizza = dough  + "🍰";
        console.log("here is pizza" , pizza);
        callback(pizza);
    });
}

getCheese((cheese) => {
  makedough(cheese, (dough) => {
   getpizza(dough,(pizza) =>{
    console.log("Yay ! got my pizza" ,pizza);
   })
  });
});



// pizza ->dough ->cheese
