import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"



const NavBar = ({categoryId}) => {
  return (
    <div className ="navbar">
        <h1>Amers</h1>
      <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={`/category/IT`}>IT</NavLink></li>
                <li><NavLink to={`/category/Administracion`}>Administracion</NavLink></li>
                <li><NavLink to={`/category/Ventas`}>Ventas</NavLink></li>
                <li><NavLink to={`/category/Industrial`}>Industrial</NavLink></li>
                <li><NavLink to={`/category/Alimenticio`}>Alimenticio</NavLink></li>
                
      </ul> 
      
     <CartWidget/>
    </div>
  )
}
export default NavBar