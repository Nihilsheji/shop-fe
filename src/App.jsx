import logo from './logo.svg';
import './App.css';
import Top from './components/top/top';
import { Routes, Route, Outlet } from 'react-router-dom';
import Products from './components/products/products';
import Product from './components/products/product/product';
import Home from './components/home/home';
import authService from './services/auth';

function App() {
  return (
    <div className="App" username={ authService.username } logged={ authService.isLoggedIn }>
      <Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products/>}>
          <Route path=":productId" element={<Product/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
