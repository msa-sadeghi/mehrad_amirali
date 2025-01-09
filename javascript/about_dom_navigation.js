let body = document.body;
// console.log(body);
let fifthChild = body.childNodes[5];
// console.log(fifthChild);

let ul = fifthChild.childNodes[1];
// console.log(ul);

// for (let i = 0; i < fifthChild.childNodes.length; i++) {
//   console.log(fifthChild.childNodes[i]);
// }

console.log(ul.nextSibling);
console.log(ul.previousSibling);

console.log(table1.tBodies[0].rows);
