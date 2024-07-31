import React from 'react'
import Slider from '../Global Components/SliderMain'
import { Link } from 'react-router-dom'

const ElcetricPack = () => {
  return (
   <>
      <div className='h-[700px] w-[1340px] bg-black'>
      <div
      className="h-[700px] w-[1340px] cursor-pointer"
      style={{
        backgroundImage: "url('https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1835,c_limit/de4edf33-cac6-4ef0-ad48-68f4e8fe3ed6/nike-just-do-it.jpg')",
        backgroundSize: 'cover',
        
      }}
    >
        <div className="text-white ml-10 py-[470px]">
      <p className="font-medium">Nike Electric Pack</p>
      <p className="font-medium  font-skranji  text-5xl">WIN ON AIR</p>
      <p className="font-medium">Engineered for those who stand out.</p>
      <div className='flex space-x-3'>
      <Link to ='/product'><button className="mt-6 px-4 py-2 border font-medium bg-white text-black rounded-full text-lg">
  Experience Air
</button></Link>

<Link to ='/product'><button className="mt-6 px-4 py-2 border font-medium bg-white text-black rounded-full text-lg">
  Shop Air
</button></Link>

      </div>
      </div>
    </div>

      </div>


      <div className="flex justify-center mt-10 bg-white">
      <div className="text-center">
      <h1 className="font-bold font-skranji text-custom-48">NEW THIS WEEK</h1>
       
        <Link to ='/product'><button className="mt-4 px-6 py-2 bg-black text-white rounded-full text-lg">
          Shop New Arrivals
        </button></Link>
      </div>
    </div>

    

   
   </>
  )
}

export default ElcetricPack