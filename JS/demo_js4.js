function update(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        //console.log(this.responseText);
        //convert to object of js (chuyển thành một đối tượng của js)
        var data = JSON.parse(this.responseText);
        console.log(data.main.temp);
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t;
        // var t1 = data.name;
        // var x2 = document.getElementById("city");
        // var t2 = data.sys.country;
        // x2.innerText = t1 + ", " + t2;
        var ct = data.name + ", " + data.sys.country;
        document.getElementById("city").innerText = ct;
        var pr = data.main.pressure;
        document.getElementById("press").innerText = pr;
    }
    var link = "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("get", link, true);
    xhttp.send();
}