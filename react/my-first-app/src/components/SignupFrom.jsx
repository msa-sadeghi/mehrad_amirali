import { useState } from "react"

function SignupForm(){
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [errors, setErrors] = useState({})
    const handleSubmit=()=>{

    }

    const handleChange = (e)=>{
        
    }
    return(
        <form onSubmit={handleSubmit}>

            <h1>register form</h1>
            <input 
            name="username"
            value={formData.username}
            placeholder="username..."
            onChange={handleChange}
            type="text" />   
            {errors.username && (<p>{errors.username}</p>)}         
            <input 
            name="email"
            value={formData.email}
            placeholder="email..."
            onChange={handleChange}
            type="email" />   
            {errors.email && (<p>{errors.email}</p>)}         
            <input 
            name="password"
            value={formData.password}
            placeholder="password..."
            onChange={handleChange}
            type="password" />   
            {errors.password && (<p>{errors.password}</p>)}         
            <input 
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="confirmpassword..."
            onChange={handleChange}
            type="password" />   
            {errors.confirmPassword && (<p>{errors.confirmPassword}</p>)}   
            <button type="submit">register</button>      
        </form>
    )
}

export default SignupForm