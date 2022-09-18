function calculate(){
    // console.log(Math.pow(6, 2))
    console.log(Math.pow(document.getElementById("base").value, document.getElementById("exponent").value))
    document.getElementById("output").innerHTML = Math.pow(document.getElementById("base").value, document.getElementById("exponent").value);
    
}


document.onkeydown = function (e) {
    console.log('key down');
    console.log(e);
    if(e.keyCode == 13){
        calculate();
    }
  };