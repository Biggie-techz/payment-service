import { Routes, Route } from 'react-router-dom'
import { Navbar } from './ui-components/Navbar'
import { LandingPage } from './pages/LandingPage'



const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
