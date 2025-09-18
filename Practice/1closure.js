function greet(name) {   //  "name" is a parameter   Outer function
  return function () {  //  Inner function
    console.log("hello " + name + "!");
  };
}

const greetJohn = greet("john"); //  "john" is the argument
greetJohn(); // Output: hello john!


// =================Q 2.===============================


function secretmessage (msg) {
  return function private(){
    console.log(`The secret is ${msg}`);
  }
 
}
const secret = secretmessage("powerfull");
secret();


// =================Q 3.===============================
function createcart(){
  let items = [];
   return{
    additem: function(item){
      items.push(item);
      console.log( item + " Add to cart ");

    },
    getitem:function (){
      return items;
    }

   };
}
const cart = createcart();
cart.additem("shoes");
cart.additem("T-shirt");
console.log(cart.getitem());

