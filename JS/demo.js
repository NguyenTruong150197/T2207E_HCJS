var x;
x = 10;
x = "xin chao cac ban";
x = 3.14;
var y = 20;
var z = x + y; // z = 23.14
x = "hello";
var k = x + y;
// k = hello20
// hello + 10 -> hello10
// 10 + hello -> 10hello
// hello + world -> helloworld
console.log(k);
var t = true; // false
for(var i = 0; i < 10; i++){
    console.log("i = " + i);
}
var ar = [];
ar[0] = 1;
ar.push(10);
ar.push("hello");
// duyệt mảng theo chỉ mục (index)
for(var i = 0; i < ar.length; i++){
    console.log(ar[i]);
}
// duyệt mảng theo kiểu xét từng phân tử = foreach
ar.map(xyz => {
    console.log(xyz);
});
var tk = tinhtong(5, 3);
var tk2 = tinhtong("hello", 10);

function tinhtong(a,b){
    return a + b;
}

console.log(tk);
console.log(tk2);

function demo() {
    console.log("Hello everybody...");
}

//setTimeout(demo, 1000); // sau thời gian 1000 mili giây nó sẽ chạy hàm demo  (1000 milisecond = 1 second)

console.log("ABCXYZ...");
var n = 10;
function countdown() {
    var xyz = document.getElementById("head");
    xyz.innerText = n;
    n--;
    if(n < 0){
        clearInterval(si);
    }
}
var si = setInterval(countdown, 1000); // sau một khoảng thời gian thì chạy hàm 1 lần, chạy liên tục
