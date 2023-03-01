import React from 'react'
import Products from './Products'
function ProductFeed({products}) {
  return (
    <div className=""> 
    <h1> products here</h1>
    {products.map(({id,title,price ,description, category,image})=>(
        <Products
        
    
       
    ))}
    </div>
  )
}

export default ProductFeed