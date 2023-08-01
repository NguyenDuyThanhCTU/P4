import React, { useEffect, useState } from "react";
import { ProductItems } from "../../../../Utils/temp";
import Category from "../../../Item/Category";
import { useData } from "../../../../Context/DataProviders";
import { useStateProvider } from "../../../../Context/StateProvider";
import { Link } from "react-router-dom";

const Section2 = () => {
  const { setIsSort, isSort } = useStateProvider();
  const [DataFetch, setDataFetch] = useState([]);
  const { Products } = useData();

  useEffect(() => {
    if (isSort === "Phân bón") {
      setIsSort("Nông nghiệp");
    }
    const Data = Products.filter(
      (item) => item.parentTypeName === isSort || item.typeName === isSort
    );

    if (Data) {
      setDataFetch(Data);
    }
  }, [Products, isSort]);

  useEffect(() => {
    setIsSort("Nông nghiệp");
  }, []);

  return (
    <>
      {" "}
      <div className=" my-10 d:h-auto p:h-auto relative">
        <div className="flex flex-col items-center gap-5">
          <h3 className="uppercase text-[22px] font-semibold">
            Sản phẩm nổi bật
          </h3>
          <div className="w-[80vw] h-[1px] bg-black"></div>
          <div className="flex justify-center w-full mt-5 ">
            <div className="d:w-[100vw] p:w-auto flex gap-5 justify-center p:px-2 d:px-10 d:flex-row p:flex-col">
              <Category select={setIsSort} />

              <div className="flex-[80%] first-letter p:w-auto flex flex-col gap-3 font-LexendDeca">
                <div className="bg-[#f5f5f5] w-full flex justify-between p-4">
                  <div>
                    {DataFetch.length} Sản phẩm {isSort}
                  </div>
                  <div></div>
                </div>
                <div className="grid d:grid-cols-6 d:gap-10  p:gap-2 px-2 p:grid-cols-2 justify-center ">
                  {DataFetch?.map((items, idx) => (
                    <Link to={`/product/${items.id}`}>
                      <div className="flex flex-col items-center cursor-pointer hover:scale-110 duration-500">
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
                    </Link>
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
