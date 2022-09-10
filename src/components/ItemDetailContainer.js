import {useEffect,useState} from "react"
import ItemDetail from "./ItemDetail"
import jobsJson from "../MyJobs.json"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {
    const [item,setItem] = useState ({})
    const {id} = useParams()
  
    const getItem = (data,time) => 
        new Promise((resolve,reject) => {
            setTimeout(()=>{
                if(data){
                    resolve(data );
                }else{
                    reject ('Error')
                }          
            }, time);   
        });
    
        useEffect(() => {
            getItem(jobsJson.find(j=> j.id === id),2000).then((res)=>{
              setItem(res)
            }).catch((err)=>console.log(err));
         }, [id])

    
    return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}
export default ItemDetailContainer