import './App.css'
import LandingPage from './components/LandingPage'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
    <Router>
     <div>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
