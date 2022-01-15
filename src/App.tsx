import { Routes, Route, Navigate } from 'react-router-dom' 

import './index.css'

import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';
import Layout from './pages/Layout'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
