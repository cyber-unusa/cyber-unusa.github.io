import { Navbar } from "../UI/Navbar"
import { Link } from 'react-router-dom'

export const About=()=>{
    return (
      <>
        <Navbar />
        <div className="container flex mt-[60px] px-[110px]">
          <img
            src="/asset/cyber-logo-2.png"
            alt=""
            className="w-5/12 h-5/12 mr-2 basis-2/4"
          />
          <div className="contens basis-2/4 text-left pl-[55px] pt-[100px]">
            <p className="font-extrabold text-5xl pt-[5px] text-[#13A085] font-rubik">
              SEJARAH UKM
            </p>
            <p className="font-extrabold text-5xl pt-[5px] text-[#13A085] font-rubik">
              CYBER SECURITY
            </p>
            <p className="text-[#26B99A] font-bold pt-[5px]">
              UNIVERSITAS NAHDLATUL ULAMA SURABAYA
            </p>
            <p className="pt-[40px] font-poppin">
              UKM Cyber Security Universitas Nahdlatul Ulama Surabaya dibentuk
              oleh mahasiswa angkatan 2018. Awal mula terbentuknya UKM ini
              adalah Cyber di bentuk berlatar belakang karena belum ada wadah
              yang dapat menaungi mahasiswa unusa dalam hal teknologi.
            </p>
            <p className="pt-[20px] font-poppin">
              UKM Cyber sendiri bergerak di bidang teknologi. Seperti editing,
              programming, dan networking
            </p>
          </div>
        </div>
        <div className="container  mt-[60px] px-[110px]">
          <p className="text-center font-rubik font-extrabold text-3xl text-[#13A085]">
            MAKNA LAMBANG UKM CYBER SECURITY
          </p>
          <div className="flex mt-[60px]">
            <div className="contens basis-2/4 text-left pl-[55px] pt-[90px] pr-[10px] ">
              <p className="font-poppin">
                9 Bintang melambangkan visi dari Unit Kegiatan Mahasiswa Cyber
                UNUSA yang rahmatan lil alamin
              </p>
              <p className="pt-[60px] font-poppin">
                Smarthphone, Komputer, Perisai Gembok, Internet/Browser: Dengan
                arti Unit Kegiatan Mahasiswa Cyber UNUSA fokus dalam bidang
                cyber security, namun juga bersifat open universal learning.
              </p>
              <p className="pt-[100px] font-poppin">
                Bentuk perisai: melambangkan keamanan
              </p>
            </div>
            <img
              src="/asset/makna-logo.png"
              alt=""
              className=" w-5/12 h-5/12 basis-2/4"
            />
          </div>
        </div>
      </>
    );
}