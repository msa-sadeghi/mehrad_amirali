let passwordField = document.querySelector("#password-field");
let togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener('click',function(){
    if(passwordField.type === "text"){
        passwordField.type = "password";
        togglePassword.classList.remove("active")
    }else{
        passwordField.type = "text"
        togglePassword.classList.add("active")

    }
})