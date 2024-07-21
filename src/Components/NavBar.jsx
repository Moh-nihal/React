import React from 'react'

export default function NavBar() {
  return (
    <div>
        <nav className="p-5 bg-green-600 shadow ">
            <div className="md:flex md:items-center md:justify-between ">
                <span className="text-2xl font-[Poppins] cursor-pointer">
                    <img className="h-10 inline" src="https://www.7up.com/images/7up-logo-large.png" alt="" />
                </span>
            <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-green-600 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 ">
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-xl hover:underline duration-500 text-white">PRODUCTS</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-xl hover:underline duration-500 text-white">RECIPES</a>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <a href="#" className="text-xl hover:underline duration-500 text-white">STORES</a>
                </li>
            </ul>
            <div className="flex gap-2">
            <i className="fa-brands fa-facebook text-white text-3xl "></i>
            <i className="fa-brands fa-instagram text-white text-3xl"></i>
            <i className="fa-brands fa-tiktok text-white text-3xl"></i>
            <i className="fa-brands fa-x-twitter text-white text-3xl"></i>
            <i className="fa-brands fa-youtube text-white text-3xl"></i> 
            <i className="fa-brands fa-pinterest text-white text-3xl"></i>
            
            </div>
            
            
            </div>
        </nav>
        

    </div>
  )
}
