// Write a regex pattern that checks if a string begins with http:// or https://
let mystring1 = "http://wwwkomplab.com";
let myregexp1 = /^https?\:\/\//gi

let matchchek1 = mystring1.match(myregexp1);
console.log(matchchek1);
// Outputs: [ 'http://' ]   

let testchek1 = myregexp1.test(mystring1);
console.log(testchek1);
// Outputs: true

// Write a regex pattern that matches e-mail addresses 

let mystring2 = "vrl@domman.com";
let myregexp2 = /^[a-z]+([a-z0-9_.]+)@([a-z]+)\.([a-z]{3})$/gi

let matchchek2 = mystring2.match(myregexp2);
console.log(matchchek2);
// Outputs: [ 'vrl@domman.com' ]

let testchek2 = myregexp2.test(mystring2);
console.log(testchek2);
// Outputs: true

/**
 * Test emails 
 * https://gist.github.com/cjaoude/fd9910626629b53c4d25 
 * @gmail.com
 * 4@gmail.com
 * how@.com
 * how@gmail
 * h@i.com
 * 4@gmail.com
 * how5@gmail.com
 * john@aol...com
 * how@@gmail.com
 * t@gmail.com
 * mc@gmal.com
 * plainaddress
 * email.example.com
 */