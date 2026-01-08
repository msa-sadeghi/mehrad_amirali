import { useEffect, useState } from "react"

function PageTitle(){

    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title =  `you clicked ${count} times`
    })
    return(
        <div>
            <p>counter:{count}</p>
            <button onClick={()=> setCount(count + 1)}>increase</button>
        </div>
    )
}
export default PageTitle