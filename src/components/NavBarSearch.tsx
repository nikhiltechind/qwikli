import React from 'react'

const NavBarSearch = () => {
  return (

    <div className='flex border-1 p-2 justify-evenly bg-orange-400'>
        {/* company logo */}
      <div><img src='src\assets\grocery-app-logo.avif' className='h-15 w-15'/></div>

{/* searchbar */}
 <div className='mt-2.5 ml-4'><input
  type="text"
  placeholder="Search for products.."
  className="border rounded-lg border-gray-300  px-3 py-2 focus:outline-none  w-3xl bg-white"/>
  </div>

{/* logos */}
     <div className='mt-2.5'><img src='src\assets\favicon\icons8-cart-30.png' className='h-10 w-10'/></div>
      <div className='mt-2.5'><img src='src\assets\favicon\icons8-bell-16.png' className='h-10 w-10'/></div>
       <div className='mt-2.5'><img src='src\assets\favicon\icons8-user-16.png' className='h-10 w-10'/></div>
    </div>
  )
}

export default NavBarSearch
