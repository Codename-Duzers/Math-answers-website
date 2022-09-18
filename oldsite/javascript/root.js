
function calculate(){
    // console.log(Math.pow(6, 2))
    let first = document.getElementById("fname").value;
    let second = document.getElementById("lname").value;
    document.getElementById("output").innerHTML = nthroot(first, second);
    
}
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-26.php
function nthroot(x, n){
 ng = n % 2;
 if((ng == 1) || x<0)
    x = -x;
 var r = Math.pow(x, 1 / n);
 n = Math.pow(r, n);

 if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
   return ng ? -r : r; 
}

