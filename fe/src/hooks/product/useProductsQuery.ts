
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useProductsQuery = (id?:string|number|undefined) => {
    const query = useQuery({
        queryKey:['PRODUCTS',id],
        queryFn: async()=>{
            try {
              const data = id? await axios.get(`http://localhost:3001/api/products/${id}`): await axios.get('http://localhost:3001/api/products')
             return data.data
            } catch (error) {
              console.log(error)
            }
        }
    })
  return query
}

export default useProductsQuery