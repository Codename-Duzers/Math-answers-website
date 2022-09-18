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



function oldsite(){
    location = "/oldsite/index.html"
}