import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"



const NavBar = ({categoryId}) => {
  return (
    <div className ="navbar">
        <h1>Amers</h1>
      <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={`/category/${categoryId}`}>Rubro</NavLink></li>
                
      </ul> 
      
     <CartWidget/>
    </div>
  )
}
export default NavBar