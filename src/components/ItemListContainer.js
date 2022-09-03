import ItemList from "./ItemList"

const ItemListContainer = ({greeting}) => {
  return (
   <div>
    <div className="greeting">{greeting}</div>
    <ItemList/>
   </div>
  )
}
export default ItemListContainer