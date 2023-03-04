import React from 'react'
import Header from '../components/Header';
import  Image  from 'next/image';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';


function checkout() {
 
	const items = useSelector(selectItems);

  return (
		<div className="bg-gray-100">
			<Header />
			<main className="lg:flex max-w-screen-2xl mx-auto ">
				{/* left side  */}
				<div>
          <Image  src="https://links.papareact.com/ikj" width={1020} height={250} style={{objectFit:"contain"}}/>
        <div className=" flex flex-col p-5 space-y-10 bg-white-200 ">
          <h1 className='text-2xl border-b pb-4'>
			{items.length  === 0
			?"Your Amazon Cart is empty"
			:"Shopping Cart"
			}
		  </h1>
		  {items.map((item, i) => (

		
        {/* right side  */}
			</main>
		</div>
	);
}

export default checkout; 

          
