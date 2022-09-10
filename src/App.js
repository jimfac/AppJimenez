import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar/>
        <ItemCount stock = {5} initial={0}/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/> 
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes> 

       
      </BrowserRouter>
    </div>
  );
}

export default App;
