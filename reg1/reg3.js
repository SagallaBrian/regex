// Wildcard period
let mystring = 'shoes sheep cow shops shopp turkey' ; // The input string

let myregexp = /sh./gi ; 
// Return sh and any one character after sh 
let testcheck = myregexp.test(mystring);
console.log(testcheck);
// Outputs: true
 
let matchchek = mystring.match(myregexp);
console.log( matchchek);
// Outputs: [ 'sho', 'she', 'sho', 'sho' ]

let myregexp1a = /.p/gi ; 
// Return any character that occur before letter p
let testcheck1a = myregexp1a.test(mystring);
console.log(testcheck1a);
// Outputs: true
 
let matchchek1a = mystring.match(myregexp1a);
console.log(matchchek1a);
// Outputs: [ 'ep', 'op', 'op' ]

// Single characters with multiple possibilites 
// square brackets can be used as or operator for single 
// characters only 
let mystring2 = 'sap sup sep sip sop saap serp';
let myregexp2 = /s[aeiou]p/gi ; 

let testcheck2 = myregexp2.test(mystring2);
console.log(testcheck2);
// Outputs: true
 
let matchchek2 = mystring2.match(myregexp2);
console.log( matchchek2);
// Outputs:[ 'sap', 'sup', 'sep', 'sip', 'sop' ]

// Get vowels  
let mystring3 = 'The quick brown fox jmuumps over the lazy dog';
let myregexp3 = /[aeiou]/gi ; 

let testcheck3 = myregexp3.test(mystring3);
console.log(testcheck3);
// Outputs: true
 
let matchchek3 = mystring3.match(myregexp3);
console.log( matchchek3);
/* 
Outputs: 
[
  'e', 'u', 'i', 'o',     
  'o', 'u', 'u', 'o',     
  'e', 'e', 'a', 'o'      
]
*/
// Get everything that is not a vowel  
let mystring4 = 'The quick brownthe lazy dog';
let myregexp4 = /[^aeiou]/gi ; 

let testcheck4 = myregexp4.test(mystring4);
console.log(testcheck4);
// Outputs: true
 
let matchchek4 = mystring4.match(myregexp4);
console.log(matchchek4);
/* 
Outputs: 
[
  'T', 'h', ' ', 'q', 'c',
  'k', ' ', 'b', 'r', 'w',
  'n', 't', 'h', ' ', 'l',
  'z', 'y', ' ', 'd', 'g' 
]
*/


// Get letters and numbers   
let mystring5 = 'There are 450';
let myregexp5 = /[a-z0-9]/gi ; 

let testcheck5 = myregexp5.test(mystring5);
console.log(testcheck5);
// Outputs: true
 
let matchchek5 = mystring5.match(myregexp5);
console.log(matchchek5);
/*
Outputs: 
[
  'T', 'h', 'e', 'r',     
  'e', 'a', 'r', 'e',     
  '4', '5', '0'
] 
*/

