import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { FiChevronsRight } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";

const MainPost = ({ Data, title }) => {
  return (
    <div className="flex-[70%] px-4 py-10">
      <h3 className="text-[20px] font-normal uppercase  pb-5">{title}</h3>
      <div className="flex flex-col gap-5">
        {Data.map((items, idx) => (
          <div className="flex items-center gap-5">
            <div className="flex-[45%]">
              <img
                src={items.image}
                alt="mainpost"
                className="w-full object-cover"
              />
            </div>
            <div className="flex-[55%] flex flex-col gap-3">
              <h3 className="font-bold">{items.title}</h3>
              <div className="flex gap-5">
                <div className="flex items-center gap-1">
                  <SlCalender />
                  <p>{items.date}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <AiOutlineFileText />
                    <p>{items.tag}</p>
                  </div>
                </div>
              </div>
              <div>{items.content}</div>

              <div className="flex items-center gap-1 p-2 border w-[100px]">
                <p>Xem tiếp</p> <FiChevronsRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPost;
