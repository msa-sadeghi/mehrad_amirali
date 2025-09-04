const users =  [
    {id:1, name:'sara', age:24},
    {id:2, name:'nikan', age:13}
]
let usersCount = users.length
export function isLogin(userID){
    let isLogedIn = users.some(user => user.id === userID)
    return isLogedIn
}
export function userRegistration(name, age){
    let newUser = {
        id: users.length + 1,
        name:name,
        age :age
    }
    users.push(newUser)
    return users
}


export default usersCount