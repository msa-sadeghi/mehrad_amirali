import { useState } from "react"

function useToggle(initialValue= false){
    const [value, setValue]= useState(initialValue)
    const toggle = ()=> setValue(!value)
    return [value,  toggle]
}
function ToggleComponent(){
          const [isVisible, setIsvisible] = useToggle(false)
        return(
            <div>
                <button onClick={setIsvisible}>show/hide</button>
                {isVisible && <p>this is hiddent text</p>}
            </div>
        )
}

export default ToggleComponent