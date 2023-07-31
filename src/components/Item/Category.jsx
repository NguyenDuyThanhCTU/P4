import React, { useState } from "react";
import { HeaderItems } from "../../Utils/item";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Category = () => {
  const [isSelected, setSelected] = useState();
  const [isDropDown, setIsDropDown] = useState(false);

  const HandleSelect = (idx) => {
    if (isSelected !== idx) {
      setIsDropDown(true);
      setSelected(idx);
    } else {
      setIsDropDown(!isDropDown);
      setSelected(idx);
    }
  };
  return (
    <div className="py-10 flex-[20%] flex flex-col gap-5">
      <div>
        <h3 className="font-semibold uppercase text-[18px]">Danh mục</h3>
        <div
          className="w-[50px] h-1
       bg-main mt-2"
        ></div>
      </div>
      <div className="flex flex-col">
        {HeaderItems.slice(1, 4).map((items, idx) => (
          <>
            <div
              className="flex items-center justify-between py-4 px-4 border-b cursor-pointer"
              onClick={() => HandleSelect(idx)}
            >
              <div className="uppercase hover:text-main">{items.name}</div>
              <BiChevronDown
                className={`${
                  isDropDown && isSelected === idx && "-rotate-90"
                } duration-300`}
              />
            </div>

            <div
              className={`${
                isDropDown && isSelected === idx ? " h-[450px]" : " h-0"
              } w-full overflow-hidden duration-500 bg-gray-300 cursor-pointer`}
              onClick={() => setIsDropDown(false)}
            >
              {items.content.map((items, idx) => (
                <>
                  <div className="py-2 ml-4 text-[14px] text-gray-500 hover:text-white uppercase">
                    {items.name}
                  </div>
                </>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Category;
