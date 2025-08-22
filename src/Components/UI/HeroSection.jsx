import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="container">
      <div className="flex flex-wrap flex-row-reverse">
        <div className="w-full self-center px-4 lg:w-1/2">
          <h1 className="text-2xl lg:text-5xl font-bold text-primary font-rubik">
            UKM <span className="block font-bold">CYBER UNUSA</span>
          </h1>
          <h2 className="font-semibold text-lowprim mb-5 text-md font-nunito">
            UNIVERSITAS NAHDLATUL ULAMA SURABAYA
          </h2>
          <p className="font-base lg:text-md mb-10 font-poppin">
            UKM CYBER merupakan sebuah wadah bagi mahasiswa UNUSA untuk
            mempelajari tentang dunia teknologi baik itu web developer, jaringan
            komputer, AR/VR, dan masih banyak lagi. wadah ini digunakan untuk
            mempersiapkan lulusan-lulusan yang tentunya siap kerja dan tidak
            ketinggalan zaman.
          </p>

          <Link to="/about">
            <button className="py-3 px-4 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out font-poppin">
              Read More
            </button>
          </Link>
        </div>
        <div className="w-full self-end px-4 lg:w-1/2">
          <div className="mt-10 relative">
            <img
              src="asset/people/ukm.png"
              alt="ukm cyber"
              className="max-w-full mx-auto"
            />
            <span className="absolute -bottom-16 -z-10 left-1/2 -translate-x-1/2 w-10/12 lg:w-10/12">
              <img src="asset/vector/v0.png" alt="ukm cyber" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
