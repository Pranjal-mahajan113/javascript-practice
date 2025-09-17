a();
function a () {
    console.log("hello")
}

function add (a,b){
    return a+b;
}
console.log(add(1,20));

function number (num) {
    if(num % 2 ===0){
        console.log("even number")

    }else {
        console.log("odd");
    }
}
number(4);

const number1 = (num1) => {
    if(num1%2===0) {
        return "even";
    }
    else{
        return "odd";
    }

}
const result = number1(9);
console.log(`The number is ${result}`);