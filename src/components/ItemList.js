import Item from "./Item"


const ItemList = ({jobs}) => {
  return (
    <div>
        {jobs.length ? (
          jobs.map(job => <Item key={job.id} {...job}/> ) 
          ) : (
          <h2>Cargando...</h2> 
          )}
    </div>
  )
}
export default ItemList