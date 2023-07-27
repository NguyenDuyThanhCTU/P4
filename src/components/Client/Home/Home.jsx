import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper";
import { HomeSlideItems, ProductItems } from "../../../Utils/temp";

const Home = () => {
  return (
    <>
      <div className="w-screen left-0   absolute ">
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
                  className="object-coverx  w-full z-0"
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
      <div className="d:mt-[75vh] my-10 d:h-screen p:h-auto relative p:mt-[30vh]">
        <div className="flex flex-col items-center gap-5">
          <h3 className="uppercase text-[22px] font-semibold">
            Sản phẩm nổi bật
          </h3>
          <div className="w-full h-[1px] bg-black"></div>
          <div className=" w-full grid d:grid-cols-3 gap-5 p:grid-cols-1 mt-10">
            {ProductItems.map((items, idx) => (
              <div
                className="flex flex-col items-center cursor-pointer hover:scale-110 duration-500"
                onClick={() => {
                  window.open("tel:02973777272", "_blank");
                }}
              >
                <div className="w-[270px] h-[200px] bg-gradient-to-t from-slate-300 to-green-100 flex justify-center">
                  <img
                    src={items.image}
                    alt="product"
                    className="w-[200px] h-full object-contain"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="hover:text-main duration-300">Sản phẩm {idx}</p>
                  <a href="" className="text-red-500">
                    Liên hệ
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="uppercase px-4 py-2 mt-5 border">Xem thêm</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
