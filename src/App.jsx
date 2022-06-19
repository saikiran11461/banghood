import './App.css';
import Home from './Pages/Home';
// import LoginPage from './Pages/LoginPage';
// import Cart from './Pages/Cart';
import {Routes, Route} from 'react-router-dom';
import Men from './Pages/Mensproduct.jsx/Mens';
import { ProductDetails } from './Productdetails/ProductDetails';
import Login from './Pages/login';
import CustomizedDialogs from './Pages/Diloge';
import Account from './Pages/Account';
import Navabar from './Components/Navabar';
import { CartPage } from './Pages/Cartpage';
import { AddressPage } from './Pages/AddressPage';
import {Payment} from "./Pages/PaymentPage"

// import Signup from './Pages/singup';

// import Womens from './Pages/Womens';
// import Mens from './Pages/Mens';
// import SingleProduct from './Pages/SingleProduct';
// import Protected from './Components/Protected';
// import Payement from './Pages/Payement';
// import CardDetails from './Pages/CardDetails';




function App() {
  return (
    <>
    <Navabar/>
  <Routes>
    <Route path="" element={<Home/>}/>
    <Route path="/Mens" element={<Men/>}/>
    <Route path="/products/:id" element={<ProductDetails/>}/>
    {/* <Route path="/login" element={ <Dialog> <Login/>}/>  */}
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/cart/address" element={ <AddressPage /> } />
    <Route path="/cart/address/payment" element={ <Payment/> } />
    <Route path="/account" element={ <CustomizedDialogs ><Account />
    </CustomizedDialogs> } />
{/* <Route path="/signup" element={ <CustomizedDialogs ><Signup />
</CustomizedDialogs> } /> */}
    // {/* <Route path="/Womens" element={<Womens/>}/>
    // <Route path="/payement" element={<Payement/>}/>
    // <Route path="/cardDetails" element={<CardDetails/>}/> */} 

    
  </Routes> 

   
   
   </>
  );
}

export default App;
