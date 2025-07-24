let a = prompt("Enter first number")
let b = prompt("Enter first number")
if (isNaN(a) || isNaN(b)) {
    throw TypeError("Please don't enter anything except a number")
}
else{
    console.log(`Sum is - ${parseInt(a)+parseInt(b)}`);
    
}

try{
    console.log(sum);
    
}catch(error){
    console.log("An error occurred");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    
    
}