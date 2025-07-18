let string = "Hello"
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.length)
console.log(string.slice(1,3)) // Character on index 3 not included, only 1 and 2
console.log(string.slice(1)) 
console.log(string.replace('l','e')) // Only first occurrence gets relpaced

string[0] = "q" // Not possible, string remains the same without error. Strings are immutable
console.log(string)

