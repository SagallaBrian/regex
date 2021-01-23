// Binary gap
// Gets the zeros between ones in a binary digit 
/**
 * list of interesting numbers 
 * 13125 4805 9612 17094 12441 280641 6595 496
 */
let num1 =17094 ;
let mystring1 = num1.toString(2); 
console.log(mystring1)
// Outputs 100001011000110 

let myregexp1 =/(?<=1)0+(?=1)/gi
let matchchek1 = mystring1.match(myregexp1);
console.log(matchchek1);
// Outputs: [ '0000', '0', '000' ]
