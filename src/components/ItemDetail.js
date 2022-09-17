import { useCart } from "../context/CartContext"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"


const ItemDetail = ({item}) => {
  const{postulaciones, addItem,clearCart} = useCart ()
 
  const addHandler = (event,puesto) =>{
    addItem (puesto)
  }

  return (

    <div>
        <strong>Postulaciones</strong>
        {postulaciones.map((p,id)=> <li key={id}>{p}</li>)}
        <button onClick={clearCart} className = "btn">Borrar postulacion</button>

        <img src={item.img} alt="" className="w-15"></img>
        <div>{item.puesto}</div> 
        <div>{item.empresa}</div>
        <div>{item.lugar}</div>
        <div>{item.rubro}</div>
        <div>{item.salario}</div>
        <Link to={'/Cart'}>
          <ItemCount stock = {5} initial={0}/>
        </Link>
        
        
        <button onClick ={(event)=>{ addHandler(event,item.puesto)} }className="btn"> Postularse </button>
       
        

    </div>
  )
}
export default ItemDetail