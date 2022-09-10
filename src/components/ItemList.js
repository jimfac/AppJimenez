import { Link } from "react-router-dom"
import Item from "./Item"


const ItemList = ({jobs}) => {
  return (
    <div>
        {jobs.length ? (
          jobs.map(job => 
          <Link to={`/item/${job.id}`}>
          <Item key={job.id} {...job}/>
          </Link> ) 
          ) : (
          <h2>Cargando...</h2> 
          )}
    </div>
  )
}
export default ItemList