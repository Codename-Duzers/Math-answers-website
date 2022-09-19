
function calculate(){
    // console.log(Math.pow(6, 2))
    let first = document.getElementById("fname").value;
    let second = document.getElementById("lname").value;
    if(second == ""){
      second = 2;
    }
    if(first == ""){
      document.getElementById("output").innerHTML = "Please set a number on the first input"
      return;
    }
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


document.onkeydown = function (e) {
   console.log('key down');
   console.log(e);
   if(e.keyCode == 13){
       calculate();
   }
 };
