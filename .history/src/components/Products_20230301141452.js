import React from 'react'
import Image from 'next/image'

function Products({id,title,price ,description, category,image}) {
  return (
    <div>
        <p>{category}</p>
        <Image src={image} width={200} height={200} style={{objectFit:"contain"}} />
        <h4>{title}</h4>
        <div className="flex">
            {Array(rating).fill().map((_,i)=>(
                <StarIcon className="h-5 text-yellow-500" />
            ))}

            <
    </div>
  )
}

export default Products