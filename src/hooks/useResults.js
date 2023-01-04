import {useState, useEffect} from 'react';
import yelp from '../api/yelp';



export default ()=>{
    const [results,setResults]=useState([])
    const [errorMessage,setErrorMessage]=useState('')
    const searchApi = async searchTerm => {
     console.log("hi one")
     try{
       const response = await yelp.get('/search',{
         params:{
             limit:50,
             term:searchTerm,
             location:'san hose'
         }
     })  
         setResults(response.data.businesses);
         
     }catch(error){
         setErrorMessage("Something went wrong")
     }
     
    
     }
     useEffect(()=>{
        searchApi('pasta')
    },[])
    
        return [results,errorMessage,searchApi]
}