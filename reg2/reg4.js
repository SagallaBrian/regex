// Matching ranges of numbers 
let mystring1 = "0123456789 17";

// Range 0 -9
let myregexp1 = /[0-9]/gi
let matchchek1 = mystring1.match(myregexp1);
console.log(matchchek1);
/* 
Outputs: 
[
  '0', '1', '2', '3',
  '4', '5', '6', '7',
  '8', '9', '1', '7' 
]
*/

// Range 00 -99
// let myregexp2 = /[0-9][0-9]/gi // or
let myregexp2 = /[0-9]{2}/gi
let matchchek2 = mystring1.match(myregexp2);
console.log(matchchek2);
// Outputs: [ '01', '23', '45', '67', '89', '17' ]

// Range 000 -999
let myregexp3 = /[0-9][0-9][0-9]/gi
let matchchek3 = mystring1.match(myregexp3);
console.log(matchchek3);
// Outputs: [ '012', '345', '678' ]

// Range 10 -19
let myregexp4 = /1[1-9]/gi
let matchchek4 = mystring1.match(myregexp4);
console.log(matchchek4);
// Outputs: [ '12', '17' ]

// Range 00 -15
let myregexp5 = /0[1-9]|1[1-5]/gi
let matchchek5 = mystring1.match(myregexp5);
console.log(matchchek5);
// Outputs: [ '01' ]

// Range 000 - 255 
let mystring2 = `
128
255
260
1
29
12
121`;

let myregexp6  = /^([01][0-9][0-9]|2[0-4][0-9]|25[0-5])$/gim
let matchchek6 = mystring2.match(myregexp6);
console.log(matchchek6);
// Outputs: [ '128', '255', '121' ] ;

/**
 *  Noter when matching 0 - 200 and not 000 - 200 the carret(^) symobol 
 and the dollar symbols are $  necessary including the multiline flag
 */

// Range 0 - 255 
let myregexp7 = /^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$/gim
let matchchek7 = mystring2.match(myregexp7);
console.log(matchchek7);
// Outputs: [ '128', '255', '1', '29', '12', '121' ]

// Range 0 -127 

let myregexp8 = /^([0]?[0-9]?[0-9]|1[01][0-9]|12[0-7])$/gim
let matchchek8 = mystring2.match(myregexp8);
console.log(matchchek8);
// Outputs: [ '1', '29', '12', '121' ]

// Range 0 - 59 
let myregexp9 = /^([0-5]?[0-9])$/gim
let matchchek9 = mystring2.match(myregexp9);
console.log(matchchek9);
// Outputs: [ '1', '29', '12' ]

// Range 000 - 999 
let myregexpa = /^([0-9]){3}$/gim
let matchcheka = mystring2.match(myregexpa);
console.log(matchcheka);
// Outputs: [ '128', '255', '260', '121' ]