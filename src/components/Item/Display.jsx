import React from "react";
import { ProductItems } from "../../Utils/temp";

const Display = () => {
  return (
    <div className="flex-[80%] py-10 flex flex-col gap-5 px-2">
      <h3 className="font-semibold uppercase text-[18px]">Sản phẩm</h3>
      <div className="grid d:grid-cols-3 gap-5 p:grid-cols-2 ">
        {ProductItems.map((items, idx) => (
          <div
            className="flex flex-col items-center cursor-pointer hover:scale-110 duration-500"
            onClick={() => {
              window.open("tel:02973777272", "_blank");
            }}
          >
            <div className="d:w-[270px] p:w-auto h-[200px] bg-gradient-to-t from-slate-300 to-green-100 flex justify-center">
              <img
                src={items.image}
                alt="product"
                className="p:w-auto d:w-[200px] h-full object-contain"
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
    </div>
  );
};

export default Display;
