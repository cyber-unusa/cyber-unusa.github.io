import React, { useRef } from 'react'
import { Navbar } from '../UI/Navbar'
import Footer from '../UI/Footer'
import {  discord, gmail, instagram, youtube } from "../assets/img/Icons";

const Home = () => {

    const ref = useRef(null)

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const copas = () => {
        const textToCopy = "cyber@unusa.ac.id";
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = textToCopy;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        tempTextArea.setSelectionRange(0, 99999); 
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
        alert("berhasil di salin")
    }


  return (
    <div>

        <Navbar />

        {/* Hero section */}
        <section id='home' className='pt-2 mt-24 lg:mt-14'>
            <div className="container">
                <div className='flex flex-wrap flex-row-reverse'>
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className='text-2xl lg:text-5xl font-bold text-primary font-rubik'>UKM <span className='block font-bold'>CYBER UNUSA</span></h1>
                        <h2 className='font-semibold text-lowprim mb-5 text-md font-nunito'>UNIVERSITAS NAHDLATUL ULAMA SURABAYA</h2>
                        <p className='font-base lg:text-md mb-10 font-poppin'>UKM CYBER merupakan sebuah wadah bagi mahasiswa UNUSA untuk mempelajari tentang dunia teknologi baik itu web developer, jaringan komputer, AR/VR, dan masih banyak lagi. wadah ini digunakan untuk mempersiapkan lulusan-lulusan yang tentunya siap kerja dan tidak ketinggalan zaman.</p>

                        <button onClick={handleClick} className='py-3 px-4 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out font-poppin'>Read More</button>
                    </div>
                    <div className='w-full self-end px-4 lg:w-1/2'>
                        <div className='mt-10 relative'>
                            <img src="asset/people/ukm.png" alt="ukm cyber" className='max-w-full mx-auto' />
                            <span className='absolute -bottom-16 -z-10 left-1/2 -translate-x-1/2 w-10/12 lg:w-10/12'>
                                <img src="asset/vector/v0.png" alt="ukm cyber"/> 
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Pengurus Inti */}
        <section id='pengurus' className='pt-36 pb-32'>
            <div className="bg-secbg lg:py-16" ref={ref}>
                <div className="container relative">
                    <img src="asset/vector/v1.png" alt="abstract" className='absolute -top-28 -left-16 w-28 hidden lg:block'/>
                    <div className="flex flex-wrap lg:justify-around">
                        <div className="w-full my-36 px-8 mb-10 lg:w-1/3">
                            <h2 className='text-xl lg:text-3xl font-bold text-primary mb-4 font-nunito'>PENGURUS INTI</h2>
                            <p className='font-base lg:text-md mb-2 font-poppin'>UKM CYBER UNUSA memiliki beberapa pengurus inti yang dapat anda hubungi, diantaranya Pembina, Ketua, serta Sekretaris</p><br />
                            <a href="/member" className='py-3 px-4 mt-8 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out font-poppin'>Lihat anggota</a>
                        </div>
                        <div className="flex flex-wrap space-x-6 justify-around lg:justify-arround w-full px-4 my-8 lg:w-1/2 mx-auto">
                            <div className="imgpeng">
                                <img src="/asset/people/leh.jpg" alt="" className='w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm font-nunito'>Galeh<span className='block'>Ketua</span></h4>
                            </div>
                            <div className="imgpeng">
                                <img src="/asset/people/yul.jpg" alt="" className='w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm font-nunito'>Yuliana<span className='block'>Sekretaris 1</span></h4>
                            </div>
                            <div className="imgpeng">
                                <img src="/asset/people/nandini.jpg" alt="" className='w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm font-nunito'>Nandini<span className='block'>Sekretaris 2</span></h4>
                            </div>
                            <div className="imgpeng">
                                <img src="/asset/people/riz.jpg" alt="" className='w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm font-nunito'>Rizqi PNB. S.T., M.T<span className='block'>Pembina</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* event */}
        <section id='event pt-36 pb-32'>
            <h2 className='text-3xl lg:text-2xl font-bold text-center mb-16 text-yel font-rubik'>KEGIATAN UKM CYBER</h2>
            
            <div className="container mx-auto px-6 flex flex-wrap gap-6 justify-center relative">
            <img src="asset/vector/v2.png" alt="decoration" className='absolute right-1 -top-44 w-60 hidden lg:block '/>
                <div className="rounded-lg shadow-lg overflow-hidden mb-10 lg:w-72">
                    <img src="/asset/banner/ux.jpg" alt="banner" className='w-full'/>
                    <div className='py-6 px-4'>
                        <div className="font-semibold text-xl font-nunito">Pelatihan Desaim UI/UX</div>
                        <div className="font-semibold mb-2 text-lg font-nunito">Tanggal : -</div>
                        <div className="font-semibold text-xl text-end">
                            <p className='font-normal text-sm mb-4 text-left font-poppin'>Pelatihan UI/UX dari dasar sampai mahir, dengan instruktur yang sudah ber kompeten di bidangnya</p>
                            <a href="/cooming" className='py-1 px-1 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-right font-poppin'>Cooming soon...</a>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden mb-10 lg:w-72">
                    <img src="/asset/banner/ads.jpg" alt="banner" className='w-full'/>
                    <div className='py-6 px-4'>
                        <div className="font-semibold text-xl font-nunito">Pelatihan Digital Marketing</div>
                        <div className="font-semibold mb-2 text-lg font-nunito">Tanggal : - </div>
                        <div className="font-semibold text-xl text-end">
                            <p className='font-normal text-sm mb-4 text-left font-poppin'>Pelatihan digital Marketing dari pemula sampai bisa, dan tentunya akan dibimbing dengan instruktur yang sudah berpengalaman</p>
                            <a href="/cooming" className='py-1 px-1 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-right font-poppin'>Cooming soon...</a>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden mb-10 lg:w-72">
                    <img src="/asset/banner/react.jpg" alt="banner" className='w-full'/>
                    <div className='py-6 px-4'>
                        <div className="font-semibold text-xl font-nunito">Pelatihan React JS</div>
                        <div className="font-semibold mb-2 text-lg font-nunito">Tanggal : </div>
                        <div className="font-semibold text-xl text-end">
                            <p className='font-normal text-sm mb-4 text-left font-poppin'>Pengen menjadi web front end handal, ikuti pelatihan react js</p>
                            <a href="/cooming" className='py-1 px-1 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-right font-poppin'>Cooming soon...</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Dokumenter */}
        <section id='dokumenter' className='pt-36 pb-32'>
            <div className="bg-secbg lg:py-8">
                <h2 className='text-3xl lg:text-2xl font-bold text-center mb-16 text-primary pt-8 font-rubik'>DOKUMENTER</h2>
                
                <div className="container px-6 mx-auto flex flex-wrap gap-8 justify-center">
                    <div className="rounded-lg shadow-md mb-10 bg-white overflow-hidden w-80 lg:w-72">
                        <img src="/asset/doc/digital.jpg" alt="dokumentasi" className='w-full' />
                        <div className="py-6 px-4">
                            <h3 className='font-semibold text-xl mb-2 font-nunito'>Pelatihan Web CMS</h3>
                            <p className='font-poppin'>Pelatihan web builder menggunakan weebly dan juga wordpress. </p>
                            <div className="font-semibold text-xl mb-2 mt-3 text-end text-primary">
                                <a href="/cooming" className='py-1 px-1 mb-4 text-base font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out font-poppin'>Lihat...</a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md mb-10 bg-white overflow-hidden w-80 lg:w-72">
                        <img src="/asset/doc/bukber.jpg" alt="dokumentasi" className='w-full' />
                        <div className="py-6 px-4">
                            <h3 className='font-semibold text-xl mb- font-nunito'>Bukber & Santunan Anak Yatim</h3>
                            <p className='font-poppin'>UKM Cyber UNUSA mengadakan bukber sekaligus santunan anak yatim</p>
                            <div className="font-semibold text-xl mb-2 mt-3 text-end text-primary">
                                <a href="/cooming" className='py-1 px-1 mb-4 text-base font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out font-poppin'>Lihat...</a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md mb-10 bg-white overflow-hidden w-80 lg:w-72">
                        <img src="/asset/doc/ux.jpg" alt="dokumentasi" className='w-full' />
                        <div className="py-6 px-4">
                            <h3 className='font-semibold text-xl mb-2 font-nunito'>Worksop UI/UX Batch 1</h3>
                            <p className='font-poppin'>Kegiatan bimbingan kepada mahasiswa UNUSA khususnya FEBTD UNUSA untuk mengikuti PKM</p>
                            <div className="font-semibold text-xl mb-2 mt-3 text-end text-primary">
                                <a href="/cooming" className='py-1 px-1 mb-4 text-base font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out font-poppin'>Lihat...</a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md mb-10 bg-white overflow-hidden w-80 lg:w-72">
                        <img src="/asset/doc/word.jpg" alt="dokumentasi" className='w-full' />
                        <div className="py-6 px-4">
                            <h3 className='font-semibold text-xl mb-2 font-nunito'>Worksop Microsoft Word</h3>
                            <p className='font-poppin'>Kegiatan Pelatihan microsoft word dari dari 0 sampai mahir oleh ukm cyber untuk Mahasiswa UNUSA</p>
                            <div className="font-semibold text-xl mb-2 mt-3 text-end text-primary">
                                <a href="/cooming" className='py-1 px-1 mb-4 text-base font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out font-poppin'>Lihat...</a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md mb-10 bg-white overflow-hidden w-80 lg:w-72">
                        <img src="/asset/doc/camp.jpg" alt="dokumentasi" className='w-full' />
                        <div className="py-6 px-4">
                            <h3 className='font-semibold text-xl mb-2 font-nunito'>CYBER DOLAN</h3>
                            <p className='font-poppin'>Kegiatan Camping di Kebun ROJO CAMP Batu Malang</p>
                            <div className="font-semibold text-xl mb-2 mt-3 text-end text-primary">
                                <a href="/cooming" className='py-1 px-1 mb-4 text-base font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out font-poppin'>Lihat...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact US */}
        <section id='contact' className='pt-8 pb-32'>
            <h2 className='text-2xl lg:text-3xl font-bold text-center mb-10 text-yel font-rubik'>HUBUNGI KAMI</h2>

            <div className="container">
                <div className="lg:w-96 text-center px-4 mx-auto">
                    <h3 className='font-poppin'>Anda dapat bekerja sama dengan <span className='font-bold'>UKM CYBER UNUSA</span> dengan menghubungi sosial media kami dibawah ini:</h3>
                    <div className="flex items-center">
                        {/* Youtube */}
                        <a href="https://www.youtube.com/channel/UC7YBQJ7wAoXW_W5VtouTLyA" target='_blank' className='mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-red-600 hover:bg-lowprim hover:text-white'>
                        {youtube()}
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/cyberunusa_official" target='_blank' className='mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-pink-500 hover:bg-lowprim hover:text-white'>
                        {instagram()}
                        </a>

                        {/* Discord */}
                        <a href="https://discord.gg/Q6qH4Xf9JR" target='_blank' className='mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-indigo-600 hover:bg-lowprim hover:text-white'>
                        {discord()}
                        </a>

                        {/* Email */}
                        <button onClick={copas} className='mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-red-400 hover:bg-lowprim hover:text-white'>
                        {gmail()}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Home
