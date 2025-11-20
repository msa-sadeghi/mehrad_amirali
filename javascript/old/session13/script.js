const inputElement = document.querySelector('input')
const spanElement = document.querySelector('.counter')
const inputMaxLength = inputElement.getAttribute('maxlength')

inputElement.addEventListener('keyup', function(){
    spanElement.innerHTML = inputMaxLength - inputElement.value.length
})