// const setAnimationBTN = document.querySelector('button')
// const divElem = document.querySelector('div')

// function setAnimation(){
//     divElem.style.animation = 'move 4s 3'
// }
// function animationStart(event){
//     divElem.style.backgroundColor = 'pink'
// }
// function animationEnd(event){
//     divElem.style.backgroundColor = 'lightgreen'
// }
function animationIteration(event){
    divElem.style.backgroundColor = 'red';
    divElem.style.color = "blue";
    // divElem.style.cssText = 'color:red; background-color:blue'
}

// setAnimationBTN.addEventListener('click', setAnimation)
// divElem.addEventListener('animationstart', animationStart)
// divElem.addEventListener('animationend', animationEnd)
// divElem.addEventListener('animationiteration', animationIteration)


// const rangeElem = document.querySelector('#range')
// const conatinerElem = document.querySelector('.container')
// rangeElem.addEventListener('change', function(event){
//     conatinerElem.style.filter = 'brightness(' + event.target.value + '%)'
// })


// const boxElem = document.querySelector('.box')
// console.log(boxElem.style.width)

// let boxElemStyles = getComputedStyle(boxElem)
// console.log(boxElemStyles.width)

let number = 12
try{

    console.log(number);
}
catch(erro){
    console.log(erro)
}
finally{
    console.log("end")
}