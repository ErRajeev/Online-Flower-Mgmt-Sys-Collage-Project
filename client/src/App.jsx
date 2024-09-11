import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home'
import Contact from "./Component/OtherPages/Contact/Contact";
import Team from './Component/OtherPages/Team/Team'
import Login from './Component/LoginSignup/Login/Login'
import SignUp from './Component/LoginSignup/SignUp/SignUp'
import UserProfile from './Component/Admin/UserProfile/UserProfile'
import Addproduct from './Component/Admin/Addproduct/Addproduct'
import ErrorPg from './Component/OtherPages/ErrorPg/ErrorPg'
import Allproductpage from "./Component/Admin/Allproductpage/Allproductpage";
import GiftIdea from "./Component/Home/GiftIdea/GiftIdea";
import ProductPage from "./Component/Admin/ProductPage/ProductPage";
import Cart from './Component/Cart/Cart'
import PaymentForm from "./Component/Payment/PaymentForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Admin" element={<Addproduct />} />
          <Route exact path="/Error" element={<ErrorPg />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Team" element={<Team />} />
          <Route exact path="/Profile" element={<UserProfile />} />
          <Route exact path="/Giftidia" element={<GiftIdea />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/pay" element={<PaymentForm />} />
          <Route exact path="/product-type/Flowers-in-a-box" element={<Allproductpage type={'Flowers-in-a-box'} />} />
          <Route exact path="/product-type/Luxury-Collection" element={<Allproductpage type={'Luxury-Collection'} />} />
          <Route exact path="/product-type/Flowers-in-a-vase" element={<Allproductpage type={'Flowers-in-a-vase'} />} />
          <Route exact path="/product-type/Plant-Gifts" element={<Allproductpage type={'Plant-Gifts'} />} />
          <Route exact path="/product-type/Hand-tied-Bouquet" element={<Allproductpage type={'Hand-tied-Bouquet'} />} />
          <Route path="product/:type/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
