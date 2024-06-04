import {useState, useEffect} from 'react'
import axios from 'axios'

const useFetchAxios = (url) => {
     const [state, setState] = useState([])

     const fetchAxios = async () => {
         try {
           const res = await axios.get(url
           )
          setState(res.data)
     } catch (error){
          if(!error.res){
               console.error('network error', error)
          }else{
               console.error('error response', error)

          }
     }

     } 

     useEffect(() => {
     
          fetchAxios()
     
     }, [])

  return [state];  
}

export default useFetchAxios