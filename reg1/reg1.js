// JavaScript Regex 

// The format of regex is shown as follows:  /patern/flags
/** Examples of flags 
 * g - global flag 
 * i - case  insensitivity flag 
 * m -multi line flag 
 * s - single line flag
 */
let myregexp = /ee/gi ; // This is the pattern that is to be tested
let mystring = 'Do you see the geese with the sheep' ; // The input string

// It is important to note that the test method is used as:
// regxepr.test(test_String) while the match method is 
// used as : test_String.match(regxepr);
 
console.log("The test string: " + mystring);
 
let testcheck = myregexp.test(mystring);
console.log(testcheck);
// Outputs: true
 
let matchchek = mystring.match(myregexp);
console.log( matchchek);
// Outputs: [ 'ee', 'ee', 'ee' ]
 
let execcheck = myregexp.exec(mystring);
console.log(execcheck);
/**
 * Outputs: 
 * [
        'ee',
        index: 8,
        input: 'Do you see the geese with the sheep',     
        groups: undefined
    ]
 */
 
let searcheck = mystring.search(myregexp);
console.log(searcheck);
// Outputs: 8 
// This is the index where the search regex is true 
 
let rplacecheck = mystring.replace(myregexp, "");
console.log(rplacecheck);
// Outputs: Do you s the gse with the shp