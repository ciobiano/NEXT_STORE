import React from 'react'
import Products from './Products'


function ProductFeed({products}) {
  


  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xlg:-cols-4"> 
    
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