import React from 'react'
import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

export default function Header() {
  return (
<header>
  {/* top nav */}
  <div className=" flex align-m items-center bg-amazon_blue p-1 flex-grow py-2">
    <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
      <Image src="https://links.papareact.com/f90"
      width={150}
      height={40}
      objectFit="contain"
      className="cursor-pointer"/>
    </div>
      <div className= " hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 m-3">
        <input  className=" p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
      
      <SearchIcon className="h-12 p-4" />

      </div>
      {/* rhs */}
      <div className="text-white flex text-xs space-x-6 mx-6  whitespace-nowrap">
        <div className=" link ">
          <p>Hello, Sign in</p>
          <p  className='font-extrabold md:text-sm'>Account & Lists</p>
        </div> 
        <div className=" link "> 
          <p>callback</p>
          <p className='font-extrabold md:text-sm'>&order</p>
         
        </div>
        <div className=" link ">
        <ShoppingCartIcon className="h-10" />
        <p className='font-extrabold md:text-sm'>cart</p>
        </div>
      </div>
  </div>
  {/* second nav */}
</header> 
 );
}
 