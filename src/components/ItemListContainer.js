import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import jobsJson from "../MyJobs.json"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const[jobs,setJobs] = useState([]);
  const {categoryId} = useParams()
  
  const getJobs = (data,time,idParams) =>
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
      if(categoryId){
        getJobs(jobsJson,2000,categoryId).then((res)=>{
          setJobs(res.filter(c=>c.categoryId===categoryId))
        }).catch((err)=>console.log(err,":tu categoría no exixte"));
      }else{
        getJobs(jobsJson,2000).then((res)=>{
          setJobs(res)
        }).catch((err)=>console.log(err,":tu categoría no exixte"))
      }

      
        
     }, [categoryId]);
 
  
  return (
   
     <div className="flex flex-row">
    <ItemList jobs={jobs}/>
   </div>
  )
}
export default ItemListContainer