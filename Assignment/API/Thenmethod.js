//1.Crete Promise after 2 secons

let promise = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("Hello I am execuate After 2 seconds")
    },2000)
})
//2.Then Method 

promise.then((msg)=>{
    console.log(msg);

})
console.log("Start");
