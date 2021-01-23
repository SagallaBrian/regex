// Write a regex pattern that matches a Valid IPv4 Addresses
let mystring1 = `
127.0.0.1
127.0.00.1
255.255.255.0
121`;
let myregexp1 = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/gim ;
let matchchek1 = mystring1.match(myregexp1);
console.log(matchchek1);
// Outputs: [ '127.0.0.1', '255.255.255.0' ]  

// Write a regex pattern to check for valid visa card numbers 
// 13 or 16 digits, starting with 4

let mystring2 = `
4454545456789
4789090908656876
41552798457
4948293
121`;
let myregexp2 = /^4[0-9]{12}(?:[0-9]{3})?$/gim  // Standard method
// let myregexp2 = /^4([0-9]{12})([0-9]{3})?$/gim // my method
let matchchek2 = mystring2.match(myregexp2);
console.log(matchchek2);
// Outputs: [ '4454545456789', '4789090908656876' ]