import React from "react";
import { ProductItems } from "../../Utils/temp";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../Context/DataProviders";

const Display = ({ Data, content }) => {
  const { Products } = useData();

  return (
    <div className="flex-[80%] py-10 flex flex-col gap-5 px-2">
      <div className="bg-[#f5f5f5] w-full flex justify-between p-4 font-semibold uppercase text-[18px]">
        <div>
          {Data.length} Sản phẩm {content}
        </div>
        <div></div>
      </div>
      <div className="grid d:grid-cols-3 gap-5 p:grid-cols-2 ">
        {Data.map((items, idx) => (
          <Link to={`/product/${items.id}`}>
            <div className="flex flex-col items-center cursor-pointer hover:scale-110 duration-500">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Display;
