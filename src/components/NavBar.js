import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className ="navbar">
        <h1>Amers</h1>
      <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="pages/serviciosempresariales.html">Servicios Empresariales</a></li>
                <li><a href="pages/quienessomos.html">Quienes somos</a></li>
                <li><a href="pages/contactanos.html">Contactanos</a></li>
                <li><a href="pages/ubicacion.html">Ubicación</a></li>
      </ul> 
      <CartWidget/>
      
    </div>
  )
}
export default NavBar