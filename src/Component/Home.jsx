import React, { useRef } from 'react'
import { Navbar } from '../UI/Navbar'
import Footer from '../UI/Footer'

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
                        <h1 className='text-2xl lg:text-5xl font-bold text-primary'>UKM <span className='block font-bold'>CYBER UNUSA</span></h1>
                        <h2 className='font-semibold text-lowprim mb-5 text-md'>UNIVERSITAS NAHDLATUL ULAMA SURABAYA</h2>
                        <p className='font-base lg:text-md mb-10'>UKM CYBER merupakan sebuah wadah bagi mahasiswa UNUSA untuk mempelajari tentang dunia teknologi baik itu web developer, jaringan komputer, AR/VR, dan masih banyak lagi. wadah ini digunakan untuk mempersiapkan lulusan-lulusan yang tentunya siap kerja dan tidak ketinggalan zaman.</p>

                        <button onClick={handleClick} className='py-3 px-4 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>Read More</button>
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
                            <h2 className='text-xl lg:text-3xl font-bold text-primary mb-4'>PENGURUS INTI</h2>
                            <p className='font-base lg:text-md mb-2'>UKM CYBER UNUSA memiliki beberapa pengurus inti yang dapat anda hubungi, diantaranya Pembina, Ketua, serta Sekretaris</p><br />
                            <a href="/member" className='py-3 px-4 mt-8 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>Lihat anggota</a>
                        </div>
                        <div className="flex flex-wrap space-x-6 justify-around lg:justify-arround w-full px-4 my-8 lg:w-1/2 mx-auto">
                            <div className="imgpeng">
                                <img src="/asset/people/leh.jpg" alt="" className='w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Galeh<span className='block'>Ketua</span></h4>
                            </div>
                            <div className="imgpeng">
                                <img src="/asset/people/yul.jpg" alt="" className='w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Yuliana<span className='block'>Sekretaris 1</span></h4>
                            </div>
                            <div className="imgpeng">
                                <img src="/asset/people/nandini.jpg" alt="" className='w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Nandini<span className='block'>Sekretaris 2</span></h4>
                            </div>
                            <div className="imgpeng">
                                <img src="/asset/people/riz.jpg" alt="" className='w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl' />
                                <h4 className='font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm'>Rizqi PNB. S.T., M.T<span className='block'>Pembina</span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* event */}
        <section id='event pt-36 pb-32'>
            <h2 className='text-3xl lg:text-2xl font-bold text-center mb-16 text-yel'>KEGIATAN UKM CYBER</h2>
            
            <div className="container mx-auto px-6 flex flex-wrap gap-6 justify-center relative">
            <img src="asset/vector/v2.png" alt="decoration" className='absolute right-1 -top-44 w-60 hidden lg:block '/>
                <div className="rounded-lg shadow-lg overflow-hidden mb-10 lg:w-72">
                    <img src="/asset/banner/ux.jpg" alt="banner" className='w-full'/>
                    <div className='py-6 px-4'>
                        <div className="font-semibold text-xl">Pelatihan Desaim UI/UX</div>
                        <div className="font-semibold mb-2 text-lg">Tanggal : -</div>
                        <div className="font-semibold text-xl text-end">
                            <p className='font-normal text-sm mb-4 text-left'>Pelatihan UI/UX dari dasar sampai mahir, dengan instruktur yang sudah ber kompeten di bidangnya</p>
                            <a href="/cooming" className='py-1 px-1 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-right'>Cooming soon...</a>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden mb-10 lg:w-72">
                    <img src="/asset/banner/ads.jpg" alt="banner" className='w-full'/>
                    <div className='py-6 px-4'>
                        <div className="font-semibold text-xl">Pelatihan Digital Marketing</div>
                        <div className="font-semibold mb-2 text-lg">Tanggal : - </div>
                        <div className="font-semibold text-xl text-end">
                            <p className='font-normal text-sm mb-4 text-left'>Pelatihan digital Marketing dari pemula sampai bisa, dan tentunya akan dibimbing dengan instruktur yang sudah berpengalaman</p>
                            <a href="/cooming" className='py-1 px-1 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-right'>Cooming soon...</a>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg overflow-hidden mb-10 lg:w-72">
                    <img src="/asset/banner/react.jpg" alt="banner" className='w-full'/>
                    <div className='py-6 px-4'>
                        <div className="font-semibold text-xl">Pelatihan React JS</div>
                        <div className="font-semibold mb-2 text-lg">Tanggal : </div>
                        <div className="font-semibold text-xl text-end">
                            <p className='font-normal text-sm mb-4 text-left'>Pengen menjadi web front end handal, ikuti pelatihan react js</p>
                            <a href="/cooming" className='py-1 px-1 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out text-right'>Cooming soon...</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Dokumenter */}
        <section id='dokumenter' className='pt-36 pb-32'>
            <div className="bg-secbg lg:py-8">
                <h2 className='text-3xl lg:text-2xl font-bold text-center mb-16 text-primary pt-8'>DOKUMENTER</h2>
                
                <div className="container px-6 mx-auto flex flex-wrap gap-8 justify-center">
                    <div className="rounded-lg shadow-md mb-10 bg-white overflow-hidden w-80 lg:w-72">
                        <img src="/asset/doc/digital.jpg" alt="dokumentasi" className='w-full' />
                        <div className="py-6 px-4">
                            <h3 className='font-semibold text-xl mb-2'>Pelatihan Web CMS</h3>
                            <p>Pelatihan web builder menggunakan weebly dan juga wordpress. </p>
                            <div className="font-semibold text-xl mb-2 mt-3 text-end text-primary">
                                <a href="/cooming" className='py-1 px-1 mb-4 text-base font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>Lihat...</a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md mb-10 bg-white overflow-hidden w-80 lg:w-72">
                        <img src="/asset/doc/bukber.jpg" alt="dokumentasi" className='w-full' />
                        <div className="py-6 px-4">
                            <h3 className='font-semibold text-xl mb-2'>Bukber & Santunan Anak Yatim</h3>
                            <p>UKM Cyber UNUSA mengadakan bukber sekaligus santunan anak yatim</p>
                            <div className="font-semibold text-xl mb-2 mt-3 text-end text-primary">
                                <a href="/cooming" className='py-1 px-1 mb-4 text-base font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>Lihat...</a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md mb-10 bg-white overflow-hidden w-80 lg:w-72">
                        <img src="/asset/doc/ux.jpg" alt="dokumentasi" className='w-full' />
                        <div className="py-6 px-4">
                            <h3 className='font-semibold text-xl mb-2'>Worksop UI/UX Batch 1</h3>
                            <p>Kegiatan bimbingan kepada mahasiswa UNUSA khususnya FEBTD UNUSA untuk mengikuti PKM</p>
                            <div className="font-semibold text-xl mb-2 mt-3 text-end text-primary">
                                <a href="/cooming" className='py-1 px-1 mb-4 text-base font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>Lihat...</a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md mb-10 bg-white overflow-hidden w-80 lg:w-72">
                        <img src="/asset/doc/word.jpg" alt="dokumentasi" className='w-full' />
                        <div className="py-6 px-4">
                            <h3 className='font-semibold text-xl mb-2'>Worksop Microsoft Word</h3>
                            <p>Kegiatan Pelatihan microsoft word dari dari 0 sampai mahir oleh ukm cyber untuk Mahasiswa UNUSA</p>
                            <div className="font-semibold text-xl mb-2 mt-3 text-end text-primary">
                                <a href="/cooming" className='py-1 px-1 mb-4 text-base font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>Lihat...</a>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg shadow-md mb-10 bg-white overflow-hidden w-80 lg:w-72">
                        <img src="/asset/doc/camp.jpg" alt="dokumentasi" className='w-full' />
                        <div className="py-6 px-4">
                            <h3 className='font-semibold text-xl mb-2'>CYBER DOLAN</h3>
                            <p>Kegiatan Camping di Kebun ROJO CAMP Batu Malang</p>
                            <div className="font-semibold text-xl mb-2 mt-3 text-end text-primary">
                                <a href="/cooming" className='py-1 px-1 mb-4 text-base font-bold rounded-lg hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out'>Lihat...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact US */}
        <section id='contact' className='pt-8 pb-32'>
            <h2 className='text-2xl lg:text-3xl font-bold text-center mb-10 text-yel'>HUBUNGI KAMI</h2>

            <div className="container">
                <div className="lg:w-96 text-center px-4 mx-auto">
                    <h3>Anda dapat bekerja sama dengan <span className='font-bold'>UKM CYBER UNUSA</span> dengan menghubungi sosial media kami dibawah ini:</h3>
                    <div className="flex items-center">
                        {/* Youtube */}
                        <a href="https://www.youtube.com/channel/UC7YBQJ7wAoXW_W5VtouTLyA" target='_blank' className='mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-red-600 hover:bg-lowprim hover:text-white'>
                        <svg  role="img" className='fill-current' width='52' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/cyberunusa_official" target='_blank' className='mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-pink-500 hover:bg-lowprim hover:text-white'>
                        <svg className='fill-current' width='52' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                        </a>

                        {/* Discord */}
                        <a href="https://discord.gg/Q6qH4Xf9JR" target='_blank' className='mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-indigo-600 hover:bg-lowprim hover:text-white'>
                        <svg className='fill-current' width='52' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
                        </a>

                        {/* Email */}
                        <button onClick={copas} className='mt-16 w-20 h-20 mr-3  flex rounded-full justify-center items-center border border-slate-300 hover:border-lowprim text-red-400 hover:bg-lowprim hover:text-white'>
                        <svg className='fill-current' width='52' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
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
