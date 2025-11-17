import React from 'react'
import { useNavigate } from 'react-router-dom';

interface NavCardProps {
     
  menuItems: string[]; // The list of items
}

const NavCard : React.FC<NavCardProps> = ({menuItems}) => {
const navigate = useNavigate();
  return (
   <div className='absolute top-10 left-(-10) h-80 w-50 bg-amber-50 shadow-md rounded-xl'>
    
    <div className='flex justify-center flex-col items-center'>
   {menuItems.map((itr,idx) =>  ( <div key={idx} className='m-2 border-2' onClick={()=>navigate("category/"+itr)}>{itr}</div>) )}
    
    </div>

     </div>
  )
}

export default NavCard
