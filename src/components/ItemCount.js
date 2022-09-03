import { useState } from "react"
const ItemCount = ({stock,initial}) => {
  
    const [counter, setCounter] = useState(1)

    const handleClickA = () => {
        if(counter>stock){
            alert('No hay stock')
            counter=stock
            
        }
        setCounter(counter + 1 )       
      
    }
   
    const handleClickQ = () => {
        if(counter>initial){
            
        setCounter(counter - 1)
      
    }
    }

  return (
    <div>
        <strong>Contador:{counter}</strong>
        <button onClick= {handleClickA} className='btn mx-5'>Añadir</button>
        <button onClick= {handleClickQ} className='btn mx=5'>Quitar</button>
    </div>
    
  )
}
export default ItemCount