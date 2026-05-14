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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input 
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
            <div>
                <input type="password"
                placeholder="password..." />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm