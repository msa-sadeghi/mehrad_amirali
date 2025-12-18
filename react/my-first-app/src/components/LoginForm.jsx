import { useState } from "react";

function LoginForm(){
    const [formData, setFormData] = useState({
        username : '',
        password : ''
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value

        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        //todo
    }
    return(
        <form action="" onSubmit={handleSubmit}>
            <div>
                <input type="text" 
                value = {formData.username}
                onChange={handleChange}
                name="username"
                />
            </div>
            <div>
                <input type="password" 
                value={formData.password}
                onChange={handleChange}
                name="password"
                />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm