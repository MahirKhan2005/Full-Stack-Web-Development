let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    console.log(value)
}

arr.forEach((value, index, array) => {
    console.log(value, index, array)
})

let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        console.log(key,value)
    }
}

for (const value of arr) {
    console.log(value)
}

arr.map(e=>{
    console.log(e**2)
})

let evens = arr.filter(num=> num%2==0)
console.log(evens)

let multiply = (a,b)=>{
    return a*b
}

console.log(arr.reduce(multiply))