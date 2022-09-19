const lm = document.getElementById("outputlm")
const hcf = document.getElementById("outputhf")
function calculate(){
    // Get value with document.getElementById("id").value
    
    hcf.innerHTML = "output answer hch"
    lm.innerHTML = "output answer lcm"
}



document.onkeydown = function (e) {
    console.log('key down');
    console.log(e);
    if(e.keyCode == 13){
        calculate();
    }
  };