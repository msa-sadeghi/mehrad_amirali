const mainElement = document.getElementById('mainNav')
const logoImg = document.getElementsByTagName('img')[0]


document.addEventListener('scroll', function(){
    if (document.documentElement.scrollTop> 0){
        logoImg.style.height = '64px'
        mainElement.classList.add('bg-black')
        mainElement.classList.add('txt-white')
    }
    else{
        logoImg.style.height = '85px'
        mainElement.classList.remove('bg-black')
        mainElement.classList.remove('txt-white')
    }
})