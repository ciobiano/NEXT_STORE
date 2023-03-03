import React from "react";
import Image from "next/image";
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth";


export default function Header() {
	return (
		<header>
			{/* top nav */}
			<div className=" flex  items-center bg-amazon_blue p-1 flex-grow py-2 justify-center">
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image
						src="https://links.papareact.com/f90"
						width={150}
						height={40}
						style={{objectFit:"contain"}}
						className="cursor-pointer"
					/>
				</div>
				{/* search  */}
				<div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 m-3">
					<input
						className=" p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
						type="text"
					/>

					<SearchIcon className="h-12 p-4" />
				</div>
				{/* rhs */}
				<div className="text-white flex text-xs space-x-6 mx-6  whitespace-nowrap">
					<div onClick={signIn} className=" link ">
						<p>Hello, Sign in</p>
						<p className="font-extrabold md:text-sm">Account & Lists</p>
					</div>
					<div className=" link ">
						<p>callback</p>
						<p className="font-extrabold md:text-sm">&order</p>
					</div>
					<div className="relative link flex items-center  ">
						<span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold ">
							0
						</span>
						<ShoppingCartIcon className="h-10" />
						<p className="hidden md:inline font-extrabold md:text-sm">cart</p>
					</div>
				</div>
			</div>
			{/* second nav */}
			<div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
				<p className=" link flex items-center ">
					<MenuIcon className="h-6 mr-1 " />
					All
				</p>
				<p className="link">prime video</p>
				<p className="link">Amazon Business</p>
				<p className="link"> Today's Deals</p> 
        <p className="hidden lg:inline-flex link">Electronics</p>
        <p className="hidden lg:inline-flex link">Food & Grocery</p>
        <p className="hidden lg:inline-flex link">Prime</p>
        <p className="hidden lg:inline-flex link">Buy Again</p>
        <p className="hidden lg:inline-flex link">Shopper Toolkit</p>
        <p className="hidden lg:inline-flex link">Health & Personal Care</p>
        
			</div>
		</header>
	);
}
