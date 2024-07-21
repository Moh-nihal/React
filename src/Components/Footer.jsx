import React from 'react'

export default function Footer() {
  return (
    <div><footer className="bg-[#2c2c2c] text-white h-32   ">
        <div className="flex justify-center ">
            <div className="mt-5 gap-5 flex font-semibold text-xs ">
            <a href="#" className="hover:underline">PrivacyPolicy</a>
            <a href="#" className="hover:underline">CA Privacy Rights</a>
            <a href="#" className="hover:underline">Do Not Sell or Share My Personal Information</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">Let's Play</a>
            </div>
        </div>
        <div className="flex justify-center font-semibold text-xs mt-4">
            <p>7UP and BE UPTIMISTIC are trademarks of Dr Pepper/Seven Up, Inc. © 2024 Dr Pepper/Seven Up, Inc.</p>
        </div>
        </footer></div>
  )
}
