import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="container">
      <NavBar/>       
      <ItemCount stock ='5' initial='0'/>
      <ItemListContainer greeting={'Bienvenidos a Amers'}/>
    </div>
  );
}

export default App;
