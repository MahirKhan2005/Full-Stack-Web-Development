// IIFE - Immediately Invoked Function Expression
(()=>{
    let name = "Mahir"
    console.log("Hello", name);
})();

// Destructuring
// ... is spread/rest operator
let [a,b,c, ...rest] = [1,2,3,4,5,6,7,8,9]
console.log(a,b,c,rest);
