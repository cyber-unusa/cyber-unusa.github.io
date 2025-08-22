import React, { useRef } from "react";
import { Navbar } from "../UI/Navbar";
import Footer from "../UI/Footer";
import { SliderMember } from "../UI/SliderMember";
import {
  cyberBelajar,
  cyberBerbagi,
  cyberEvent,
  cyberMengajar,
} from "../../assets/data/dataMember";

const Member = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />

      {/* Main Hero */}
      <section id="memberHero" className="pt-2 mt-20 lg:mt-18">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 mx-auto lg:w-1/2">
              <h1 className="text-2xl lg:text-5xl font-bold text-primary mb-4">
                TIM KAMI <span className="block">DI UKM CYBER</span>
              </h1>
              <p className="font-base lg:text-md mb-8">
                UKM CYBER UNUSA memiliki 4 divisi utama, yaitu cyber berbagi,
                cyber belajar, cyber mengajar dan yang terakhir cyber event. Ke
                empat divisi ini dibentuk dalam rangka memenuhi kebutuhan
                struktur kepengurusan organisasi di UKM CYBER.{" "}
              </p>
              <button
                onClick={handleClick}
                className="py-3 px-4 text-base font-bold rounded-lg text-white bg-lowprim hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out hidden lg:inline"
              >
                Read More
              </button>
            </div>
            <div className="w-full self-center px-4 py-8 mx-auto lg:w-1/3">
              <div className="flex flex-wrap mx-auto justify-between ">
                <div className="mb-4">
                  <img
                    src="/asset/people/nan.jpg"
                    alt="member"
                    className="rounded-full w-28 mx-4 border border-secbg shadow-md"
                  />
                  <h4 className="font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm">
                    Nanda<span className="block">Cyber Belajar</span>
                  </h4>
                </div>
                <div>
                  <img
                    src="/asset/people/dur.jpg"
                    alt="member"
                    className="rounded-full w-28 mx-4 shadow-md"
                  />
                  <h4 className="font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm">
                    Abdur<span className="block">Cyber Mengajar</span>
                  </h4>
                </div>
                <div>
                  <img
                    src="/asset/people/dja.jpg"
                    alt="member"
                    className="rounded-full w-28 mx-4"
                  />
                  <h4 className="font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm">
                    Nadja<span className="block">Cyber Berbagi</span>
                  </h4>
                </div>
                <div>
                  <img
                    src="/asset/people/yan.jpg"
                    alt="member"
                    className="rounded-full w-28 mx-4"
                  />
                  <h4 className="font-semibold bg-lowprim my-2 text-white p-2 rounded rounded-tr-3xl shadow-sm">
                    Rian<span className="block">Cyber Event</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* List Of Member */}
      <section className="bg-secbg">
        <div className="bg-secbg mt-28 " ref={ref}>
          <h2 className="text-center font-bold text-2xl lg:text-4xl text-yel pt-8 lg:pt-16">
            Semua Anggota
          </h2>

          <div className="mt-11 flex flex-wrap justify-around text-center  lg:pt-4 lg:px-32">
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/wava.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Wava
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130022043
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/ainin.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Ainin
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130021001
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/fatur.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Fatkhur
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130021003
                </p>
              </div>
            </div>

            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/chelsy.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Chelsy
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130021028
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/rio.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Rio
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130021011
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/lutfiah.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Lutfiah
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130021009
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/obit.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Robit
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130022044
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/ifa.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Ifa
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130021010
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/3130022035_ilham.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Ilham
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130022035
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/citra_4330022014.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Citra
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  4330022014
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/3130021060_farhan.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Febrian
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130021060
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/fira_4330022016.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Fira
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  4330022016
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/dhava_4330022011.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Dhava
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  4330022011
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/farhan.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Farhan
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130022022
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/hasib.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Hasib
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130022002
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/alifian.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Alifian
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130022024
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/andika.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Andika
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130022036
                </p>
              </div>
            </div>
            <div className="contaniner mb-4 lg:mb-16 flex-row justify-center items-center">
              <img
                src="/asset/member/halili_3130022042.jpg"
                alt="kadiv"
                className="rounded-3xl w-20 lg:w-44 mx-4 border border-secbg shadow-md"
              />
              <div className="bar md:p-1 lg:p-2 mt-4 m-auto w-4/5   bg-primary justify-center text-white lg:rounded-t-3xl max-md:rounded-t-2xl md:rounded-t-2xl max-sm:rounded-t-2xl">
                <h4 className=" text-md lg:text-xl font-bold text-center">
                  Halili
                </h4>
                <p className="text-sm lg:text-lg font-semibold text-center">
                  3130022042
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**List Divisi */}
      <section id="divisi1" className="mt-28">
        <div className="container flex flex-wrap lg:m-auto">
          <div
            id="cyber-belajar"
            className=" p-3 bg-primary sm:basis-full lg:basis-2/4 md:basis-full text-center rounded-r-2xl"
          >
            <h1 className="text-white lg:text-2xl font-bold text-center">
              CYBER BELAJAR
            </h1>
            {/** */}
            {SliderMember(cyberBelajar)}
          </div>
          <div
            id="cyber-mengajar"
            className=" p-3 sm:basis-full lg:basis-1/2 md: basis-full text-center "
          >
            <h1 className="text-primary lg:text-2xl font-bold text-center">
              CYBER MENGAJAR
            </h1>
            {SliderMember(cyberMengajar)}
          </div>
        </div>
      </section>

      <section id="divisi2" className="lg:mb-32">
        <div className="container flex  flex-wrap-reverse lg:m-auto">
          <div
            id="cyber-belajar"
            className=" p-3 bg-white sm:basis-full lg:basis-1/2 text-center rounded-r-3xl"
          >
            <h1 className="text-primary lg:text-2xl font-bold text-center">
              CYBER BERBAGI
            </h1>
            {/** */}
            {SliderMember(cyberBerbagi)}
          </div>
          <div
            id="cyber-mengajar"
            className=" p-3 bg-primary sm:basis-full lg:basis-1/2 text-center rounded-l-2xl"
          >
            <h1 className="text-white lg:text-2xl font-bold text-center">
              CYBER EVENT
            </h1>
            {SliderMember(cyberEvent)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Member;
