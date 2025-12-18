function EventDemo(){
    const handleClick = () =>{
        console.log('btn clicked!')
    }
    const handleMouseEnter = () => {
        console.log("Mouse entered!")
    }
    const handleDoubleClick = () => {
        console.log("Double clicked!!")
    }
    return(
        <div>
            <button onClick={handleClick}>click</button>
            <button onDoubleClick={handleDoubleClick}>doubleClick</button>
            <div
            onMouseEnter={handleMouseEnter}
            style={{
                width:'200px',
                height:'100px',
                backgroundColor :'#3498db',
                display:'flex',
                alignItems:'center',
                justifyContent:'center'
            }}
            >
                put mouse here
            </div>
        </div>
    )
}

export default EventDemo;