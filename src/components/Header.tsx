import React from 'react'
import search from "../assets/icons8-search-50.png"


type propstype ={
arr:string
}
function Header(props:propstype) {
  return (
   <>
   <div className='bg-[#1b6153]  p-10 absolute'>
    <div className='bg-gradient-to-br from-[#50E4CB] via-[#84F8A7] to-[#50E4CB]  p-8 h-[90%] '>
      <ul className='text-[#087943] font-bold  text-center   lg:flex justify-between '>
        <li>GRAPHICSFAMILY</li>
        
        <div className='sm:flex items-center justify-center gap-8'>
        <li className='bg-[#087943] text-white px-5 py-1 rounded-full'>HOME</li>
        <li>ABOUT US</li>
        <li>PRODUCT</li>
        <li>SERVICES</li>
        <li>GALLERY</li>
        <li>BLOG</li>
        <img className='w-15 h-7' src={search} alt="" />
        </div>
       
      </ul>

    <div className=' justify-center sm:flex flex-row '>
      <div className=' w-[50%]  font-bold  flex flex-col  md:p-32 py-32'>
        <p className='sm:tracking-widest'>S P E C I A L  D E A L</p>
        <h1 className=' text-[#1F664D] text-5xl sm:text-7xl'>NEW STYLE</h1>
        <p className='text-[#1F664D] font-semibold'>HOME FASHION STORE</p><br />
        <button className='bg-[#17AB89] px-6  sm:px-7 py-2'>SHOP NOW</button>
        
      </div>
      <div className=' text-center  sm:w-[25%] p-10 m-16  h-50 border-2 rounded-full bg-[#087943] '>
        <img className='w-70' src="https://www.snitch.co.in/cdn/shop/files/4MSS1922-02-M5851.jpg?v=1685972120" alt="" />
       </div>
       
       </div>

    </div>

   </div>
   </>
  )
}

export default Header
