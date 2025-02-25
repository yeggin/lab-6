import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import EmployeeManagement  from './pages/EmployeeManagement'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TitleProvider } from './context/TitleContext'


function App() {
  return (
    <TitleProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee-management" element={<EmployeeManagement />} />

          </Routes>
          </div>

      <Footer />
      </Router>
    </TitleProvider>
  );
}

export default App
