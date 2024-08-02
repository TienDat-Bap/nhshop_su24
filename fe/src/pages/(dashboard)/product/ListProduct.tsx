
import { Icategory } from "@/common/interfaces/category"
import { Iproduct, IproductForm } from "@/common/interfaces/product"

import useCategoryQuery from "@/hooks/category/useCategoryQuery"
import useProductsMutation from "@/hooks/product/useProductsMutation"
import useProductsQuery from "@/hooks/product/useProductsQuery"
import { CloseOutlined, DeleteOutlined, FormOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Form, Input, InputNumber, Popconfirm, Select, Space, Table } from "antd"
import TextArea from "antd/es/input/TextArea"
import { useEffect, useState } from "react"
import AttributeProduct from "./_components/AttributeProduct"

interface FieldData {
    name: string,
    price: number,
    category: number,
    avatar: string,
    typeDiscount: string,
    value: number,
    description: string
}

const ListProduct = () => {
    const [form] = Form.useForm()
    const [id, setId] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [optionForm, setOptionForm] = useState('add')
    const categories = useCategoryQuery()
    const query = useProductsQuery()
    const productMutation = useProductsMutation()
    useEffect(() => {
        if (query.data) {
            const newProducts = query.data.map((product: Iproduct) => {
                return {
                    ...product,
                    key: product._id
                }
            })
            setProducts(newProducts)
        }
    }, [query.data])
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Ảnh",
            dataIndex: "avatar",
            key: "avatar",
            render: (avatar: string | undefined) => (
                <div className="size-12 rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                </div>
            )
        },
        {
            title: "Danh mục",
            dataIndex: "category",
            key: "category",
            render: (category: { _id: string | number, name: string }) => (
                <p>{category.name}</p>
            )
        },
        {
            title: "Giá",
            dataIndex: "price",
            key: "price"
        },
        {
            title: "Khuyến mãi",
            dataIndex: "discount",
            key: "discount",
            render: (discount: { type: string, value: number }) => (
                <p>{`${discount.value} ${discount.type == 'percent' ? '%' : 'vnđ'}`}</p>
            )
        },
        {
            title: "Chức năng",
            key: "actions",
            render: (product: Iproduct) => (
                <Space>
                    <Popconfirm
                        title='Xóa sản phẩm'
                        description="Bạn có muốn xóa không?"
                        okText="Có"
                        cancelText="Không"
                        onConfirm={() => { productMutation.mutation.mutate({ action: 'delete', product: product }) }}
                    >
                        <Button type="primary" danger>
                            <DeleteOutlined />
                        </Button>
                    </Popconfirm>
                    <Button onClick={() => onHandleUpdate(product)} type="primary" className="bg-yellow-500"><FormOutlined /></Button>
                </Space>
            )
        },
    ]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onHandleUpdate = (product: Iproduct | any) => {
        setId(product._id)
        const data = {
            name: product.name,
            avatar: product.avatar,
            price: product.price,
            typeDiscount: product.discount.type,
            value: product.discount.value,
            category: product.category._id,
            description: product.description
        }
        setIsOpenForm(true); setOptionForm('update'); form.setFieldsValue(data)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit: any = (data: IproductForm) => {
        setIsLoading(true)
        setTimeout(() => {
            if (optionForm == 'add') {
                const newData = {
                    name: data.name,
                    avatar: data.avatar,
                    price: data.price,
                    discount: {
                        type: data.typeDiscount,
                        value: data.value
                    },
                    category: data.category,
                    description: data.description
                }
                productMutation.mutation.mutate({
                    action: 'add',
                    product: newData
                })
                setIsOpenForm(false)
                setIsLoading(false)
            }
            else {
                const newData = {
                    _id: id,
                    name: data.name,
                    avatar: data.avatar,
                    price: data.price,
                    discount: {
                        type: data.typeDiscount,
                        value: data.value
                    },
                    category: data.category,
                    description: data.description
                }
                productMutation.mutation.mutate({
                    action: 'update',
                    product: newData
                })
                setIsOpenForm(false)
                setIsLoading(false)
            }
        }, 1000)

    }

    return (
        <>
            {productMutation.contextHolder}
            {/* Form  */}
            {isOpenForm && (
                <div className=" fixed top-0 left-0 w-full h-full bg-black/45 flex justify-center items-center z-20 p-6">
                    <div className=" w-full  bg-white px-8 border rounded-lg shadow shadow-gray-200 relative">
                        {/* close  */}
                        <button onClick={() => { setIsOpenForm(false); }} className=" absolute top-2 right-3 size-10 rounded-full text-sm bg-black text-white font-semibold border border-black hover:text-black hover:bg-white"><CloseOutlined /></button>
                        <h1 className="font-bold text-xl text-center pt-4">{optionForm == 'add' ? 'Thêm sản phẩm' : 'Cập nhật sản phẩm'}</h1>
                        <div className="flex gap-x-4">
                            <div className="p-4 basis-4/12 ">
                                <Form
                                    form={form}
                                    name="basic"
                                    layout="vertical"
                                    autoComplete="on"
                                    onFinish={onSubmit}
                                    disabled={isLoading}
                                >
                                    <Form.Item<FieldData>
                                        label="Tên sản phẩm"
                                        name='name'
                                        rules={[{ required: true, message: "Bắt buộc nhập tên sản phẩm" }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item<FieldData>
                                        label='Danh mục'
                                        name='category'
                                    >
                                        <Select
                                            showSearch
                                            placeholder="Select a category"
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLocaleString().includes(input.toLocaleString())
                                            }
                                            options={
                                                categories?.data?.map((category: Icategory) => (
                                                    {
                                                        value: category._id,
                                                        label: category.name
                                                    }
                                                ))
                                            }
                                        />
                                    </Form.Item>
                                    <Form.Item<FieldData>
                                        label="Ảnh sản phẩm"
                                        name='avatar'
                                        rules={[{ required: true, message: "Bắt buộc nhập ảnh sản phẩm" }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item<FieldData>
                                        label="Giá sản phẩm"
                                        name='price'
                                        rules={[{ required: true, message: "Bắt buộc nhập giá sản phẩm" }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item<FieldData>
                                        label="Mô tả sản phẩm"
                                        name='description'
                                    >
                                        <TextArea />
                                    </Form.Item>
                                    <div>
                                        <h5 className="mb-2">Khuyến mại sản phẩm:</h5>
                                        <Space>
                                            <Form.Item<FieldData>
                                                label='Type'
                                                name='typeDiscount'
                                            >
                                                <Select
                                                    showSearch
                                                    placeholder="Select a person"
                                                    filterOption={(input, option) =>
                                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                                    }
                                                    options={[
                                                        { value: 'percent', label: 'Percent' },
                                                        { value: 'money', label: 'Money' },
                                                    ]}
                                                />
                                            </Form.Item>
                                            <Form.Item<FieldData>
                                                label="Khuyến mại"
                                                name='value'
                                            >
                                                <InputNumber min={0} />
                                            </Form.Item>
                                        </Space>
                                    </div>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" loading={isLoading}>
                                            {optionForm == 'add' ? 'Thêm' : 'Cập nhật'}
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                            <div className="p-4 basis-8/12">
                                    <AttributeProduct />                 
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Button type="primary" className="mb-5" onClick={() => { setIsOpenForm(true); setOptionForm('add'); form.resetFields() }}><PlusOutlined /> Sản phẩm</Button>
            {/* table */}
            <div className="h-[520px] overflow-y-auto">
                <Table columns={columns} dataSource={products} pagination={false} />
            </div>
        </>
    )
}

export default ListProduct