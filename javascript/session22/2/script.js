// let allLis = document.querySelectorAll('li') 
// const inputItem = document.querySelector('input')
// const ulElement = document.querySelector('ul')
// // allLis.forEach(function(li){
// //     li.addEventListener('click', function(event){
// //         event.target.remove()
// //     })
// // })

// ulElement.addEventListener('click', function(event){
//     event.target.remove()
// })


// inputItem.addEventListener('keypress', function(event){
//     if(event.key === 'Enter'){
//         let newLi = document.createElement('li')
//         newLi.innerHTML = event.target.value

//         ulElement.appendChild(newLi)
//         inputItem.value = ''
//     }
// })

// function blalala(){console.log("2")}

// console.log("1")
// setTimeout(blalala, 2000)
// console.log("3")


// const btn = document.querySelector('button')


// function click(){
//     console.log("clicked")
// }

// btn.addEventListener('click', click)

// function logger(f){
//     console.log("l")
//     f()
// }

// function another(){
//     console.log("another")
// }

// logger(another)

// let numbers  = [1,2,3,4,5,6]
// function my(n){
//     console.log(n)
// }
// numbers.map(my)



// function firstLog(){
//     console.log(1)
//     console.log(2)
// }

// function middleLog(f){
//     setTimeout(function(){
//         console.log(3)
//         f()
//     }, 3000)
// }

// function lastLog(){
//     console.log(4)
//     console.log(5)
// }

// firstLog()
// middleLog(lastLog)

let books = [
    {id:1, name:'book1', price:10000},
    {id:2, name:'book2', price:20000},
]

function addBooks(name, price, f){
    let newBook = {
        id:books.length + 1,
        name: name,
        price:price
    }
    setTimeout(function(){
        books.push(newBook)
        f()
    }, 4000)
}

function logbooks(){
    console.log(books)
}

addBooks('book3', 30000, logbooks)