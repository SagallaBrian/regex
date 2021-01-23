// Matching a set of phone numbers 
let mystring1 = '1234567890';
let mystring2 = '123-456-7890';
let mystring3 = '123 456 7890';
let myregexp1 = /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/gi

let matchchek1 = mystring2.match(myregexp1);
console.log(matchchek1);
// Outputs: [ '123-456-7890' ]


let replchek1 =  mystring2.replace(myregexp1, function (mattch, p1, p2, p3, offset, strings) {
    console.log(mattch) ;
    // Outputs: 123-456-7890
    console.log(p1) ;
    // Outputs: 123
    console.log(p2) ;
    // Outputs: 456
    console.log(p3) ;
    // Outputs: 7890
    console.log(offset) ;
    // Outputs: 0
    console.log(strings) ;
    // Outputs: 123-456-7890
});