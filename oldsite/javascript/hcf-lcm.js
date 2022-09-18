function calculate(){
    // Get value with document.getElementById("id").value
    
    document.getElementById("output").innerHTML = "output answer"
}



document.onkeydown = function (e) {
    console.log('key down');
    console.log(e);
    if(e.keyCode == 13){
        calculate();
    }
  };