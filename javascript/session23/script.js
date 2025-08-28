// function addNewBook(callback){

// }

// function hof(){
//     return function(){
//         console.log("inner")
//     }
// }

// hof()()

// "use strict"
// let x = 12

// console.log(x)

// function my(a,b){

// }

// let y = 12
// let zs = 3



// function sum(num1, num2){
//     let result = num1 + num2
//     return result
// }


// const sum = (num1, num2) => {
//     let result = num1 + num2
//     return result
// }

// const pow =  (num1,  num2) =>  num1 **  num2

// console.log(pow(2,3))


// let numbers = [1,2,3,4,5,6,7,8,9]
// forEach + arrow function
// numbers.forEach(number => console.log(number))
// map + arrow function
// let newNumbers = numbers.map(number => number * 2)
// console.log(newNumbers)


// let numbers = [1,2,3,4,5,6,7,8,9]

// let copyNumbers = numbers
// copyNumbers.push(100)

// console.log(`numbers : ${numbers}`)
// console.log(`copyNumbers : ${copyNumbers}`)

// let copyNumbers = [...numbers]
// copyNumbers.push(100)

// console.log(`numbers : ${numbers}`)
// console.log(`copyNumbers : ${copyNumbers}`)
// console.log(...numbers)

// let nums1 = [1,2,3,4]
// let nums2 = [5,6,7,8]
// let allNums = [...nums1, 11, ...nums2]

// console.log(allNums)


// let nums = [1,2,3]

// function sum(a,b,c){
//     return a + b + c
// }

// console.log(sum(...nums))

// let user = {
//     id: 1,
//     name:'sara'
// }


// let newUser = {...user}
// newUser.age = 20
// console.log(newUser)
// console.log(user)

// function sum(a,...b){
//     console.log(a)
//     console.log(b)

//     let sumAllArgs = 0
//     let arr = Array.from(arguments)
//     console.log(arr)
// }

// sum(1,2,3,4,5)

// let user = [1, 'sara', 10]

// let [userId, userName, userAge] = user

// console.log(userId)

// const showNumbers = () => [1,2,3,4,5]
// let [a, , , b,c] = showNumbers()

// console.log(a, b, c)

// let names = `ali
// sara`

// console.log(names)

let numbers = [1,2,3,4,5]

let name = "sara"

let user = {
    id: 1,
    name: 'reza',
    age: 20
}

numbers.forEach(item => item * 2)

// for(let property of numbers){
//     console.log(property)
// }

for(let property in user){
    console.log(user[property])
}