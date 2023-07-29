import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { HomeSlideItems } from "../../../../Utils/temp";

const Section1 = () => {
  return (
    <>
      <div className="w-screen left-0 relative">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper -z-10"
        >
          {HomeSlideItems.map((items) => (
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
            DỊCH VỤ Du Lịch Khánh Du thuộc Công ty vận tải hành khách Khánh Du
            là một trong những địa chỉ cung dịch vụ Du Lịch An Toàn hàng đầu tại
            khu vực thành phố Hồ Chí Minh, Cần Thơ. Rải Khắp 63 Tỉnh Thành..Xe
            Riêng Xe Nhập Khẩu nguyên chiếc Chỉ 850k, tài xế lành nghề thông
            thuộc các tuyến đường trãi khắp đất nước Việt Nam.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section1;
