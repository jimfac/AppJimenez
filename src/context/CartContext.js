import React, { useState,useContext } from "react"


const CartContext = React.createContext([])



const useCart = ()=> {
    return useContext(CartContext)
}

const CartProvider = ({defaultValue =[],children}) => { 
    
    const [postulaciones, setPostulaciones]=useState(defaultValue)
     
    const isInCart = (postulacion)=> {
        return postulaciones.some((finded)=> finded.puesto===postulacion.puesto);
        
    }
    
    const addItem = (postulacion) => {
        if(isInCart(postulacion)){
            return alert ("Ya te has postulado anteriormente");
        } else {

        setPostulaciones( prevState => {
            return prevState.concat(postulacion)
        })
        }
    }
    const removeItem= (postulacion) =>{
        postulaciones.filter((finded) => finded.puesto !== postulacion.puesto)
        return setPostulaciones(removeItem);
    }

    const clearCart= () => { 
        setPostulaciones([])
    }    
    
    const context = {
        isInCart,
        removeItem,
        addItem,
        clearCart,
        postulaciones
        
    }
    
    return(
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
  
export {useCart,CartProvider} 
