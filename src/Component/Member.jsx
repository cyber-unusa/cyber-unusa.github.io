import React from 'react'
import { Navbar } from '../UI/Navbar'

const Member = () => {
  return (
    <div>
      <Navbar />

      <section id='memberHero' className='pt-2 mt-20 lg:mt-18'>
        <div className="container">
          <div className='flex flex-wrap'>
            <div className='w-full self-center px-4 mx-auto lg:w-1/2'>
              <h1 className='text-2xl lg:text-5xl font-bold text-primary mb-4'>TIM KAMI <span className='block'>DI UKM CYBER</span></h1>
              <p className='font-base lg:text-md mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil, nulla officia maxime eaque porro laboriosam deserunt asperiores expedita rerum, veniam aspernatur vitae atque delectus non? Veniam expedita iusto cumque quasi alias excepturi quisquam. Nesciunt facilis laboriosam possimus aliquid beatae?</p>
              <a href="#" className='py-3 px-4 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out hidden lg:inline'>Read More</a>
            </div>
            <div className='w-full self-center px-4 py-8 mx-auto lg:w-1/3'>
                <div className='flex flex-wrap mx-auto justify-between '>
                  <div className='mb-4'>
                    <img src="/asset/people/nan.jpg" alt="kadiv" className='rounded-full w-28 mx-4 border border-secbg shadow-md'/>
                    <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Nanda<span className='block'>Cyber Belajar</span></h4>
                  </div>
                  <div>
                    <img src="/asset/people/dur.jpg" alt="kadiv" className='rounded-full w-28 mx-4 shadow-md'/>
                    <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Abdur<span className='block'>Cyber Mengajar</span></h4>
                  </div>
                  <div>
                    <img src="/asset/people/dja.jpg" alt="kadiv" className='rounded-full w-28 mx-4'/>
                    <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Nadja<span className='block'>Cyber Berbagi</span></h4>
                  </div>
                  <div>
                    <img src="/asset/people/yan.jpg" alt="kadiv" className='rounded-full w-28 mx-4'/>
                    <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Rian<span className='block'>Cyber Event</span></h4>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Member
