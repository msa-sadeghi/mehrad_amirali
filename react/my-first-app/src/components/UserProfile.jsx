import { Link, useParams } from "react-router-dom"

function UserProfile(){
    const {userId, section} = useParams()
    const renderSection = ()=>{
        switch(section){
            case 'posts':
                return <div>user's posts</div>;
            case 'photos':
                return <div>users's photos</div>

            default:
                return <div>user's public information</div>
        }
    }
    return(
        <div>
            <h1>User Profile</h1>
            <nav>
                <Link to={`/user/${userId}/posts`}>posts</Link>
                <Link to={`/user/${userId}/photos`}>photos</Link>
            </nav>
            {renderSection()}
        </div>
    )
}

export default UserProfile