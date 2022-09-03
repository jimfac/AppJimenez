import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import jobsJson from "../MyJobs.json"

const ItemListContainer = ({greeting}) => {
  const[jobs,setJobs] = useState([]);

  const getJobs = (data,time) =>
     new Promise((resolve,reject) => {
      setTimeout(()=> {
        if (data) {
          resolve(data);
        }else{
          reject("Error")
        }
      },time);
     });

     useEffect(() => {
        getJobs(jobsJson,2000).then((res)=>{
          setJobs(res)
        }).catch((err)=>console.log(err,":tu trabajo no fue seleccionado"));
     }, [])
 
  
  return (
   <div>
    <div className="greeting">{greeting}</div>
    <ItemList jobs={jobs}/>
   </div>
  )
}
export default ItemListContainer