import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList';
import Cart from './components/Cart';


function App() {
  return (
    <div className="container">
      <h1 className="mt-4">Tienda Online</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
