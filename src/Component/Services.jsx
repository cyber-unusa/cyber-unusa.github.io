import Footer from "../UI/Footer";
import { Navbar } from "../UI/Navbar"
import {  money,bag,task } from "../assets/img/Icons";
export const Services=()=>{
    return (
      <>
        <Navbar />
        <section id="head" className="">
          <div className="container px-4 md:px-4 lg:px-16 pb-12 flex flex-col md:flex-row">
            <div className="contens md:basis-1/2 lg:basis-2/4 pt-10 md:pt-20 lg:pt-36">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary">
                PERLU
                <span className="font-bold border-0 rounded-md bg-primary text-white">
                  <span className="px-4 py-6">WEBSITE</span>
                </span>
              </h1>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mt-4">
                TENANG ADA KAMI !!!
              </h1>
              <h2 className="font-semibold text-lowprim mt-2 text-xl md:text-2xl">
                CYBERIN AJA
              </h2>
              <p className="font-poppin mt-4 md:mt-10">
                CYBERIN AJA bakal bikin kamu naik level dengan website dan jasa
                kami yang lainnya. Bantu bisnismu ataupun yang lain menjadi
                digital dan biar orang tau tentang kamu. Yuk jangan lupa
                CYBERINAJA
              </p>
            </div>
            <div className="contens-img md:basis-1/2 lg:basis-2/4 md:mt-12 lg:mt-4">
              <img
                src="/asset/services-img.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section id="whyChooseMe" className="bg-secbg">
          <div className="container text-center py-12">
            <h1 className="text-xl lg:text-3xl font-bold text-primary  ">
              WHY CHOOSE ME?
            </h1>
            <div className="itemsz flex items-center text-center pt-16">
              <div className="basis-3/4 px-10">
                <div className="m-auto w-2/4">{money()}</div>
                <h1 className="mt-12">Paling Murah Dan Terjangkau !!! </h1>
              </div>
              <div className="basis-3/4 px-10">
                <div className="m-auto w-2/4">{bag()}</div>
                <h1 className="mt-12">Professional Team</h1>
              </div>
              <div className="basis-3/4 px-10">
                <div className="m-auto w-2/4">{task()}</div>
                <h1 className="mt-12">Terpercaya Dan Terstruktur</h1>
              </div>
            </div>
          </div>
        </section>
        <section id="WhatWeDo?">
          <div className="container text-center py-12">
            <h1 className="text-xl lg:text-3xl font-bold text-primary  ">
              WHAT WE DO?
            </h1>
            <div className="flex"></div>
          </div>
        </section>
        <Footer />
      </>
    );
}