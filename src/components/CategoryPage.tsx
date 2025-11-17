import React from 'react'
import { useParams } from 'react-router-dom'
import { categoryList } from '../utils/dummyItems';
import ProductCard from './ProductCard';

const CategoryPage = () => {
    
const params = useParams();
     const items =
    categoryList[params.categoryName as keyof typeof categoryList] ?? [];
  return (
    <div>
      <h1>Category Page : {params.categoryName}</h1>
      {items.map((itr,idx)=><ProductCard productDetail={itr}/>)}
    </div>
  )
}

export default CategoryPage
