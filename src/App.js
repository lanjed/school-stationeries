
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddStationeries from './components/AddStationeries';
import GetStationeries from './components/GetStationeries';
import MakePayment from './components/MakePayment';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
    <div className="App">
      <header className='App-header'>
        <h1>School Stationeries - Buy & Sell</h1>
      </header>
      
      {/* this is a navbar */}
      <Navbar/>

      {/* a carousel */}
      <Carousel/>

      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/addstationeries' element={<AddStationeries/>}/>
        <Route path='/' element={<GetStationeries/>}/>
        <Route path='/make-payment' element={<MakePayment/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

      {/* FOOTER */}
      <Footer/>
      
    </div>
    </CartProvider>
    </Router>
  );
}

export default App;
