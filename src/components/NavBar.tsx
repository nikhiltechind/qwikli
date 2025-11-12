import React, { useState } from 'react'
import NavCard from '../ui/NavCard';


const NavBar = () => {
// const [isCategoryToggled1, setIsCategoryToggled1] = useState(false);
// function toggleCategory1(){
//     setIsCategoryToggled1(!isCategoryToggled1)
//     setIsCategoryToggled2(false)
// }

// const [isCategoryToggled2, setIsCategoryToggled2] = useState(false);
// function toggleCategory2(){
//     setIsCategoryToggled2(!isCategoryToggled2)
//     setIsCategoryToggled1(false)
// }

const [selectedMenu, setSelectedMenu] = useState('');

const selectedMenuHelper = (menu:string) => {
    if(selectedMenu == menu)
        setSelectedMenu("")  // for closing the selected menu
    else{
        setSelectedMenu(menu)
    }

}

const items = ['ABC','DEF','GHI','JKL']
const items1 = ['XYZ','ASDFSD','WEREW','CVXCV']
const items2 = ['12321','4343','6565','PO45445']
  return (
    <>
    <div className='flex justify-between border-1 p-1.5 relative' >
    
    <div className='flex flex-row '>
     <div className='ml-6' ><button onClick={()=>selectedMenuHelper('categories')}>
        categories
        { selectedMenu == 'categories' &&  <NavCard menuItems={items}/>}
        </button></div>

         <div className='ml-6' ><button onClick={()=>selectedMenuHelper('checkout')}>
        checkout
        { selectedMenu == 'checkout' &&  <NavCard menuItems={items1}/>}
        </button></div>

         <div className='ml-6' ><button onClick={()=>selectedMenuHelper('menuitems')}>
        menuitems
        { selectedMenu == 'menuitems' &&  <NavCard menuItems={items2}/>}
        </button></div>
</div>

     <div className='mr-5'>456</div>


{/* NavCard dropdown */}
     
   
    

    </div>
    </>
  )
}

export default NavBar
