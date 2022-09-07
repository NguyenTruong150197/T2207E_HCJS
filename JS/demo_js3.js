var x = 90;
var flag = false;

function demoEvent(){
    if(flag == false){
        var h = document.getElementById("heading");
        h.style.color = "red";
        setInterval(changeText, 20);
        flag = true;
    }
}

function changeText(){
    var h = document.getElementById("heading");
    h.style.transform = "rotate("+ x + "deg)";
    x++;
}

function inputSeach(obj){
    //var ix = document.getElementById(id);
    console.log("Seaching..." + obj.value);
}

function demmoEvent2(){
    //var ips = document.getElementsByTagName("input"); // array
    //var ips = document.getElementsByClassName("input-text");
    var ips = document.querySelectorAll("input.input-text[type=text]");
    for(var i = 0; i < ips.length; i++){
        ips[i].style.backgroundColor = "red";
    }
}