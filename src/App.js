import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from "./context/CartContext";
import CartWidget from "./components/CartWidget";


function App() {
  return (
    <div className="container">
      <CartProvider>
        <BrowserRouter>
       
          <NavBar/>
          
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/> 
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/Cart' element={<CartWidget/>}/>
          </Routes> 
      
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
