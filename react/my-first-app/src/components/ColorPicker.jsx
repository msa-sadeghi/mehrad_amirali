import { useState } from "react";

function ColorPicker(){
    const [color, setColor] = useState('')
    const colors = ["red", "green", "blue"]
    const handleClick = (color) =>{
        setColor(color)
    }
    return(
        <div>
            <h2>select the color</h2>
            <div
            style={{display:'flex', gap:'10px', flexDirection:'column'}}
            >
                <div
                style={{display:'flex', gap:'10px'}}
                >
 {
                    colors.map((c)=>(
                        <div
                        style={{
                            width:'50px',
                            height:'50px',
                            backgroundColor:c,
                            cursor: 'pointer',
                            border: '3px solid white'
                            
                        }}
                        onClick={() => handleClick(c)}
                        />                      
                    ))
                }
                </div>
               
                <div>
                    <p>you selected : {color}</p>
                    <div
                    style={{
                        width:'200px',
                        height:'100px',
                        backgroundColor : color || 'white'
                        
                    }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;