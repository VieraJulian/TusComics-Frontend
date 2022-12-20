import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Comics from './pages/Comics'
import Collectibles from './pages/Collectibles'
import NewProduct from './pages/NewProduct'
import EditProduct from './pages/EditProduct'
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile'
import Detail from './pages/Detail'
import Cart from './pages/Cart'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/comics' element={<Comics />}></Route>
        <Route path='/collectibles' element={<Collectibles />}></Route>
        <Route path='/newProduct' element={<NewProduct />}></Route>
        <Route path='/editProduct' element={<EditProduct />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/editProfile' element={<EditProfile />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;