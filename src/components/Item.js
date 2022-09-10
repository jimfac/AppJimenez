const Item = ({puesto,empresa,lugar}) => {
  return (
      
        <div className=" m-2 p-2 bg-stone-300">
          <div>{puesto}</div> 
          <div>{empresa}</div>
          <div>{lugar}</div>
        </div>
      
  
     
  )
}
export default Item