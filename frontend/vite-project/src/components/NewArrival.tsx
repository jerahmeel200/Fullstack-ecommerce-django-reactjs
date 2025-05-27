import image from '../assets/image.svg'
import free from '../assets/free.svg'
// import cutomer from '../assets/customerService.svg'
// import guarantee from '../assets/Guarantee.svg'
import pes from '../assets/pes.svg'

const NewArrival = () => {
  return (

    <>
    
    <section className='hidden md:block mt-[80px] sm:mt-[140px]'>
        <div className='max-w-[1170px] mx-auto px-4 py-8 flex gap-[30px]  items-center'>
            
            <img src={pes} alt="" />
<img src={image} className='' alt="" />
        </div>
    </section>

    <section className='hidden md:block mt-[80px] sm:mt-[140px]'>
<div className='text-center flex justify-center items-center gap-[88px]  max-w-[1170px] mx-auto '>

     
<div className='flex flex-col items-center gap-2'>
    <img src={free} alt="" />
    <h1 className='text-[20px] font-sans font-semibold'>FREE AND FAST DELIVERY</h1>
    <p className='text-[14px] text-gray-600'>Free delivery for all orders over $140</p>
</div>
<div className='flex flex-col items-center gap-2'>
    <img src={free} alt="" />
    <h1 className='text-[20px] font-sans font-semibold'>FREE AND FAST DELIVERY</h1>
    <p className='text-[14px] text-gray-600'>Free delivery for all orders over $140</p>
</div>
<div className='flex flex-col items-center gap-2'>
    <img src={free} alt="" />
    <h1 className='text-[20px] font-sans font-semibold'>FREE AND FAST DELIVERY</h1>
    <p className='text-[14px] text-gray-600'>Free delivery for all orders over $140</p>
</div>
 
    </div>

 
 
    </section>
    </>

  )
}

export default NewArrival