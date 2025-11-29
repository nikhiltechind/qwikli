import React from 'react'

interface productdetail{
  name: string,
  price: number
}
const ProductCard: React.FC<any> = (props) => {
const {name,price,image} = props.productDetail;
// console.log(props)
  return (
    <div className='w-30 h-auto bg-amber-300 m-4 p-5'>
      <img src={image} className='w-20 h-32'/>
    <h3>{name}</h3>
     <h3>{price}</h3>
    </div>
  )
}

export default ProductCard
