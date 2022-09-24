function calculate(){
    let firstone = document.getElementById("firstone").value
    let lastone = document.getElementById("lastone").value
    const root = document.getElementById("rootout")
    const power = document.getElementById("powerout")
    const hcm = document.getElementById("hcf")
    const lcm = document.getElementById("lcm")

    root.innerHTML = "Root: " + nthroot(firstone, lastone)
    power.innerHTML = "Power: " + Math.pow(firstone, lastone)
    hcm.innerHTML = "HCF: " + hcf(firstone, lastone)
    lcm.innerHTML = "LCM: " + firstone*lastone/hcf(firstone,lastone);
    console.log(firstone, lastone)

    

    
}

function nthroot(x, n){
    ng = n % 2;
    if((ng == 1) || x<0)
    x = -x;
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);

    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
    return ng ? -r : r; 
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

console.log(hcf(30, 15))
function oldsite(){
    location = "/oldsite/index.html"
}

document.onkeydown = function (e) {
    console.log('key down');
    console.log(e);
    if(e.keyCode == 13){
        calculate();
    }
  };