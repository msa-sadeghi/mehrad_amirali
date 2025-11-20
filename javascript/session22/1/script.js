let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];


let autoComWrapper = document.querySelector('.search-input')
let autoComBox = document.querySelector('.autocom-box')
let inputBox = document.querySelector('input')

inputBox.addEventListener('keyup', function(){
    let searchVal = inputBox.value

    if(searchVal){
        autoComWrapper.classList.add('active')

        let filteredWords = suggestions.filter(function(word){
            return word.toLocaleLowerCase().startsWith(searchVal.toLocaleLowerCase())
        })

        suggestionWordsGenerator(filteredWords)

    }else{
        autoComWrapper.classList.remove('active')

    }

})

function suggestionWordsGenerator(words){
    let listItemArray = words.map(function(word){
        return '<li>' + word +'</li>'
    })
    let result 
    result = listItemArray.join('')

    
    autoComBox.innerHTML = result
    let allListItems = autoComBox.querySelectorAll('li')
    allListItems.forEach(function(item){
        item.addEventListener('click', function(event){
            inputBox.value  =  event.target.textContent
            autoComWrapper.classList.remove('active')
        })
    })


}