import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Evaluation } from './pages/Evaluation/Evaluation'
import { Thank } from './pages/Thank/Thank'


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Evaluation />} />
        <Route path="/thank/:id" element={<Thank />} />
      </Routes>
    </Router>
  )
}

export default App
