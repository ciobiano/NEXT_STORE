import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader    
function Banner() {
  return (
		<div className="relative">
 
        <div className=' absolute w-full h-32 bg-gradient-to-t from-gray-100 to-translate bottom-0 z-20 '/>
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<img loading="lazy" src="https://links.papareact.com/gi1" alt="AMAZON" />
				</div>
				<div>
					<img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
				</div>
				<div>
					
					<img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
				</div>
			</Carousel>
		</div>
	);
}

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>


export default Banner