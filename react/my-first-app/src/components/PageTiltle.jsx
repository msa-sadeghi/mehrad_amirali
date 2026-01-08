import { useEffect, useState } from "react"

function PageTitle(){

    const [user, setUser] = useState({})
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    }, [])
    return(
        <div>
            <p>name: {user.name}</p>
            <p>{user.name}</p>
        </div>
    )
}
export default PageTitle