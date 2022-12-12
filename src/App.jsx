import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App;