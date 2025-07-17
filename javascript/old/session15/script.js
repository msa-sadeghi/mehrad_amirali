// function insert(){
//     localStorage.setItem('name', 'sara')
// }
// function get(){
//     let name = localStorage.getItem('name')
//     console.log(name)
// }

// function clearData(){
//     localStorage.clear()
// }

const switchElem = document.querySelector('.switch')
switchElem.addEventListener('click', function(){
    document.body.classList.toggle('dark')
    if (document.body.className.includes('dark')){
        localStorage.setItem('theme', 'dark')
    }else{
        localStorage.setItem('theme', 'light')
    }
})

window.onload = function(){
    let t = localStorage.getItem('theme')
    if(t === 'dark'){
        document.body.classList.add('dark')
    }
}
// window.onload = ()=>{
//     let t = localStorage.getItem('theme')
//     if(t === 'dark'){
//         document.body.classList.add('dark')
//     }
// }