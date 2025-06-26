const btns = document.querySelectorAll('.btn')
btns.forEach(function(b){
    b.addEventListener('click', function(e){
        let color = e.target.dataset.color
        document.documentElement.style.setProperty('--theme-color',color)
    })
})