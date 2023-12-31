import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
// import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from "react-router-dom";

const DropDown = ({ content, link, setHidden, idx, dropdown }) => {
  const [isSelected, setIsSelected] = useState(true);

  return (
    <div
      className={`${
        idx === 0 && "border-t-0"
      } border-t border-gray-200 items-start justify-between py-3  mx-5 flex flex-col`}
    >
      <Link to={link} className="w-full">
        <div className="flex items-center justify-between w-full">
          <h3
            className="text-[20px] font-normal"
            onClick={() => {
              setHidden(false);
            }}
          >
            {content}
          </h3>{" "}
          {dropdown.length > 1 && (
            <AiFillCaretDown onClick={() => setIsSelected(!isSelected)} />
          )}
        </div>
      </Link>
      {dropdown.length > 1 && (
        <div
          className={`flex flex-col  overflow-hidden duration-300 gap-2 my-2 ml-2 ${
            isSelected ? "h-0" : "h-auto"
          }`}
        >
          {dropdown.map((items, idx) => (
            <>
              <Link to={`/${items.link}`}>
                <div
                  className="py-1"
                  onClick={() => {
                    setHidden(false);
                  }}
                >
                  {items.name}
                </div>
              </Link>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
