let mystring1 = 'the geese' ; 

// e? - indicates zero or one occurrences
// e+ - indicates one or more occurrences
// e* - indicates zero or more occurrences 
// e  - this will look for a pattern of e



// e  - this will look for a pattern of e
let myregexp1 = /e/gi ; 
let matchchek1 = mystring1.match(myregexp1);
console.log(matchchek1);
// Outputs:[ 'e', 'e', 'e', 'e' ]


// e+ - indicates one or more occurrences
let myregexp2 = /e+/gi ; 
let matchchek2 = mystring1.match(myregexp2);
console.log(matchchek2);
// Outputs: [ 'e', 'ee', 'e' ] 


// e? - indicates zero or one occurrences of e 
let myregexp3 = /e?/gi ; 
let matchchek3 = mystring1.match(myregexp3);
console.log(matchchek3);
/*
[
  '',  '',  'e', '',  '',
  'e', 'e', '',  'e', '' 
] 
*/


// e* - indicates zero or more occurrences 
let myregexp4 = /e*/gi ; 
let matchchek4 = mystring1.match(myregexp4);
console.log(matchchek4);
/* 
Outputs: 
[
  '', '',   'e', '',     
  '', 'ee', '',  'e',    
  ''
]
*/