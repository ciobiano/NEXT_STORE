import React, { useState } from 'react'
import Products from './Products'
import {at}


function ProductFeed({products}) {
  const [rating] = useState(2)


  return (
    <div className=""> 
    <h1> products here</h1>
    {products.map(({id,title,price ,description, category,image})=>(
        <Products
        key={id}
        id={id}
        title={title}
        price={price}
        description={description}
        category={category}
        image={image}
        />
    ))  
    }

       
   
    </div>
  )
}

export default ProductFeed