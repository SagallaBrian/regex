let mystring1 = 'changed basewall';

// Postive lookahead 
// Matches any letter that appear before letter a 
let myregexp1 = /\w(?=a)/gi ; 
let matchchek1 = mystring1.match(myregexp1);
console.log(matchchek1);
// Outputs: [ 'h', 'b', 'w' ]

// non capturing group
let myregexp5 = /\w(?:a)/gi
let matchchek5 = mystring1.match(myregexp5);
console.log(matchchek5);
// Outputs: [ 'ha', 'ba', 'wa' ]


// Negaitve lookahead 
// Matches any letter that does not appear before letter a 
let myregexp2 = /\w(?!a)/gi ; 
let matchchek2 = mystring1.match(myregexp2);
console.log(matchchek2);
/* 
Outputs: 
[
  'c', 'a', 'n', 'g',
  'e', 'd', 'a', 's',
  'e', 'a', 'l', 'l' 
]
*/


// Postive lookbehind 
// Matches any letter that appear after letter a 
let myregexp3 = /(?<=a)\w/gi ; 
let matchchek3 = mystring1.match(myregexp3);
console.log(matchchek3);
// Outputs: [ 'n', 's', 'l' ] 


// Negaitve lookbehind 
// Matches any letter that does not appear after letter a 
let myregexp4 = /(?<!a)\w/gi ; 
let matchchek4 = mystring1.match(myregexp4);
console.log(matchchek4);
/* 
Outputs: 
[
  'c', 'h', 'a', 'g',
  'e', 'd', 'b', 'a',
  'e', 'w', 'a', 'l' 
]
*/