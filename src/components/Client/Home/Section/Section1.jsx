import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { HomeSlideItems } from "../../../../Utils/temp";
import { BsPlayFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { useStateProvider } from "../../../../Context/StateProvider";
import { useData } from "../../../../Context/DataProviders";

const Section1 = () => {
  const { setIsPlay, isPlay } = useStateProvider();
  const { Slides } = useData();
  return (
    <>
      <div className="w-full h-full relative">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper -z-10"
        >
          {Slides.map((items) => (
            <>
              <SwiperSlide>
                <img
                  src={items.image}
                  alt="banner"
                  className="object-cover  w-full z-0"
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>

        <div className="text-white bg-[rgba(0,0,0,0.7)] absolute  d:w-[550px] p:w-[250px] p:right-0 d:right-32  z-10 d:bottom-20 p:bottom-0 d:text-[17px] p:text-[10px]">
          <p className="d:py-6 d:px-5 p:p-2 ">
            Công ty TOBA chuyển thành công ty Cổ phần nông nghiệp sao vàng .
            Lĩnh vực, ngành nghề chính là: sản xuất, kinh doanh các loại phân
            bón (phân bón lá, phân bón gốc, phân hữu cơ, phân vi sinh...); sản
            xuất, sang chai đóng gói, kinh doanh thuốc bảo vệ thực vật; Sản
            xuất, kinh doanh thức ăn bổ sung, các chế phẩm sinh học dùng trong
            nuôi trồng thủy sản; kinh doanh hóa chất thương mại dùng trong nông
            nghiệp.
          </p>
        </div>
        <div className="flex h-full w-full justify-center items-center text-white absolute top-0 z-20 ">
          <BsPlayFill
            className=" d:text-[100px] p:text-[50px] border-2 rounded-full d:p-5 p:p-0 hover:scale-125 duration-500 cursor-pointer"
            onClick={() => setIsPlay(true)}
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
