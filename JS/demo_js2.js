var obj = {
    name: "Nam",
    age: 18,
    tel: "+84987654321",
    girlFriend: ["Nguyễn Vân Anh", "Lê Ngọc Anh"],
    eat: function (){
        console.log(this.name + " đang ăn mì tôm...");
    }
};
console.log(obj.tel);
obj.eat();
obj.name = "Huy";
obj.eat();

var a = document.getElementById("abc");
console.log(a.innerText);
var x = 15;
function changeText(){
    //a.innerText = "Xin chào các bạn!";
    //a.innerHTML += x + "<i>Xin chào các bạn!</i>";
    a.style.fontSize = x + "px";
    a.style.color = "blue";
    x++;
    a.classList.add("classnaodo");
    a.style.transform = "rotate("+ x +"deg)";
}
setInterval(changeText, 100);