const usersList = [
    {id:1, name:'sara', family:'blalala'},
    {id:2, name:'sahjkhjkra', family:'blalala'},
    {id:3, name:'sadra', family:'blalala'},
    {id:1, name:'safra', family:'blalala'},
    {id:1, name:'sagra', family:'blalala'},
    {id:1, name:'sara', family:'blalala'},
    {id:1, name:'sahra', family:'blalala'},
    {id:1, name:'sara', family:'blalala'},
    {id:1, name:'sara', family:'blalala'},
    {id:1, name:'shhara', family:'blalala'},
    {id:1, name:'sahjkra', family:'blalala'},
    {id:1, name:'sahhra', family:'blalala'},
    {id:1, name:'sjara', family:'blalala'},
    {id:1, name:'sjkara', family:'blalala'},
    {id:1, name:'sahjkhjkra', family:'blalala'},
]
let userListContainer = document.querySelector('#list')
let paginationContainer = document.querySelector('#pagination')
let currrentPage = 1
let rowsCount = 5
function displayUserList(allUsersArray, usersContainer, rowsCount, currentPage){
    usersContainer.innerHTML = ''
    let endIndex =  rowsCount * currentPage
    let startIndex = endIndex - rowsCount
    let paginatedUsers = allUsersArray.slice(startIndex, endIndex)
    paginatedUsers.forEach(function(user){
        let userElement = document.createElement('div')
        userElement.classList.add('item')
        userElement.innerHTML = user.name + ' ' + user.family
        usersContainer.append(userElement)
    })
}

function setUpPagination(allUsersArray, pagesContainer, rowsCount){
    pagesContainer.innerHTML = ''
    let pagesCount = allUsersArray.length / rowsCount
    alert(pagesCount)
    for(let i = 1; i < pagesCount + 1; i++){
        let btn = paginationButtonGenerator(i, allUsersArray)
        pagesContainer.appendChild(btn)
    }

}

function paginationButtonGenerator(page, allUsersArray){
    let button = document.createElement('button')
    button.innerHTML = page
    button.addEventListener('click', function(){
        currrentPage = page
        displayUserList(allUsersArray, userListContainer, rowsCount, currrentPage)
    })
    return button


}



displayUserList(usersList, userListContainer, rowsCount, currrentPage)
setUpPagination(usersList, paginationContainer, rowsCount)