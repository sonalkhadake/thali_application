import "./App.css";
// import './index.css';
import React from "react";
import Menu from "./components/Products/Menu";
import OrderSummary from './components/Carts/OrderSummary'
import Navbar from "./components/Navbar";
import Thali from "./components/Carts/Thali";
import Footer from "./components/Footer";



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";




function App() {
 
  return (
    <div className="App">
       <BrowserRouter>
       
      < Navbar/>
      
            <Routes>

  
      <Route path="/" element={<Menu/>}exact/>
      <Route path="/Thali" element={<Thali/>}exact/>
         <Route path="/OrderSummary" element={<OrderSummary/>}/>
      
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>,
     <Footer/>
  
    </div>
  );
}
export default App;
