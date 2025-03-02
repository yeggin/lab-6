import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import EmployeeManagement  from './pages/EmployeeManagement'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { TitleProvider } from './context/TitleContext'
import { AuthProvider, useAuthContext } from "@asgardeo/auth-react"

// const authConfig = {
//   signInRedirectURL: 'http://localhost:5173',
//   signOutRedirectURL: 'http://localhost:5173',
//   clientID: 'JvEEi0UYifja7j3H8lkuGNnL8F0a',
//   baseURL: 'https://api.asgardeo.io/t/shabu',
//   scope: [ 'openid', 'profile'],
  

// }

const SignInPage = () => {
  const { signIn, state } = useAuthContext();
  const navigate = useNavigate();
  console.log("Auth State:", state);


  const handleSignIn = async () => {
    try {
      console.log("🚀 Attempting sign-in...");
      await signIn();
      console.log("✅ Sign-in triggered!");
      navigate("/employee-management");
    } catch (error) {
      console.error("❌ Sign-in error:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sign in to access Employee Management</h2>
      <button 
        onClick={handleSignIn} 
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Sign In
      </button>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { state } = useAuthContext();

  if (state.isAuthenticated) {
    return children; 
  } else {
    return <Navigate to="/signin" replace />; 
  }
};

function App() {

  return (
    // <AuthProvider config = {authConfig} >
      <TitleProvider>
        <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/employee-management" element={<ProtectedRoute><EmployeeManagement /></ProtectedRoute>} />
              

            </Routes>
          </div>
          <Footer />
        </Router>
      </TitleProvider>
    // </AuthProvider>
  );
}

export default App
