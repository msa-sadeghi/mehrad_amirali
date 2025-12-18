import { useState } from "react";
function UserForm(){
    const [user, setUser] = useState({
        name:'',
        email:'',
        age:''
    })
    const handleChange = (e) => {
        setUser({...user,
            [e.target.name]:e.target.value
        })
    }
    return(
        <div>
            <input type="text" 
            name="name"
            placeholder="name"
            value={user.name}
            onChange={handleChange}
            
            />
            <input type="text" 
            name="email"
            placeholder="email"
            value={user.email}
            onChange={handleChange}
            
            />
            <input type="text"
            name="age"
            placeholder="age"
            value={user.age} 
            onChange={handleChange}
            
            />
            <div>
                <p>name : {user.name}</p>
                <p>email : {user.email}</p>
                <p>age: {user.age}</p>
            </div>
        </div>
    )
}

export default UserForm;