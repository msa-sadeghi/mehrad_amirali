let myDiv = document.getElementById("test");
console.log(myDiv);

let myDivs = document.getElementsByTagName("div");
console.log(myDivs);

let tables = document.getElementsByClassName("mytable");
console.log(tables);

let tables1 = document.querySelectorAll(".mytable");
console.log(tables1);

let myElem = document.querySelector("ul li");
console.log(myElem);

console.log(myElem.closest('.col2'))

let myUl = document.querySelector('ul.box')