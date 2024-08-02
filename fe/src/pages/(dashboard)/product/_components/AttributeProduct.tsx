import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, message, Select } from 'antd'
import { useState } from 'react'


const AttributeProduct = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [optionals,setOptionals] = useState<string[]>([]);
    const [colors,setColors] = useState<string[]>([]);
    const onSubmit = ()=>{
        if(optionals.length == 0 || colors.length == 0){
            message.error("Bạn chưa chọn thuộc tính")
        }
        else{
            const newAttributes = []
            
        }
    }
    return (
        <>
            <Button type='primary'> <PlusOutlined /> Tạo biến thể</Button>
            {isOpen && (
                <div className=' fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center'>
                    <div className='w-[800px] relative p-6 bg-white rounded-lg'>
                        <button onClick={() => { setIsOpen(false); }} className=" absolute top-2 right-3 size-10 rounded-full text-sm bg-black text-white font-semibold border border-black hover:text-black hover:bg-white"><CloseOutlined /></button>
                        <div className='flex items-center gap-4 pt-10 mb-4'>
                            <div className='basis-1/2'>
                                <Select
                                    mode="multiple"
                                    value={optionals}
                                    style={{ width: '100%' }}
                                    onChange={setOptionals}
                                    placeholder="Chọn optional"
                                    options={[
                                        { value: '4/64', label: '4/64' },
                                        { value: '8/64', label: '8/64' },
                                        { value: '8/128', label: '8/128' }
                                    ]}
                                />
                            </div>
                            <div className='basis-1/2'>
                                <Select
                                    mode="multiple"
                                    value={colors}
                                    style={{ width: '100%' }}
                                    onChange={setColors}
                                    placeholder="Chọn màu sắc"
                                    options={[
                                        { value: 'VÀNG', label: 'VÀNG' },
                                        { value: 'ĐEN', label: 'ĐEN' },
                                        { value: 'TRẮNG', label: 'TRẮNG' },
                                        { value: 'TÍM', label: 'TÍM' },
                                    ]}
                                />
                            </div>
                        </div>
                        <Button type='primary' onClick={onSubmit}>Tạo biến thể</Button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AttributeProduct