import './App.css'
import Navbar from './Global Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Global Components/Footer'
import Landing from './Layout/Landing'
import ShopContainer from './Global Components/ShopContainer'
import ElcetricPack from './Layout/ElcetricPack'
import Slider from './Global Components/SliderMain'
import LoginForm from './Form/Login'
import RegisterForm from './Form/Register'
import SliderProduct from './Global Components/SliderProduct'
import Product from './Layout/Product'
import Description from './Layout/Description'
import AddToCart from './Layout/AddToCart'
import Review from './Global Components/Review'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/con' element={<ShopContainer/>}/>
      <Route path='/nav' element={<Navbar/>}/>
       <Route path='/footer' element={<Footer/>}/>
       <Route path='/elc' element={<ElcetricPack/>}/>
       <Route path='/slider' element={<Slider/>}/>
       <Route path='/login' element={<LoginForm/>}/>
       <Route path='/register' element={<RegisterForm/>}/>
       <Route path='/slip' element={<SliderProduct/>}/>
       <Route path='/desc' element={<Description/>}/>
       <Route path='/cart' element={<AddToCart/>}/>
       <Route path='/review' element={<Review/>}/>
       
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
