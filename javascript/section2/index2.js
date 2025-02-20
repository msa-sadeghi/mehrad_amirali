// var products = [
//     { id: 1, name: "laptop", price: 2000 },
//     { id: 2, name: "iphone", price: 5000 },
//     { id: 3, name: "pc", price: 1000 },
//     { id: 4, name: "soundcard", price: 2000 },
//     { id: 5, name: "laptop", price: 20000 },
//   ];

//   while (true) {
//     let userChoice = prompt(
//       "Enter 1 to show all products names | 0 => exit\n 2 => price"
//     );
//     if (userChoice === "1") {
//       products.forEach(function (product) {
//         console.log(product.name);
//       });
//     } else if (userChoice === "0") {
//       break;
//     } else if (userChoice === "2") {
//       productName = prompt("Enter product name");

//       var res = products.filter(function (product) {
//         return product.name == productName;
//       });
//       res.forEach(function (r) {
//         console.log(r.price);
//       });
//     }
//   }


var allQuestions = [
    {id: 1, title: '2 + 2', answer: '4'},
    {id: 2, title: '2 * 4', answer: '8'},
    {id: 3, title: '7 ** 2', answer: '49'},
    {id: 4, title: '12 / 4', answer: '3'},
    {id: 5, title: '100 / 25', answer: '4'},
    {id: 6, title: '100 * 2', answer: '200'},
    {id: 7, title: 'Cpaital Of Iran?', answer: 'tehran'},
]

var score = 0
var mainAnswer = ''

