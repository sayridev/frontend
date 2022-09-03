
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Product } from "../components/product/Product";
import { Layout } from "../layout/Layout";


export const Navigation = () => {
  
  return (
    <BrowserRouter>
    
          <Routes>
           
            <Route path="/" element={Product} />
          </Routes>
     
    
    </BrowserRouter>
  );
};
