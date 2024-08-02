export interface Iproduct {
    _id?: string|number,
    name:string,
    avatar:string,
    price:number,
    discount:{
        type:string,
        value:number
    },
    category:{
        _id:string,
        name:string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }|string|any,
    description:string
}   
export interface IproductForm {
    _id?: string|number,
    name:string,
    avatar:string,
    price:number,
     typeDiscount:string,
    value:number,
    category:string,
    description:string
} 