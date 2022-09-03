import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navigation } from './routes/Navigation';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { Product } from './components/product/Product';
import { Order } from './components/order/order';
const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <BrowserRouter>
  <h3> <NavLink to={'/'}>Administracion</NavLink> </h3>
  <h3><NavLink to={'/order'}>Compra</NavLink></h3>

  <Routes>
 
    <Route path="/" element={<Product />}/>
    <Route path='/order' element={<Order />} />
     

  </Routes>
</BrowserRouter>,
document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
