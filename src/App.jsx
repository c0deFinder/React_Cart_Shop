import { Routes,Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Pizza from './components/Pizza'
import { NavBar } from './components/NavBar'
import { Cart_Shop } from './components/Cart'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/carrito" element={<Cart_Shop />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}