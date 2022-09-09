function menu(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (){
        var data = JSON.parse(this.responseText);
        var list = data.data;
        for(var i = 0; i < list.length; i++){
            var name = list[i].name;
            var image = list[i].icon;
            //var str = "<li>" + name + "</li>";
            var str = `<li><img width="50" src="${image}"/>${name}</li>`;
            var ul = document.getElementById("menu");
            ul.innerHTML += str;
        }
    }
    var links = "https://foodgroup.herokuapp.com/api/menu";
    xhttp.open("get", links, true);
    xhttp.send();
}
menu();