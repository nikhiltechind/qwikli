import React from 'react'

import NavBarSearch from './NavBarSearch'
import NavBar from './NavBar'

const HomePage = () => {
  return (
    <>
    <div className='flex justify-between bg-white p-0.5 border-1'>
        <div className='font-normal text-sm ml-8'>We are available 24/7, Need help? <p className='text-green-500 float-end'>+099949343</p></div>
        <div className='font-normal text-sm mr-8'>about | Contact-us | My Account</div>
    </div>

<NavBarSearch/>
<NavBar/>
    </>
  )
}

export default HomePage
