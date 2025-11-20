function UserCard({name, email, age,city}){
    return(
        <div style={{
            border:'1px solid #ddd',
            padding:'20px',
            margin:'10px',
            borderRadius:'8px'
        }}>
            <h2>{name}</h2>
            <p>email : {email}</p>
            <p>age : {age}</p>
            <p>city : {city}</p>
        </div>
    )
}

export default UserCard