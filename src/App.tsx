import { Routes, Route } from 'react-router-dom'
import { Navbar } from './ui-components/Navbar'
import { LandingPage } from './pages/LandingPage'



const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
