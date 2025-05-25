import React from 'react'
import computer from '../assets/computer.svg'

const Categories = () => {
  return (
     <section className='mt-[80px] sm:mt-[140px]'>
        <div className="max-w-full sm:max-w-[1170px] mx-auto px-4 sm:px-0">
        <div className="flex gap-3 items-center mb-[24px]">
          <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]"></div>
          <p className="font-sans text-[#DB4444]">Categories</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mb-[24px] gap-4 sm:gap-0">
            {/*  */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-start sm:items-center">
            <h1 className="text-[36px] sm:text-[24px] font-sans font-semibold">
              Browse By Category
            </h1>
             
          </div>

          
          </div>
          <div className='flex gap-[30px] '>
            <div className=' border border-gray-300 rounded-[3px] py-[25px] px-[57px] hover:bg-[#DB4444] '>
              <img src={computer} alt="" />
              <p className='16px text-gray-600'>Camera</p>
             
            </div>
            <div className=' border border-gray-300 rounded-[3px] py-[25px] px-[57px] hover:bg-[#DB4444] '>
              <img src={computer} alt="" />
              <p className='16px text-gray-600'>Camera</p>
             
            </div>
            <div className=' border border-gray-300 rounded-[3px] py-[25px] px-[57px] hover:bg-[#DB4444] '>
              <img src={computer} alt="" />
              <p className='16px text-gray-600'>Camera</p>
             
            </div>
            <div className=' border border-gray-300 rounded-[3px] py-[25px] px-[57px] hover:bg-[#DB4444] '>
              <img src={computer} alt="" />
              <p className='16px text-gray-600'>Camera</p>
             
            </div>
            <div className=' border border-gray-300 rounded-[3px] py-[25px] px-[57px] hover:bg-[#DB4444] '>
              <img src={computer} alt="" />
              <p className='16px text-gray-600'>Camera</p>
             
            </div>
            <div className=' border border-gray-300 rounded-[3px] py-[25px] px-[57px] hover:bg-[#DB4444] '>
              <img src={computer} alt="" />
              <p className='16px text-gray-600'>Camera</p>
             
            </div>
          </div>
          </div>
          
     </section>
  )
}

export default Categories