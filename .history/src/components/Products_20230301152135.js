import React, { useState } from 'react'
import Image from 'next/image'
import {StarIcon} from "@heroicons/react/solid"
import Currency

const MAX_RATING = 5;
const MIN_RATING = 1;

function Products({id,title,price ,description, category,image}) {

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING 
  );

  const {hasPrime} = useState(Math.random() < 0.5);

  return (
    <div>
        <p>{category}</p>
        <Image src={image} width={200} height={200} style={{objectFit:"contain"}} />
        <h4>{title}</h4>
        <div className="flex">
            {Array(rating).fill().map((_,i)=>(
                <StarIcon className="h-5 text-yellow-500" />
            ))}

            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
    </div> 
  )
}

export default Products