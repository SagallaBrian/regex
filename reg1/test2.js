let myregexp = /(?<=1)0+(?=1)/g;
let num1 = 15;

let mystring = num1.toString(2);

let matchchek = mystring.match(myregexp);
console.log(matchchek);
if(matchchek == null)
{
    console.log('The expression not found');
}
else
{
    let lengths = matchchek.map(function (word) {
        return word.length
    })
    
    console.log(lengths);
    
    var maxnum = lengths.reduce(function (a, b) {
        return Math.max(a, b);
    });
    
    console.log(maxnum) ;
}

