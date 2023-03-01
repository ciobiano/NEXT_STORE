import React from 'react'

function ProductFeed({products}) {
  return (
    <div className=""> 
    <h1> products here</h1>
    {products.map((id,title,price ,description, category,image) => (
       <products
       key={id}
         id={id}
         
       />
    ))
    }
    </div>
  )
}

export default ProductFeed