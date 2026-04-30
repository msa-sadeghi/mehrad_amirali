import {BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
 
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
function App(){
  return (
    
      <AuthProvider>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/dashboard" element={
                  <ProtectedRoute>

                    <Dashboard/>
                  </ProtectedRoute>
              }/>
              <Route path="/profile" element={
                  <ProtectedRoute>

                    <Profile/>
                  </ProtectedRoute>
              }/>
              <Route path="/admin" element={
                  <ProtectedRoute>

                    <AdminPanel/>
                  </ProtectedRoute>
              }/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    
  )

}

export default App;