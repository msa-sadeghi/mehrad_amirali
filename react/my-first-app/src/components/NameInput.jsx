import { useState } from "react";

function NameInput(){
    const [name, setName] = useState('')

    return (
        <div>
            <input 
            
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding:'10px'}}
            />
            <p>hello {name || 'guest'}</p>
            <p>num of chars : {name.length}</p>
        </div>
    )
}

export default NameInput