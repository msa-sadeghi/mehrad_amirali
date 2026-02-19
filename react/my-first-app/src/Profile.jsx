import { useContext } from "react"
import UserContext from "./UserContext"

function Profile(){
    const {user} = useContext(UserContext)
    return <h1>Hello {user.name}</h1>
}

export default Profile