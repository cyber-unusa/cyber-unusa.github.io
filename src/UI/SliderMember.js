import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { mockUp } from "../assets/img/memberTeam";

export const SliderMember = (data) => {
 const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
  return (
    <div className="container grid grid-cols-1 gap-3 p-4">
      <Slider {...sliderSettings} >
        {data.map((belajar ,index) => {
          return (
            <>
              <div key={index} className="membersz mx-3 mt-4 text-center">
                <div className="lg:h-60 drop-shadow-lg">
                  {mockUp(belajar.foto)}
                </div>
                <p
                  className={
                    belajar.warna === "hijau"
                      ? "font-medium  text-xl text-primary"
                      : "font-medium  text-xl text-white"
                  }
                >
                  {/* {belajar.name} */}
                </p>
                <p
                  className={
                    belajar.warna === "hijau"
                      ? "font-medium italic text-xl text-primary"
                      : "font-medium italic text-xl text-white"
                  }
                >
                  {/* {belajar.jabatan} */}
                </p>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};


