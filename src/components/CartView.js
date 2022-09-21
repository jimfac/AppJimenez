import { useCart } from "../context/CartContext"

const CartView = () => {
  
  const [{postulaciones}] = useCart()
    return (
    <div>
        <strong>Postulaciones</strong>
        {postulaciones.map((p,id)=> <li key={id}>{p}</li>)}
    </div>
  )
}
export default CartView