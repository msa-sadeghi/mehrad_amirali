
let username = document.getElementsByClassName('username')[0]
let password = document.querySelector('.password')
let modal = document.querySelector('.modal')
function dataValidation(){
    let usernameValue = username.value
    let passwordValue = password.value
    if (usernameValue.length < 10 || passwordValue.length < 8){
        modal.style.display = 'inline'
        modal.style.background = 'red'
        modal.innerHTML = 'اطلاعات ناقص است'
    }
    else{
        modal.style.display = 'inline'
        modal.style.background = 'green'
        modal.innerHTML = 'اطلاعات کامل است'
    }
    setTimeout(function(){
            modal.style.display = 'none'
    }, 3000)
}


پروژه قبلی (فرم) را در نظر بگیرید

طوری پیاده سازی کنید که به محض شروع تایپ کاربر پیغام خطا یا صحت اطلاعات را در زیر همان اینپوت نمایش دهد

اینپوت یوزرنیم باید حداقل 12 کاراکتر و پسورد باید حداقل 8 کاراکتر داشته باشد