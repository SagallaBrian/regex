let mystring1 = 'oNbC' ; 

let myregexp1 = /([a-z]+)|([A-Z]+)/g ; 
let matchchek1 = mystring1.match(myregexp1);
console.log(matchchek1);
// Outputs: [ 'o', 'N', 'b', 'C' ]

let replchek1 = mystring1.replace(myregexp1, function (matchstr, grp1, grp2, iindex) {
    console.log(matchstr);
    console.log(grp1);
    console.log(grp2);
    console.log(iindex);
    console.log(' ');
})

/* 
o        
o        
undefined
0        

N        
undefined
N        
1        

b        
b        
undefined
2        

C        
undefined
C        
3 
*/
