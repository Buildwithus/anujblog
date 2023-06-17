import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Add from './pages/add';
import Privacy from './pages/privacy';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './pages/about';
import Layout from './pages/layout';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Veiw from './pages/blog';
function Cars(){
  return(
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="add" element={<Add/>}></Route>
      <Route path="privacy-policy" element={<Privacy/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path='blog/:id' element={<Veiw/>}></Route>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
  <Cars />
</React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();