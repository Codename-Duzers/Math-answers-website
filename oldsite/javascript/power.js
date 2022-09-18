function calculate(){
    // console.log(Math.pow(6, 2))
    console.log(Math.pow(document.getElementById("base").value, document.getElementById("exponent").value))
    document.getElementById("output").innerHTML = Math.pow(document.getElementById("base").value, document.getElementById("exponent").value);
    
}
