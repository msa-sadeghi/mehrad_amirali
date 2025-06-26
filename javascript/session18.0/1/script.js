let btn = document.querySelector('button')

btn.addEventListener('click', function(){
    document.documentElement.style.setProperty('--test-color', 'blue')
})