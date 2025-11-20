let weightElem = document.querySelector("#weight")

function changeWeight(){
    console.log(weightElem.value)
}

weightElem.addEventListener('input', changeWeight)