let todosElement = document.querySelector('.todos');
let inputElement = document.querySelector('input');
let addTodoForm = document.querySelector('.add');


function addNewTodo(newVal){
    let newLi = document.createElement("li");
    newLi.className = "list-group-item d-flex justify-content-between align-items-center"
    let newSpan = document.createElement("span");
    newSpan.innerHTML = newVal
    let newTrash = document.createElement("i")
    newTrash.className = "fa fa-trash-o delete"
    // TODO add remove functionality for trash icon


    newLi.append(newSpan, newTrash)
    todosElement.append(newLi)
}



addTodoForm.addEventListener("submit", function(event){
event.preventDefault()
});
inputElement.addEventListener("keydown", function(event){
    let newValue = event.target.value.trim()
if(event.key === "Enter"){
    inputElement.value = "";
    addNewTodo(newValue)

}
})