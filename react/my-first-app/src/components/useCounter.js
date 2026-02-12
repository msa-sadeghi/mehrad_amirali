import { useState } from "react";

function useCounter(initialvalue = 0){
    const [count, setCount] = useState(initialvalue)

    const increment = () => {
        setCount(count => count + 1)
        setCount(count => count + 1)
    }
    return { count , increment}
}

export default useCounter