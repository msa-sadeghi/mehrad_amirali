import { useAuth } from "../context/AuthContext"
import { Navigate, replace } from "react-router-dom";
function ProtectedRoute({ children }){
    const {user} = useAuth();
    if(!user){
        console.log("navigate to login page")
        return <Navigate to="/login" replace/>
    }
    return children;
}
export default ProtectedRoute