import React from 'react'
import Image from 'next/image';

export default function Header() {
  return (
<header>
  <div>
    <div>
      <Image src="https:// "
      width={120}
      height={60}
      objectFit="contain"
      className="cursor-pointer"/>
    </div>
  </div>
</header> 
 );
}
 