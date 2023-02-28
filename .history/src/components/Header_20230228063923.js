import React from 'react'
import Image from 'next/image';

export default function Header() {
  return (
<header>
  {/* top nav */}
  <div className=" flex items-center bg-amazon_blue p-1 flex-grow py-2">
    <div className="mt-2 flex items-center flex-grow sm:flex-grow">
      <Image src="https://links.papareact.com/f90"
      width={150}
      height={40}
      objectFit="contain"
      className="cursor-pointer"/>
    </div>
      <div className="fle">
        
      </div>
  </div>
  {/* second nav */}
</header> 
 );
}
 