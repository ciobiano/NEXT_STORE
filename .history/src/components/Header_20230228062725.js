import React from 'react'
import Image from 'next/image';

export default function Header() {
  return (
<header>
  <div className=" flex items-center bg-amazon_blue-light">
    <div>
      <Image src="https://links.papareact.com/f90"
      width={140}
      height={60}
      objectFit="contain"
      className="cursor-pointer"/>
    </div>
  </div>
</header> 
 );
}
 