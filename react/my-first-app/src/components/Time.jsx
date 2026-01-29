import { useEffect, useState } from "react";

function Timer(){
        const [seconds, setSeconds] = useState(0)
        const [isRunning, setIsRunning] = useState(false)
        useEffect(()=>{
            let interval = null
            if(isRunning){
                interval = setInterval(()=>{
                    setSeconds(seconds => seconds + 1)
                }, 1000)
            }
            return () => {
                if(interval) clearInterval(interval)
            }
        }, [isRunning])
        const reset = ()=>{
            setSeconds(0)
            setIsRunning(false)
        }
        return(

            <div>
                <h1>{seconds} seconds</h1>
                <button onClick={()=> (
                    setIsRunning(!isRunning)
                )}>
                    {isRunning ? 'stop' : 'start'}
                </button>
                <button onClick={reset}>reset</button>
            </div>
        )
}


export default Timer;