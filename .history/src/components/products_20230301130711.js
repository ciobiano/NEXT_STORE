import React from 'react'
import { (Carousel) } from 're';

function products({id,title,price ,description, category,image}) {
  return (
    <div>
        <p>{category}</p>
        <Image src={image} width={200} height={200} objectFit="contain" (Carousel)/>
    </div>
  )
}

export default products