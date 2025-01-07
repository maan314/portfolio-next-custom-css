import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
    <header className="p-2 dark:bg-gray-950 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<Link rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
            <h1 className='text-4xl font-bold '>{"</>"}usman.</h1>
		</Link>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<Link rel="noopener noreferrer" href="../about" className="flex items-center px-4 -mb-1 dark:border-">About</Link>
			</li>
			<li className="flex">
				<Link rel="noopener noreferrer" href="../services" className="flex items-center px-4 -mb-1 dark:border-">Services</Link>
			</li>	
			<li className="flex">
				<Link rel="noopener noreferrer" href="../contact" className="flex items-center px-4 -mb-1 dark:border-">Contact</Link>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    </>
  )
}

export default Header