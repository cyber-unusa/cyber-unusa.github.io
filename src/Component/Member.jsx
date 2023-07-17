import React, { useRef } from 'react'
import { Navbar } from '../UI/Navbar'
import Footer from '../UI/Footer'

const Member = () => {

  const ref = useRef(null)

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

  return (
    <div>
      <Navbar />

      {/* Main Hero */}
      <section id='memberHero' className='pt-2 mt-20 lg:mt-18'>
        <div className="container">
          <div className='flex flex-wrap'>
            <div className='w-full self-center px-4 mx-auto lg:w-1/2'>
              <h1 className='text-2xl lg:text-5xl font-bold text-primary mb-4'>TIM KAMI <span className='block'>DI UKM CYBER</span></h1>
              <p className='font-base lg:text-md mb-8'>UKM CYBER UNUSA memiliki 4 divisi utama, yaitu cyber berbagi, cyber belajar, cyber mengajar dan yang terakhir cyber event. Ke empat divisi ini dibentuk dalam rangka memenuhi kebutuhan struktur kepengurusan organisasi di UKM CYBER. </p>
              <button onClick={handleClick} className='py-3 px-4 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out hidden lg:inline'>Read More</button>
            </div>
            <div className='w-full self-center px-4 py-8 mx-auto lg:w-1/3'>
                <div className='flex flex-wrap mx-auto justify-between '>
                  <div className='mb-4'>
                    <img src="/asset/people/nan.jpg" alt="member" className='rounded-full w-28 mx-4 border border-secbg shadow-md'/>
                    <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Nanda<span className='block'>Cyber Belajar</span></h4>
                  </div>
                  <div>
                    <img src="/asset/people/dur.jpg" alt="member" className='rounded-full w-28 mx-4 shadow-md'/>
                    <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Abdur<span className='block'>Cyber Mengajar</span></h4>
                  </div>
                  <div>
                    <img src="/asset/people/dja.jpg" alt="member" className='rounded-full w-28 mx-4'/>
                    <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Nadja<span className='block'>Cyber Berbagi</span></h4>
                  </div>
                  <div>
                    <img src="/asset/people/yan.jpg" alt="member" className='rounded-full w-28 mx-4'/>
                    <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Rian<span className='block'>Cyber Event</span></h4>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* List Of Member */}
      <section>
        <div className="bg-secbg mt-28 " ref={ref}>
          <h2 className='text-center font-bold text-2xl lg:text-4xl text-yel pt-8 lg:pt-16'>Semua Anggota</h2>
          
          <div className='mt-11 flex flex-wrap justify-around lg:pt-4 lg:px-32'>
            <div className='contaniner mb-4 lg:mb-16'>
              <img src="/asset/member/wava.jpg" alt="kadiv" className='rounded-full w-20 lg:w-44 mx-4 border border-secbg shadow-md'/>
              <h4 className='mt-2 text-md lg:text-xl font-bold text-center'>Wava</h4>
              <p className='text-sm lg:text-lg font-semibold text-center'>3130022043</p>
            </div>
            <div className='contaniner mb-4 lg:mb-16'>
              <img src="/asset/member/ainin.jpg" alt="kadiv" className='rounded-full w-20 lg:w-44 mx-4 border border-secbg shadow-md'/>
              <h4 className='mt-2 text-md lg:text-xl font-bold text-center'>Ainin</h4>
              <p className='text-sm lg:text-lg font-semibold text-center'>3130021001</p>
            </div>
            <div className='contaniner mb-4 lg:mb-16'>
              <img src="/asset/member/fatur.jpg" alt="kadiv" className='rounded-full w-20 lg:w-44 mx-4 border border-secbg shadow-md'/>
              <h4 className='mt-2 text-md lg:text-xl font-bold text-center'>Fatkhur</h4>
              <p className='text-sm lg:text-lg font-semibold text-center'>3130021003</p>
            </div>
            <div className='contaniner mb-4 lg:mb-16'>
              <img src="/asset/member/chelsy.jpg" alt="kadiv" className='rounded-full w-20 lg:w-44 mx-4 border border-secbg shadow-md'/>
              <h4 className='mt-2 text-md lg:text-xl font-bold text-center'>Chelsy</h4>
              <p className='text-sm lg:text-lg font-semibold text-center'>3130021028</p>
            </div>
            <div className='contaniner mb-4 lg:mb-16'>
              <img src="/asset/member/rio.jpg" alt="kadiv" className='rounded-full w-20 lg:w-44 mx-4 border border-secbg shadow-md'/>
              <h4 className='mt-2 text-md lg:text-xl font-bold text-center'>Rio</h4>
              <p className='text-sm lg:text-lg font-semibold text-center'>3130021011</p>
            </div>
            <div className='contaniner mb-4 lg:mb-16'>
              <img src="/asset/member/lutfiah.jpg" alt="kadiv" className='rounded-full w-20 lg:w-44 mx-4 border border-secbg shadow-md'/>
              <h4 className='mt-2 text-md lg:text-xl font-bold text-center'>Lutfiah</h4>
              <p className='text-sm lg:text-lg font-semibold text-center'>3130021009</p>
            </div>
            <div className='contaniner mb-4 lg:mb-16'>
              <img src="/asset/member/obit.jpg" alt="kadiv" className='rounded-full w-20 lg:w-44 mx-4 border border-secbg shadow-md'/>
              <h4 className='mt-2 text-md lg:text-xl font-bold text-center'>Robith</h4>
              <p className='text-sm lg:text-lg font-semibold text-center'>3130022044</p>
            </div>
            <div className='contaniner mb-4 lg:mb-16'>
              <img src="/asset/member/ifa.jpg" alt="kadiv" className='rounded-full w-20 lg:w-44 mx-4 border border-secbg shadow-md'/>
              <h4 className='mt-2 text-md lg:text-xl font-bold text-center'>Ifa</h4>
              <p className='text-sm lg:text-lg font-semibold text-center'>3130021010</p>
            </div>
            <div className='contaniner mb-4 lg:mb-16'>
              <img src="/asset/member/andika.jpg" alt="kadiv" className='rounded-full w-20 lg:w-44 mx-4 border border-secbg shadow-md'/>
              <h4 className='mt-2 text-md lg:text-xl font-bold text-center'>Andika</h4>
              <p className='text-sm lg:text-lg font-semibold text-center'>3130022036</p>
            </div>
            <div className='contaniner mb-4 lg:mb-16'>
              <img src="/asset/member/alifian.jpg" alt="kadiv" className='rounded-full w-20 lg:w-44 mx-4 border border-secbg shadow-md'/>
              <h4 className='mt-2 text-md lg:text-xl font-bold text-center'>Alifian</h4>
              <p className='text-sm lg:text-lg font-semibold text-center'>3130021024</p>
            </div>
            
          </div>
        </div>
      </section>

    <Footer />
    </div>
  )
}

export default Member
