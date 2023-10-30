import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home/Home.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
