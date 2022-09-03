import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="container">
      <NavBar/>       
      <ItemListContainer greeting={'Bienvenidos a Amers'}/>
      <ItemCount stock ='5' initial='0'/>
    </div>
  );
}

export default App;
