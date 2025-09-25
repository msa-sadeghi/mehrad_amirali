const registerForm = document.querySelector('.register-form')
const nameInput = document.getElementById('name')
const passwordInput = document.getElementById('password')
const emailInput = document.getElementById('email')

let db = null
let objectStore = null

window.addEventListener("load", () => {
    let db = indexedDB.open('mytest1', 3)
    db.addEventListener('error', (error)=>{
        // console.warn('Error', error)
    })
    db.addEventListener('success', (ev)=>{
        db = ev.target.result
        // console.log('Success', ev.target.result)
    })

    db.addEventListener('upgradeneeded', (event)=>{
        db = event.target.result
        if(!db.objectStoreNames.contains('users')){
            objectStore = db.createObjectStore('users')
        }
    })
})

registerForm.addEventListener('submit', event => {
    event.preventDefault()
    console.log(db)
    let newUser = {
        userID : Math.floor(Math.random() * 99),
        name: nameInput.value,
        password : passwordInput.value,
        email:emailInput.value
    }

    let tx = db.transaction('users', 'readwrite')
    let store = tx.objectStore('users')
    let request = store.add(newUser)
})