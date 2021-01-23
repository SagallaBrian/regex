// Or operator |
let myregexp = /sheep|goat|cow/gi ; 
let mystring = 'chicken sheep cow geese with the turkey' ; // The input string
 
console.log("The test string: " + mystring);
 
let testcheck = myregexp.test(mystring);
console.log(testcheck);
// Outputs: true
 
let matchchek = mystring.match(myregexp);
console.log( matchchek);
// Outputs: [ 'sheep', 'cow' ]
 
let execcheck = myregexp.exec(mystring);
console.log(execcheck);
/**
 * Outputs: 
 * [
        'sheep',
        index: 8,
        input: 'chicken sheep cow geese with the turkey',  
        groups: undefined
    ]
 */
 
let searcheck = mystring.search(myregexp);
console.log(searcheck);
// Outputs: 8 
 
let rplacecheck = mystring.replace(myregexp, "");
console.log(rplacecheck);
// Outputs: chicken  geese with the turkey