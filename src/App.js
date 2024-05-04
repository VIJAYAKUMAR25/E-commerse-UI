
import './App.css';
import Navbar from './components/Navbar/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';
import { Footer } from './components/footer/footer';
import men_banner from './components/Assets/menbanner-1.jpg';
import women_banner from './components/Assets/pintrest0.jpg';
import kid_banner from './components/Assets/kid-banner.jpg';
function App() {
  return (
    <div >
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} ></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category = "women"/>}></Route>
          <Route path='/kids' element={<ShopCategory banner ={kid_banner} category = "kid"/>}></Route>
          <Route path='/product' element = {<Product/>}> 
            <Route path=':productId' element = {<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} ></Route>
          <Route path='/login' element={<LoginSignUp/>} ></Route>
        </Routes>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
