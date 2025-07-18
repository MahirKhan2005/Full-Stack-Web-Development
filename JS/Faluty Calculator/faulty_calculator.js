/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

let first_num = prompt("Enter first number ")
let second_num = prompt("Enter second number ")
let operator = prompt("Enter operator - ")
first_num = Number(first_num)
second_num = Number(second_num)

// 10% condition - works only 10% of the time
if (Math.random()<0.1) {
    if (operator=='+'){
        console.log(first_num - second_num)
    }
    else if (operator=='-'){
        console.log(first_num / second_num)
    }
    else if (operator=='*'){
        console.log(first_num + second_num)
    }
    else if (operator=='/'){
        console.log(first_num ** second_num)
    }
}
else{
    if (operator=='+'){
        console.log(first_num + second_num)
    }
    else if (operator=='-'){
        console.log(first_num - second_num)
    }
    else if (operator=='*'){
        console.log(first_num * second_num)
    }
    else if (operator=='/'){
        console.log(first_num / second_num)
    }
}
