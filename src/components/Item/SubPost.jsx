import React from "react";
import { SlCalender } from "react-icons/sl";

const SubPost = ({ Data }) => {
  console.log(Data);
  return (
    <div className="flex-[30%] flex flex-col gap-5 py-10">
      <h3 className="font-semibold uppercase text-[20px]">Bài viết mới nhất</h3>
      <div className="flex flex-col gap-5 h-auto">
        {Data.map((items, idx) => (
          <div className="flex items-center gap-2">
            <div className="flex-[20%] h-[70px]">
              <img
                src={items.image}
                alt="post"
                className="w-[100px] h-[70px] object-cover"
              />
            </div>
            <div className="flex-[80%]">
              <p className="truncate2 hover:text-main">{items.title}</p>
              <div className="flex items-center gap-1">
                <SlCalender />
                <p>{items.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubPost;
