import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
  return (
    <div>
        <img src={item.img} alt="" className="w-15"></img>
        <div>{item.puesto}</div> 
        <div>{item.empresa}</div>
        <div>{item.lugar}</div>
        <div>{item.rubro}</div>
        <div>{item.salario}</div>

        

    </div>
  )
}
export default ItemDetail