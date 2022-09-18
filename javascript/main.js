function calculate(){
    let firstone = document.getElementById("firstone").value
    let lastone = document.getElementById("lastone").value
    const root = document.getElementById("rootout")
    const power = document.getElementById("powerout")
    const lcmandhcf = document.getElementById("lcmhcf")

    root.innerHTML = "Root: " + nthroot(firstone, lastone)
    power.innerHTML = "Power: " + Math.pow(firstone, lastone)
    console.log(firstone, lastone)

    function nthroot(x, n){
        ng = n % 2;
        if((ng == 1) || x<0)
        x = -x;
        var r = Math.pow(x, 1 / n);
        n = Math.pow(r, n);

        if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
        return ng ? -r : r; 
    }

    
}
console.log(hcf(15, 30))
function hcf(a,b){
    if(a>b){
        [a,b] = [b,a]
    }
    while(a != 0 && b != 0){
        q = Math.floor(b/a);
        r = b - q*a;
        [r,a] = [a,b];
    }
    return  Math.max(a,b);
}

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