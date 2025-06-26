const titleElement = document.querySelector('.title')


document.addEventListener('keyup', function(e){
    let keyElement = document.getElementById(e.key.toLocaleUpperCase())
    keyElement.classList.add('hit')
    keyElement.addEventListener('animationend', function(){
        keyElement.classList.remove('hit')
    })
    titleElement.innerHTML += e.key
})