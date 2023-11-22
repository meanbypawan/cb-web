import { useState } from "react";
import Message from "./components/Message";
import EvenCounter from "./components/EventCounter";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";
import TestUseEffect from "./components/TestUseEffect";

export default function App(){
 
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product-list" element={<ProductList/>}/>
      <Route path="/use-effect" element={<TestUseEffect/>}/>
    </Routes>
  </>
}