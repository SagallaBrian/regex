// Usage of e+, e e* and e?

let mystring1 = 'eat street teach feeel seeeaaa' ; 


let myregexp1 = /e+a/gi ; 
let matchchek1 = mystring1.match(myregexp1);
console.log(matchchek1);
// Outputs: [ 'ea', 'ea', 'eeea' ]


let myregexp2 = /e*a/gi ; 
let matchchek2 = mystring1.match(myregexp2);
console.log(matchchek2);
// Outputs: [ 'ea', 'ea', 'eeea', 'a', 'a' ]

let mystring2 = 'systematicaly'

let myregexp3 = /s[a-z]*y/gi
let matchchek3 = mystring2.match(myregexp3);
console.log(matchchek3);
// Outputs: [ 'systematicaly' ]

let myregexp4 = /s[a-z]y/gi
let matchchek4 = mystring2.match(myregexp4);
console.log(matchchek4);
// Outputs: null

let myregexp5 = /s[a-z]+y/gi
let matchchek5 = mystring2.match(myregexp5);
console.log(matchchek5);
// Outputs: [ 'systematicaly' ]

let myregexp6 = /s[a-z]?y/gi
let matchchek6 = mystring2.match(myregexp6);
console.log(matchchek6);
// Outputs:  'sy' ]

let myregexp7 = /s[a-z]*?y/gi
let matchchek7 = mystring2.match(myregexp7);
console.log(matchchek7);
// Outputs: [ 'sy', 'stematicaly' ]


let mystring3 = "<h1>Regex in JavaScript </h1>";
let myregexp8 = /<.*?>/gi
let matchchek8 = mystring3.match(myregexp8);
console.log(matchchek8);
// Outputs: [ '<h1>', '</h1>' ]

