import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const useCategoryQuery = () => {
    const query = useQuery({
        queryKey:['CATEGORIES'],
        queryFn: async()=>{
            try {
              const data = await axios.get('http://localhost:3001/api/categories')
             return data.data
            } catch (error) {
              console.log(error)
            }
        }
    })
  return query
}

export default useCategoryQuery