import { useState } from "react";

function ColorPicker(){

    const colors = ["red", "green", "blue"]
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
                        />                      
                    ))
                }
                </div>
               
                <div>
                    <p>you selected :</p>
                    <div
                    style={{
                        width:'200px',
                        height:'100px',
                        backgroundColor : 'white'
                        
                    }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;