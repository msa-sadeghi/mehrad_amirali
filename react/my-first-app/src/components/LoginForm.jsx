import { useForm } from "react-hook-form"

function LoginForm(){
    const {
        register,
        handleSubmit,
        formState :{errors}
    } = useForm()
    const onSubmit = (data)=>{
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <div className="form-group">
                <input 
                className="form-input"
                {...register("email",{
                    required:"email field is nessessary",
                    pattern:{
                        value:/\S+@\S+\.\S+/,
                        message:"email is not valid"
                    }
                })}
                type="text" placeholder="email..." />
                {errors.email && (<p>{errors.email.message}</p>)}
            </div>
            <div className="form-group">
                <input type="password" className="form-input"
                placeholder="password..." />
            </div>
            <button type="submit" className="submit-btn">Login</button>
        </form>
    )
}

export default LoginForm