
import { Iproduct } from '@/common/interfaces/product';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { message } from 'antd';
import axios from 'axios';

const useProductsMutation = () => {
    const [messageApi,contextHolder] = message.useMessage()
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationKey:['PRODUCTS'],
        mutationFn: async(options:{action:string, product:Iproduct}) =>{
            try {
                switch (options.action) {
                    case 'add':
                        await axios.post('http://localhost:3001/api/products',options.product)
                        messageApi.open({
                            type:'success',
                            content:"Thêm sản phẩm thành công"
                        })
                        break;
                    case 'delete':
                        await axios.delete(`http://localhost:3001/api/products/${options.product._id}`)
                        messageApi.open({
                            type:'success',
                            content:"Xóa sản phẩm thành công"
                        })
                        break;
                    case 'update':
                            await axios.put(`http://localhost:3001/api/products/${options.product._id}`,options.product)
                            messageApi.open({
                                type:'success',
                                content:"Cập nhật thành công"
                            })
                            break;
                    default:
                        break;
                }
            } catch (error) {
                console.log(error)
            }
        },
        onSuccess:() => {
            queryClient.invalidateQueries({queryKey:['PRODUCTS']})
        },
    })
  return {contextHolder, mutation}
}

export default useProductsMutation