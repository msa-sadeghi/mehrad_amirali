// var users = [
//     {id:1, name:'ali',password : '12345', age:21},
//     {id:2, name:'amin',password : '12345', age:12},
//     {id:3, name:'nikan',password : '12345', age:13},
//     {id:4, name:'sara', password : '12345',age:25},
// ]


// var username = prompt("enter the username")
// var x = users.find(function(user){
//     return user.name === username
// })

// if(x === undefined){
//     console.log("user not founded");
    
// }else{
//     console.log("your password : " + x.password)
// }

// var i = 10
// var timer = setInterval(
//     function(){
//     if (i === 0){
//         console.log("Game Over");
//         clearInterval(timer)
//     }
//     console.log(i)
//     i--;
//         }, 
//     1000
// )


// یک تایمر پیاده سازی کنید

// به طوری که از کاربر میزان ثانیه و دقیقه را دریافت کرده و تایمری را با اطلاعات وارد شده استارت بزنید

// و زمانی که تایمر تمام شد، پیغام مناسبی نمایش داده شود


// truthy falsy

// x = 10
// while x < 20

var userName = prompt("enter the username:")

if(!userName){
    console.log("username must be anything")
}