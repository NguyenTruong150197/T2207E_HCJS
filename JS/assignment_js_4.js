function weather(){
   var xhttp = new XMLHttpRequest();
   xhttp.onload = function (){

   }
   var link = "http://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    xhttp.open("get", link, true);
   xhttp.send();
}