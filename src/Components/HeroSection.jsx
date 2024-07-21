import React from 'react'

export default function HeroSection() {
  return (
    <div className="bg-green-600 w-full text-white font-bold">
        <div className="flex justify-center text-4xl mt-52 md:mt-10 " >
            <p>Bake, shake, and stir some <br />
            uptimism into your day</p>
            
        </div>
        <div className="flex justify-center mt-20 ">
        <img className="h-36" src="https://www.7up.com/images/shaker.png" alt="" />
        </div>
        <div className="max-w-4xl mx-auto p-12 md:p-0 mt-20">
           <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-0">
                <div className= "p-4 relative">
                    <img className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-100" src="https://www.7up.com/images/recipes/thumbnails/7upside-down-cake.jpg" alt="" />
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 hover:opacity-100  transition-opacity duration-300 " >
                        <span className="text-white text-2xl">7UP <sup>&#174;</sup> RUM RAMBLER <br /> <span className="mt-4 text-lg flex justify-center ">VIEW RECIPE  &#8594;</span></span>
                        
                    </div>
                </div>
                <div className=" p-4 relative">
                  <img src="https://www.7up.com/images/recipes/thumbnails/7up-rum-rambler.jpg" alt="" />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 hover:opacity-100  transition-opacity duration-300 " >
                        <span className=" mt-8 text-white text-2xl">7UP <sup>&#174;</sup> SIDE DOWN <span className="flex justify-center">CAKE</span> <span className="mt-6 text-lg flex justify-center ">VIEW RECIPE  &#8594;</span></span>
                        
                    </div> 
                </div>
                <div className=" p-4 relative">
                  <img src="https://www.7up.com/images/recipes/thumbnails/classic-7up-margarita.jpg" alt="" />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 hover:opacity-100  transition-opacity duration-300 " >
                        <span className="text-white text-2xl">7UP <sup>&#174;</sup> MARGARITA <br /> <span className="mt-4 text-lg flex justify-center ">VIEW RECIPE  &#8594;</span></span>
                        
                    </div>
                  
                  </div>
                <div className=" p-4 relative">
                  <img src="https://www.7up.com/images/recipes/thumbnails/tropical-snakebite.jpg" alt="" />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 hover:opacity-100  transition-opacity duration-300 " >
                        <span className="text-white text-2xl">7UP <sup>&#174;</sup>  SUNRISE <br /> <span className="mt-4 text-lg flex justify-center ">VIEW RECIPE  &#8594;</span></span>
                        
                    </div>
                  
                  </div>
                <div className=" p-4 relative">
                  <img src="https://www.7up.com/images/recipes/thumbnails/tequila-smash.jpg" alt="" />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 hover:opacity-100  transition-opacity duration-300 " >
                        <span className="text-white text-2xl">TEQUILA SMASH<br /> <span className="mt-4 text-lg flex justify-center ">VIEW RECIPE  &#8594;</span></span>
                        
                    </div>
                  
                  </div>
                <div className=" p-4 relative">
                  <img src="https://www.7up.com/images/recipes/thumbnails/7-7.jpg" alt="" />
                  <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 hover:opacity-100  transition-opacity duration-300 " >
                        <span className="text-white text-2xl">TROPICAL VACATION <br /> <span className="mt-4 text-lg flex justify-center ">VIEW RECIPE  &#8594;</span></span>
                        
                    </div>
                  
                  </div>
                
        </div>
        </div>
    </div>
  )
}
