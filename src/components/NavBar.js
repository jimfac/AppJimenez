import CartWidget from "./CartWidget"


const NavBar = () => {
  return (
    <div className ="navbar">
        <h1>Amers</h1>
      <ul>
                <li>Home</li>
                <li>Servicios Empresariales</li>
                <li>Quienes somos</li>
                <li>Contactanos</li>
                <li>Ubicación</li>
      </ul> 
      
     <CartWidget/>
    </div>
  )
}
export default NavBar