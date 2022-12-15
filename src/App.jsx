import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Login from './pages/Login'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Comics from './pages/Comics'
import Collectibles from './pages/Collectibles'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path='/collectibles' element={<Collectibles />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;