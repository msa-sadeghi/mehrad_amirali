import { useState } from "react"

function SignupForm(){
    const [formData, setFormData] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [errors, setErrors] = useState({})
    const handleSubmit=(e)=>{
        e.preventDefault()
        const validationErrors = validate()
        if(Object.keys(validationErrors).length === 0){
            console.log("erveything ok")
        }else{
            setErrors(validationErrors)
        }
    }
    const validate=()=>{
        const newErrors = {}
        if(!formData.username){
            newErrors.username = 'username can not be empty'
        }else if (formData.username.length < 3){
            newErrors.username = 'username is too short'
        }
        if(!formData.email){
            newErrors.email = 'email field can not be empty'
        }else if (!/\S+@\S+\.\S+/.test(formData.email)){
            newErrors.email = 'email is not valid'
        }

        // TODO ADD validation checks for other fields
        return newErrors
    }
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
        setErrors({...errors, [e.target.name]:''})
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