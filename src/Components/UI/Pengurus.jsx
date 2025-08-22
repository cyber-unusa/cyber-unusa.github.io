import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Pengurus() {
  const ref = useRef(null);

  return (
    <div className="bg-secbg lg:py-16" ref={ref}>
      <div className="container relative">
        <img
          src="asset/vector/v1.png"
          alt="abstract"
          className="absolute -top-28 -left-16 w-28 hidden lg:block"
        />
        <div className="flex flex-wrap lg:justify-around">
          <div className="w-full my-36 px-8 mb-10 lg:w-1/3">
            <h2 className="text-xl lg:text-3xl font-bold text-primary mb-4 font-nunito">
              PENGURUS INTI
            </h2>
            <p className="font-base lg:text-md mb-2 font-poppin">
              UKM CYBER UNUSA memiliki beberapa pengurus inti yang dapat anda
              hubungi, diantaranya Pembina, Ketua, serta Sekretaris
            </p>
            <br />
            <Link
              to="/member"
              className="py-3 px-4 mt-8 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out font-poppin"
            >
              Lihat anggota
            </Link>
          </div>
          <div className="flex flex-wrap space-x-6 justify-around lg:justify-arround w-full px-4 my-8 lg:w-1/2 mx-auto">
            <div className="imgpeng">
              <img
                src="/asset/people/leh.jpg"
                alt=""
                className="w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl"
              />
              <h4 className="font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm font-nunito">
                Galeh<span className="block">Ketua</span>
              </h4>
            </div>
            <div className="imgpeng">
              <img
                src="/asset/people/yul.jpg"
                alt=""
                className="w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl"
              />
              <h4 className="font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm font-nunito">
                Yuliana<span className="block">Sekretaris 1</span>
              </h4>
            </div>
            <div className="imgpeng">
              <img
                src="/asset/people/nandini.jpg"
                alt=""
                className="w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl"
              />
              <h4 className="font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm font-nunito">
                Nandini<span className="block">Sekretaris 2</span>
              </h4>
            </div>
            <div className="imgpeng">
              <img
                src="/asset/people/riz.jpg"
                alt=""
                className="w-32 lg:h-36 lg:w-48 rounded-tr-3xl rounded-bl-3xl"
              />
              <h4 className="font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm font-nunito">
                Rizqi PNB. S.T., M.T<span className="block">Pembina</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
