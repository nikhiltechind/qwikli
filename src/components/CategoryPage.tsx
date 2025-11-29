import React from 'react'
import { useParams } from 'react-router-dom'
import { categoryList } from '../utils/dummyItems';
import ProductCard from './ProductCard';
import ScrollCategoryCard from '../ui/ScrollCategoryCard';

const CategoryPage = () => {
    
const params = useParams();
     const items =
    categoryList[params.categoryName as keyof typeof categoryList] ?? [];
  return (
    <div >
    <h1>Banner component</h1>
    <button>Left</button>
    <div className='flex flex-row m-2 overflow-x-scroll '>
    <ScrollCategoryCard/>
     <ScrollCategoryCard/>
      <ScrollCategoryCard/>
      <ScrollCategoryCard/>
       <ScrollCategoryCard/>
     <ScrollCategoryCard/>
      <ScrollCategoryCard/>
      <ScrollCategoryCard/>
       <ScrollCategoryCard/>
       <ScrollCategoryCard/>
      <ScrollCategoryCard/>
      <ScrollCategoryCard/>
       <ScrollCategoryCard/>
     <ScrollCategoryCard/>
      <ScrollCategoryCard/>
      <ScrollCategoryCard/>
      </div>
       <button>Right</button>
      <div className='flex flex-row flex-wrap'>
      {items.length ==0 ?  <img src='https://kachabazar-store-nine.vercel.app/no-result.svg' className=' w-4xl h-4xl'/>
      : items.map((itr,idx)=><ProductCard key={ itr.id} productDetail={itr}/>)}
      </div>
    </div>
  )
}

export default CategoryPage
