import React from 'react'
import { Navbar } from '../UI/Navbar'
import ukm from '../assets/img/ukm.png'
import abs from '../assets/img/abs.png'
import abs1 from '../assets/img/abs1.png'
import abs2 from '../assets/img/abs2.png'
import galeh from '../assets/img/gal.JPG'

const Home = () => {
  return (
    <div>

        <Navbar />

        {/* Hero section */}
        <section id='home' className='pt-2'>
            <div className="container">
                <div className='flex flex-wrap flex-row-reverse'>
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className='text-2xl lg:text-5xl font-bold text-primary'>UKM <span className='block font-bold'>CYBER UNUSA</span></h1>
                        <h2 className='font-semibold text-lowprim mb-5 text-md'>UNIVERSITAS NAHDLATUL ULAMA SURABAYA</h2>
                        <p className='font-base lg:text-md mb-10'>UKM CYBER merupakan sebuah wadah bagi mahasiswa UNUSA untuk mempelajari tentang dunia teknologi baik itu web developer, jaringan komputer, AR/VR, dan masih banyak lagi. wadah ini digunakan untuk mempersiapkan lulusan-lulusan yang tentunya siap kerja dan tidak ketinggalan zaman.</p>

                        <a href="#" className='py-3 px-4 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>Read More</a>
                    </div>
                    <div className='w-full self-end px-4 lg:w-1/2'>
                        <div className='mt-10 relative'>
                            <img src={ukm} alt="ukm cyber" className='max-w-full mx-auto' />
                            <span className='absolute -bottom-16 -z-10 left-1/2 -translate-x-1/2 w-10/12 lg:w-10/12'>
                                <img src={abs} alt="ukm cyber"/> 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pengurus Inti */}
        <section id='pengurus' className='pt-36 pb-32'>
            <div className="bg bg-secbg lg:py-16">
                <div className="container relative">
                    <img src={abs1} alt="abstract" className='absolute -top-28 -left-16 w-28 hidden lg:block'/>
                    <div className="flex flex-wrap lg:justify-around">
                        <div className="w-full my-8 px-4 mb-10 lg:w-1/3">
                            <h2 className='text-xl lg:text-3xl font-bold text-primary mb-4'>PENGURUS INTI</h2>
                            <p className='font-base lg:text-md mb-2'>UKM CYBER UNUSA memiliki beberapa pengurus inti yang dapat anda hubungi, diantaranya Pembina, Ketua, serta Sekretaris</p><br />
                            <a href="#" className='py-3 px-4 mt-8 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>Lihat anggota</a>
                        </div>
                        <div className="flex flex-wrap space-x-6 justify-around lg:justify-end w-full px-4 my-4 lg:w-1/2">
                            <div className="imgpeng">
                                <img src={galeh} alt="" className='w-32 lg:h-36 lg:w-44 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Galeh<span className='block'>Ketua</span></h4>
                            </div>
                            <div className="imgpeng">
                                <img src={galeh} alt="" className='w-32 lg:h-36 lg:w-44 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Yuliana<span className='block'>Sekretaris</span></h4>
                            </div>
                            <div className="imgpeng">
                                <img src={galeh} alt="" className='w-32 lg:h-36 lg:w-44 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Rizqi PNB. S.T., M.T<span className='block'>Pembina</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='event pt-36 pb-32'>
            <h2 className='text-3xl lg:text-2xl font-bold text-center mb-16 text-yel'>KEGIATAN UKM CYBER</h2>

            <div className="container mx-auto px-6 flex flex-wrap gap-6 justify-center">
                <div className="rounded-lg shadow-lg overflow-hidden mb-10 lg:w-72">
                    <img src={galeh} alt="banner" className='w-full'/>
                    <div className='py-6 px-4'>
                        <div className="font-semibold text-xl mb2">Tanggal :</div>
                        <div className="font-semibold text-xl mb2">Tempat : </div>
                        <div className="font-semibold text-xl mb2 text-end">
                            <p className='font-normal text-sm mb-4 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur?</p>
                            <a href="#" className='py-1 px-1 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-right'>Register Now</a>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden mb-10 lg:w-72">
                    <img src={galeh} alt="banner" className='w-full'/>
                    <div className='py-6 px-4'>
                        <div className="font-semibold text-xl mb2">Tanggal :</div>
                        <div className="font-semibold text-xl mb2">Tempat : </div>
                        <div className="font-semibold text-xl mb2 text-end">
                            <p className='font-normal text-sm mb-4 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur?</p>
                            <a href="#" className='py-1 px-1 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-right'>Register Now</a>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden mb-10 lg:w-72">
                    <img src={galeh} alt="banner" className='w-full'/>
                    <div className='py-6 px-4'>
                        <div className="font-semibold text-xl mb2">Tanggal :</div>
                        <div className="font-semibold text-xl mb2">Tempat : </div>
                        <div className="font-semibold text-xl mb2 text-end">
                            <p className='font-normal text-sm mb-4 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, tenetur?</p>
                            <a href="#" className='py-1 px-1 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-right'>Register Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home
