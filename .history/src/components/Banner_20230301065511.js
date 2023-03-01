import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function Banner() {
  return (
    
    <Carousel autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
        <div>
            img
        </div>
        <div></div>
        <div></div>

    </Carousel>
  )
}

export default Banner