import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";


const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home />} />  
        <Route path="/Product/:id" element = {<Product />} />  
        <Route path="/Products/women" element = {<ProductList />} />  
        <Route path="/Products" element = {<ProductList />} />  
        <Route path="/Products/Coat" element = {<ProductList />} />  
        <Route path="/Products/Jean" element = {<ProductList />} />  
        <Route path="/Register" element = {<Register />} />  
        <Route path="/Login" element = {<Login />} />  
        <Route path="/Cart" element = {<Cart />} />  
      </Routes>
    </Router>
  );
};


export default App;