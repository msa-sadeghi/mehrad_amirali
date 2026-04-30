import { useState } from "react"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const {login} = useAuth()
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        login(email, password)
        console.log("go to dashboard")
        navigate("/dashboard",{replace:true})
    }

    return(
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                /><br/>
                <input type="password"
                value={password}
                placeholder="password"
                onChange={(e)=>setPassword(e.target.value)}

                /><br/>

                <button type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login