import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <h1>counter: {count}</h1>
            <button onClick={() => setCount(count+1)}>increment</button>
            <button onClick={() => setCount(count-1)}>decrement</button>
            <button onClick={() => setCount(0)}>setZero</button>
        </div>
    )
}

export default Counter;