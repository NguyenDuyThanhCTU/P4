import React from "react";
import { ProductItems } from "../../../../Utils/temp";
import Category from "../../../Item/Category";

const Section2 = () => {
  return (
    <>
      {" "}
      <div className=" my-10 d:h-screen p:h-auto relative">
        <div className="flex flex-col items-center gap-5">
          <h3 className="uppercase text-[22px] font-semibold">
            Sản phẩm nổi bật
          </h3>
          <div className="w-[80vw] h-[1px] bg-black"></div>
          <div className="flex justify-center w-full mt-5 ">
            <div className="d:w-[100vw] p:w-auto flex gap-5 justify-center p:px-2 d:px-10 d:flex-row p:flex-col">
              <Category />

              <div className="flex-[80%] first-letter p:w-auto flex flex-col gap-3 font-LexendDeca">
                <div className="bg-[#f5f5f5] w-full flex justify-between p-4">
                  <div>54 Sản phẩm</div>
                  <div></div>
                </div>
                <div className="grid d:grid-cols-6 d:gap-10  p:gap-2 px-2 p:grid-cols-2 justify-center ">
                  {ProductItems.map((items, idx) => (
                    <div
                      className="flex flex-col items-center cursor-pointer hover:scale-110 duration-500"
                      onClick={() => {
                        window.open("tel:02973777272", "_blank");
                      }}
                    >
                      <div className="w-auto h-[170px] bg-gradient-to-t from-slate-300 to-green-100 flex justify-center">
                        <img
                          src={items.image}
                          alt="product"
                          className="w-auto h-full object-contain px-3"
                        />
                      </div>
                      <div className="flex flex-col items-center w-full border py-2">
                        <p className="hover:text-main duration-300">
                          Sản phẩm {idx}
                        </p>
                        <a href="" className="text-red-500">
                          Liên hệ
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
