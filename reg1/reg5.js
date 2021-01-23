let mystring1 = 'eat some cream seeaa' ; 
// ea? - indicates zero or one occurrences of the pattern left to it.
// ea+ - indicates one or more occurrences of the pattern left to it.
// ea* - indicates zero or more occurrences of the pattern left to it.
// ea  - this will look for a pattern of ea 


// e  - this will look for a pattern of ea
let myregexp1 = /ea/gi ; 
let matchchek1 = mystring1.match(myregexp1);
console.log(matchchek1);
// Outputs: [ 'ea', 'ea', 'ea' ] 


// ea+ - indicates one or more occurrences of the pattern left to it.
let myregexp2 = /ea+/gi ; 
let matchchek2 = mystring1.match(myregexp2);
console.log(matchchek2);
// Outputs: [ 'ea', 'ea', 'eaa' ]


// ea? - indicates zero or one occurrences of the pattern left to it.
let myregexp3 = /ea?/gi ;
let matchchek3 = mystring1.match(myregexp3);
console.log(matchchek3);
// Outputs: [ 'ea', 'e', 'ea', 'e', 'ea' ] 


// ea* - indicates zero or more occurrences of the pattern left to it. 
let myregexp4 = /ea*/gi ; 
let matchchek4 = mystring1.match(myregexp4);
console.log(matchchek4);
// Outputs: [ 'ea', 'e', 'ea', 'e', 'eaa' ]