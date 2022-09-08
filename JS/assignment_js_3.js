function update1(){
    var http1 = new XMLHttpRequest();
    http1.onload = function (){
        var data = JSON.parse(this.responseText);
        console.log(data.main.temp);
        var t1 = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t1;
        var ct1 = data.name + ", " + data.sys.country;
        document.getElementById("city").innerText = ct1;
        var pr1 = data.main.pressure;
        document.getElementById("press").innerText = pr1;
    }
    var link1 = "https://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    http1.open("get", link1, true);
    http1.send();
}

function update2(){
    var http2 = new XMLHttpRequest();
    http2.onload = function (){
        var data = JSON.parse(this.responseText);
        console.log(data.main.temp);
        var t2 = data.main.temp;
        var x2 = document.getElementById("temp");
        x2.innerText = t2;
        var ct2 = data.name + ", " + data.sys.country;
        document.getElementById("city").innerText = ct2;
        var pr2 = data.main.pressure;
        document.getElementById("press").innerText = pr2;
    }
    var link2 = "https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    http2.open("get", link2, true);
    http2.send();
}

function update3(){
    var http3 = new XMLHttpRequest();
    http3.onload = function (){
        var data = JSON.parse(this.responseText);
        console.log(data.main.temp);
        var t3 = data.main.temp;
        var x3 = document.getElementById("temp");
        x3.innerText = t3;
        var ct3 = data.name + ", " + data.sys.country;
        document.getElementById("city").innerText = ct3;
        var pr3 = data.main.pressure;
        document.getElementById("press").innerText = pr3;
    }
    var link3 = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    http3.open("get", link3, true);
    http3.send();
}

function update4(){
    var http4 = new XMLHttpRequest();
    http4.onload = function (){
        var data = JSON.parse(this.responseText);
        console.log(data.main.temp);
        var t4 = data.main.temp;
        var x4 = document.getElementById("temp");
        x4.innerText = t4;
        var ct4 = data.name + ", " + data.sys.country;
        document.getElementById("city").innerText = ct4;
        var pr4 = data.main.pressure;
        document.getElementById("press").innerText = pr4;
    }
    var link4 = "https://api.openweathermap.org/data/2.5/weather?q=new york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    http4.open("get", link4, true);
    http4.send();
}

function update5(){
    var http5 = new XMLHttpRequest();
    http5.onload = function (){
        var data = JSON.parse(this.responseText);
        console.log(data.main.temp);
        var t5 = data.main.temp;
        var x5 = document.getElementById("temp");
        x5.innerText = t5;
        var ct5 = data.name + ", " + data.sys.country;
        document.getElementById("city").innerText = ct5;
        var pr5 = data.main.pressure;
        document.getElementById("press").innerText = pr5;
    }
    var link5 = "https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    http5.open("get", link5, true);
    http5.send();
}