import React from 'react'

const page = () => {
  return (
    <>
      <section>
        <div className='flex ml-24 mr-24 pt-28 pb-24'>
            <div style={{width:"900px", marginRight:"105px"}}>    
                <h1 className='text-6xl font-semibold'>Effortlessly Track and Manage your Workforce</h1>
                <div className='flex pt-8'>
                    <p className='text-xl'>The Hajir app simplifies workforce management with efficient tracking and scheduling tools, ensuring seamless coordination and allowing you to organize your staff more efficiently.</p>
                </div>
                <div className='flex space-x-4 mt-6'>
                    <div className='flex'>
                        <div className='w-6 object-contain'>
                            <img src="./img/BasicFeatures.png" alt="" />
                        </div>
                        <p className='ml-3'>
                            <span className='block text-2xl'>Basic Feature</span>
                            <span className='block text-2xl'>Free Forever</span>
                        </p>
                    </div>
                    <div className='flex'>
                        <div className='w-6'>
                            <img src="./img/TrustedBy.png" alt="" />
                        </div>
                        <p className='ml-3'>
                            <span className='block text-2xl'>Trusted By</span>
                            <span className='block text-2xl'>1K+ Users</span>
                        </p>
                    </div>
               </div>
                    <div className='pt-4'>
                        <button className='ml-6 border rounded-md px-6 py-2 bg-blue-500 text-white'>Try For Free</button>
                        <button className='ml-6 border rounded-md px-6 py-2 bg-transparent text-black border-slate-700'>Book a Demo</button>
                    </div>
            </div>
            <div>
                <img src="./img/hero-section.png" alt="" className='h-96 w-96'/>
            </div>
        </div>
    </section>
    </>
  )
}

export default page