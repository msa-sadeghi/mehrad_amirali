import { useState, useEffect } from "react";

function useLocalStorage(key, initialvalue){
    const [value, setValue] =  useState(()=>{
    try{
        const  saved = localStorage.getItem(key)
        if(saved != null){
            return JSON.parse(saved)
        }
        return initialvalue
    }
    catch(error)
    {
        console.log(error)
        return initialvalue
    }
    })
    useEffect(()=>{
        try{
            localStorage.setItem(key, JSON.stringify(value))
        }
        catch(error){
                console.log(error)
    
            }
        }, [key, value])
        return [value, setValue]
}


function UserProfile(){
        const [name, setName] = useLocalStorage('userName', '')
        const [age, setAge] = useLocalStorage('age', 0)
        return(
            <div>
                <input type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="name"
                />
                <input type="text"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
                placeholder="age"
                />
                <p>Hello {name} your age is{age} </p>
            </div>
        )
    }

export default UserProfile