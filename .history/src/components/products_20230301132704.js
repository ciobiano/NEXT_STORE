import React from 'react'
import Image from 'next/image'

function products({id,title,price ,description, category,image}) {
  return (
    <div>
        <p>{category}</p>
        <Image src={image} width={200} height={200} style={{objectFit:"contain"}} />
        <h4>{title}</h4>
    </div>
  )
}

export default products