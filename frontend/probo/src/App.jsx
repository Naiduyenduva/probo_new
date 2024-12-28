import './App.css'
import LandingPage from './components/LandingPage'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {

  return (
    <>
    <Router>
     <div>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
