import React from 'react'

function CheckoutProduct({id, title, price, rating, description, category, image,hasPrime}) {
  return (
    <div className='grid grid-cols-5'>
      <Image src={image} height={200} width={200} objectFit="contain"/>
.col-span-3.mx-5

    </div>
  )
}

export default CheckoutProduct