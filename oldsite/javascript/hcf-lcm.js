function calculate(){
    // Get value with document.getElementById("id").value
    let firstone = document.getElementById("hfc").value
    let lastone = document.getElementById("lcm").value
    document.getElementById("outputhf").innerHTML = "HFC: "+hcf(firstone, lastone)
    document.getElementById("outputlm").innerHTML = "LCM: " +firstone*lastone/hcf(firstone,lastone)
}
function hcf(a,b){
    if(a>b){
        [a,b] = [b,a]
    }
    while(a!=0 && b!=0){
        [a,b] = [a,b-a]    
        if(a>b){
            [a,b] = [b,a]
        }
    }
    console.log(a,b)
    return Math.max(a,b);
}



document.onkeydown = function (e) {
    console.log('key down');
    console.log(e);
    if(e.keyCode == 13){
        calculate();
    }
  };