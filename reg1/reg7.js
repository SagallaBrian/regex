// \s Matches any whitespace character (spaces, tabs, line breaks).
// \S is the negation of s
 
// \w  Matches any word character (alphanumeric & underscore). Equivalent to [A-Za-z0-9_] 
// \W is the negation of w 
 
// \d Matches any digit character (0-9). Equivalent to [0-9] 
// \D is the negation of d
 
let mystring1 = 'egg 30eggs @ sh45.90 per egg only'; 

let myregexp1 = /\w/gi
let matchchek1 = mystring1.match(myregexp1);
console.log(matchchek1);
/* Outputs: 
[
  'e', 'g', 'g', '3', '0', 'e',
  'g', 'g', 's', 's', 'h', '4',
  '5', '9', '0', 'p', 'e', 'r',
  'e', 'g', 'g', 'o', 'n', 'l',
  'y'
]
*/

// \W is the negation of w 
let myregexp2 = /\W/gi
let matchchek2 = mystring1.match(myregexp2);
console.log(matchchek2);
/*
Outputs: 
[
  ' ', ' ', '@',
  ' ', '.', ' ',
  ' ', ' '
]
*/

let myregexp3 = /\d/gi
let matchchek3 = mystring1.match(myregexp3);
console.log(matchchek3);
// Outputs: [ '3', '0', '4', '5', '9', '0' ]

// \D is the negation of d
let myregexp4 = /\D/gi
let matchchek4 = mystring1.match(myregexp4);
console.log(matchchek4);
/*
Outputs: 
[
  'e', 'g', 'g', ' ', 'e', 'g',
  'g', 's', ' ', '@', ' ', 's',
  'h', '.', ' ', 'p', 'e', 'r',
  ' ', 'e', 'g', 'g', ' ', 'o',
  'n', 'l', 'y'
] 
*/


let myregexp5 = /\s/gi
let matchchek5 = mystring1.match(myregexp5);
console.log(matchchek5);
// Outputs: [ ' ', ' ', ' ', ' ', ' ', ' ' ] 

// \D is the negation of d
let myregexp6 = /\S/gi
let matchchek6 = mystring1.match(myregexp6);
console.log(matchchek6);
 /*
[
  'e', 'g', 'g', '3', '0', 'e', 
  'g', 'g', 's', '@', 's', 'h', 
  '4', '5', '.', '9', '0', 'p',
  'e', 'r', 'e', 'g', 'g', 'o',
  'n', 'l', 'y'
] 
*/
// When the carret sign ^ is used outside the square brackets
// it indicates only search at the beginning of the sentense 
let myregexpc = /^\w+/gi
let matchchekc = mystring1.match(myregexpc);
console.log(matchchekc);
// Outputs: [ 'egg' ]

// The dollar sign indicates the character at the end of the sentense
let myregexpd = /\w+$/gi
let matchchekd = mystring1.match(myregexpd);
console.log(matchchekd);
// Outputs: [ 'only' ]

// More examples 
// Words of 3 characters or more 
let myregexp7 = /\w{3,}/gi
let matchchek7 = mystring1.match(myregexp7);
console.log(matchchek7);
// Outputs: [ 'egg', '30eggs', 'sh45', 'per', 'egg', 'only' ]


// Parentheses
// using parentheses to perform or operation 
let mystring2 = 'screem blend speak spear ';
let myregexp8 = /(cl|bl|sp)\w+/gi
let matchchek8 = mystring2.match(myregexp8);
console.log(matchchek8);
// Outputs: [ 'blend', 'speak', 'spear' ]


// Temp
let mystring3 = 'seesheeepsfrommmtoown';
let myregexp9 = /(.)\1+/gi
let matchchek9 = mystring3.match(myregexp9);
console.log(matchchek9);
// Outputs: [ 'ee', 'eee', 'mmm', 'oo' ]

let myregexpa = /(e|o){2,}/gi
let matchcheka = mystring3.match(myregexpa);
console.log(matchcheka);
// Outputs: [ 'ee', 'eee', 'oo' ]

let myregexpb = /([a-z])\1+/gi 
let matchchekb = mystring3.match(myregexpb);
console.log(matchchekb);
// Outputs: [ 'ee', 'eee', 'mmm', 'oo' ]