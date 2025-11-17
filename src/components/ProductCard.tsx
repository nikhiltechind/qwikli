import React from 'react'

const ProductCard = ({productDetail}:any) => {

console.log(productDetail)
  return (
    <div>
      <h1>{productDetail.name}</h1>
      <h1>{productDetail.price}</h1>
    </div>
  )
}

export default ProductCard
