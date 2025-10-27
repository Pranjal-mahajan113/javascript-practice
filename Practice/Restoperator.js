function add (...input) {
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    console.log(sum);
}
add(1,2);