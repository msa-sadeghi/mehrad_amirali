import useCounter from "./useCounter";

function CounterBox(){
    const { count, increment} = useCounter()

    return(
        <div>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button>-</button>
            <button>reset</button>
        </div>
    )
}

export default CounterBox