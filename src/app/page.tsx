import Image from 'next/image'
import { useState } from 'react'
export default function Home() {
  return (
    <main className='bg-white min-h-screen text-black  px-20 py-20'>
      <div className='flex justify-between flex-row mb-8'>
        <div>
            <button className=' bg-slate-100  rounded-3xl text-sm py-2 px-3 mr-4'>Filters off</button>
            <button className=' bg-slate-100  rounded-3xl text-sm py-2 px-3'>Most recent</button>
        </div>
        <div>
          <button className=' text-xs mr-4 hover:bg-slate-100 hover:rounded-full px-3 py-2'>|</button>
          <button className=' text-xs mr-4 hover:bg-slate-100 hover:rounded-full px-3 py-2'>||</button>
          <button className=' text-xs mr-4 hover:bg-slate-100 hover:rounded-full px-3 py-2'>|||</button>
          <button className=' text-xs  hover:bg-slate-100 hover:rounded-full px-3 py-2'>||||</button>
        </div>
      </div>

      <div className='grid-cols-2 grid gap-6'>
          
          <div className='flex   gap-4'>
              <div className=' bg-slate-100 justify-center flex items-center w-1/2'>
                <h1 className=' text-4xl'>Tree</h1>
              </div>

              <div className='w-1/2 flex flex-col justify-between'>
                <div className=''>
                  <div className='mb-2'>
                    <p>Christmas Tree Decoration</p>
                    <p className=' font-bold'>$19.99</p>
                  </div>
                  <div className=' '>
                    <p className=' text-gray-500 mb-4 overflow-ellipsis'>Perfect for adding a festive touch to any space, this miniature tree brings the magic of Christmas right into your home. Crafted with care, it's a delightful 
                      minima neque repellat. Quia?</p>
                  </div>
                </div>
                <div className=''>
                  <button className='px-3 py-2 text-sm bg-slate-700 text-white border-solid'>Add to cart</button>
                </div>
                
              </div>
          </div>

          <div className='flex   gap-4'>
              <div className=' bg-slate-100 justify-center flex items-center w-1/2'>
                <h1 className=' text-4xl'>Tree</h1>
              </div>

              <div className='w-1/2 flex flex-col justify-between'>
                <div className=''>
                  <div className='mb-2'>
                    <p>Christmas Tree Decoration</p>
                    <p className=' font-bold'>$19.99</p>
                  </div>
                  <div className=' '>
                    <p className=' text-gray-500 mb-4 overflow-ellipsis'>Perfect for adding a festive touch to any space, this miniature tree brings the magic of Christmas right into your home. Crafted with care, it's a delightful 
                      minima neque repellat. Quia?</p>
                  </div>
                </div>
                <div className=''>
                  <button className='px-3 py-2 text-sm bg-slate-700 text-white border-solid'>Add to cart</button>
                </div>
                
              </div>
          </div>

          <div className='flex   gap-4'>
              <div className=' bg-slate-100 justify-center flex items-center w-1/2'>
                <h1 className=' text-4xl'>Tree</h1>
              </div>

              <div className='w-1/2 flex flex-col justify-between'>
                <div className=''>
                  <div className='mb-2'>
                    <p>Christmas Tree Decoration</p>
                    <p className=' font-bold'>$19.99</p>
                  </div>
                  <div className=' '>
                    <p className=' text-gray-500 mb-4 overflow-ellipsis'>Perfect for adding a festive touch to any space, this miniature tree brings the magic of Christmas right into your home. Crafted with care, it's a delightful 
                      minima neque repellat. Quia?</p>
                  </div>
                </div>
                <div className=''>
                  <button className='px-3 py-2 text-sm bg-slate-700 text-white border-solid'>Add to cart</button>
                </div>
                
              </div>
          </div>

          <div className='flex   gap-4'>
              <div className=' bg-slate-100 justify-center flex items-center w-1/2'>
                <h1 className=' text-4xl'>Tree</h1>
              </div>

              <div className='w-1/2 flex flex-col justify-between'>
                <div className=''>
                  <div className='mb-2'>
                    <p>Christmas Tree Decoration</p>
                    <p className=' font-bold'>$19.99</p>
                  </div>
                  <div className=' '>
                    <p className=' text-gray-500 mb-4 overflow-ellipsis'>Perfect for adding a festive touch to any space, this miniature tree brings the magic of Christmas right into your home. Crafted with care, it's a delightful 
                      minima neque repellat. Quia?</p>
                  </div>
                </div>
                <div className=''>
                  <button className='px-3 py-2 text-sm bg-slate-700 text-white border-solid'>Add to cart</button>
                </div>
                
              </div>
          </div>
      </div>
       
    </main>
    
  )
}
