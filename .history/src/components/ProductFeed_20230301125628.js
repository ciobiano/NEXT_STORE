import React from 'react'

function ProductFeed({products}) {
  return (
    <div className=""> 
    <h1> products here</h1>
    {products.map((id,title,price ,description, category) => (
        <p>{product.title}</p>
    ))
    }
    </div>
  )
}

export default ProductFeed