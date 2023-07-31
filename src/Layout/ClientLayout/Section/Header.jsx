import React, { useState } from "react";

import { BiSearchAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

import { HeaderItems } from "../../../Utils/item";
import DropDown from "../Item/DropDown";
import { AiFillCaretUp, AiFillPhone } from "react-icons/ai";
import { useData } from "../../../Context/DataProviders";

const Header = () => {
  const [Hidden, setHidden] = useState(false);
  const { ContactData, TradeMarkData } = useData();
  return (
    <>
      {/* <--- Desktop ---> */}
      <div className="font-LexendDeca  bg-MainColor  shadow-lg d:h-[165px] p:h-auto bg-white ">
        <div className="d:flex p:hidden h-full w-full  flex-col items-center justify-center">
          <div className="w-[1200px] h-[115px] flex justify-between items-center">
            <div className="">
              <img
                src={TradeMarkData.websiteLogo}
                alt="logo"
                className="h-[115px]"
              />
            </div>
            <div>
              <div className="flex items-center gap-1 pb-2 border-b">
                <AiFillPhone />
                <p>{ContactData.phone}</p>
              </div>
              <div className="pt-2 text-main">CHẤT LƯỢNG TỪ SỰ TẬN TÂM</div>
            </div>
          </div>
          <div className="w-full h-full flex justify-center items-center border-t ">
            <div className="w-[1200px] flex justify-between items-center py-2">
              <div className="flex gap-7 font-light uppercase text-[16px]">
                {HeaderItems.map((items, idx) => (
                  <div className="group hover:text-main">
                    <Link to={items.link}>
                      <div className="flex items-center gap-3">
                        <p>{items.name}</p>

                        {items.content.length > 1 && (
                          <AiFillCaretUp className="group-hover:rotate-180 duration-300 " />
                        )}
                      </div>
                    </Link>

                    {items.content.length > 1 && (
                      <>
                        <div className="absolute mt-3  w-max h-auto border bg-white hidden group-hover:block">
                          {items.content.map((items, idx) => (
                            <div>
                              <Link to={`/${items.link}`}>
                                <div className="py-4 px-8 font-light text-black hover:text-main">
                                  {items.name}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                    <div className="bg-none  h-5 w-auto   "></div>
                  </div>
                ))}
              </div>
              <div className="flex items-center bg-gray-300">
                <input
                  type="text"
                  className="p-2 outline-none bg-gray-300"
                  placeholder="Tìm kiếm ..."
                />
                <div className="text-[24px] p-2 cursor-pointer">
                  <BiSearchAlt />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p:block d:hidden ">
          <div className="justify-between mx-5 flex items-center">
            <div className="py-2">
              <Link to="/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fir-d82f9.appspot.com/o/C%C3%B4ng%20ty%20c%E1%BB%95%20ph%E1%BA%A7n%20n%C3%B4ng%20nghi%E1%BB%87p%20sao%20v%C3%A0ng%2FLogo.jpg?alt=media&token=f420e137-735f-4207-ac68-e2e36ecf9514"
                  alt="logo"
                  className="w-14 object-cover"
                />
              </Link>
            </div>
            <div>
              <div className="flex items-center text-[65px]">
                {Hidden ? (
                  <RxCross1
                    className=" text-main p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                ) : (
                  <MdOutlineFormatListBulleted
                    className=" text-main p-2 "
                    onClick={() => setHidden(!Hidden)}
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={`${
              Hidden ? "h-screen" : "h-0 "
            } w-full duration-700 bg-[rgba(253,253,253,0.9)] overflow-hidden `}
          >
            {HeaderItems.map((items, idx) => (
              <DropDown
                idx={idx}
                dropdown={items.content}
                content={items.name}
                link={items.link}
                setHidden={setHidden}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
