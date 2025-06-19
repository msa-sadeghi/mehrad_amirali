let imageSources = [
    'images/1.jpg', './images/2.png', './images/3.jpg'
]

let nextButton = document.querySelector('.next')
let imageElem = document.querySelector('img')
let imageIndex = 0

function nextImage(){
    imageIndex++;
    if (imageIndex > imageSources.length - 1){
        imageIndex = 0
    }
    imageElem.setAttribute('src', imageSources[imageIndex])
}

function prevImage(){
    //todo
}

setInterval(nextImage, 3000)
nextButton.addEventListener('click', nextImage)