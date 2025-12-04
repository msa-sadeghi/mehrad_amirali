import { useState } from "react";

function ToggleContent(){
    const [isVisible, setIsVisible] = useState(false)

    return(
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'show' : 'hide'}
            </button>
            {
                isVisible && (
                    <div
                    style={{
                        padding:'20px',
                        backgroundColor: '#f0f0f0',
                        marginTop :'10px',
                        color:'black'
                    }}
                    >
                        <p>this content is hidden</p>
                        <p>you can show.hide it</p>
                    </div>
                )
            }
        </div>
    )
}

export default ToggleContent