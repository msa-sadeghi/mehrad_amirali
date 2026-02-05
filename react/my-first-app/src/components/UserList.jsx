import { useEffect, useState } from "react"

function useFetch(url){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(()=>{
        console.log("____________________"+res)
        fetch(url)
        .then(res => {
            res.json()
        })
        .then(data => {
            console.log(data)
            setData(data)
        })
        .catch(err => {
            setError(err)
        })
    }, [url])
    return {data, error}
}

function UserList(){
    const {data, error} = useFetch('https://jsonplaceholder.typicode.com/users')
    if(error) return <p>error</p>
    return(
        <ul>
            {
                data.map(user=>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    )
}

export default UserList