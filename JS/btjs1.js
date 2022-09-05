var nu = 2;
var count = 0;

function chan(){
    var pr = document.getElementById("so_chan");
    pr.innerText += " " + nu;
    nu += 2;
    count++;
    if(count >= 10){
        clearInterval(f1);
    }
}

var f1 = setInterval(chan,2000);