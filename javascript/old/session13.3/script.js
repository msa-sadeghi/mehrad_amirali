const button = document.querySelector('button')
const modalparent = document.querySelector(".modal-parent")
const x = document.querySelector('.X')
const sectionElement = document.querySelector('section')
function  showModal(){
    modalparent.style.display = 'block'
    sectionElement.style.filter = 'blur(10px)'
    button.blur()
}
function  hideModal(){
    modalparent.style.display = 'none'
    sectionElement.style.filter = 'blur(0px)'
}



button.addEventListener('click', showModal)
x.addEventListener('click', hideModal)