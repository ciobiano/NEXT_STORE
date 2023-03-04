import React from 'react'
import Header from '../components/Header';
import { Image } from 'next/image';


function checkout() {
  return (
		<div className="bg-gray-100">
			<Header />
			<main className="lg:flex max-w-screen-2xl mx-auto ">
				{/* left side  */}
				<div>
          <Image  src="htt" width={1020} height={250} style={{ObjectFit:"contain"}}/>
        </div>
        {/* right side  */}
        <div>
          <h1>Your shopping cart</h1>
        </div>
			</main>
		</div>
	);
}

export default checkout; 

          
