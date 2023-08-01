import React from "react";
import { VideoItems } from "../../../Utils/temp";

const Videos = () => {
  return (
    <div className="flex gap-10 flex-col items-center py-10">
      <h3 className="text-maincontent text-[48px] font-semibold text-center">
        Videos
      </h3>

      <div className="grid d:grid-cols-3 gap-10 p:grid-cols-1">
        {VideoItems.map((items, idx) => (
          <>
            <iframe
              width="400"
              height="300"
              src={items.video}
              title="Wuling HongGuang MiniEV - Tiên phong khai mở phân khúc ô tô điện mini đầu tiên tại Việt Nam"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="d:w-[400px] d:h-[300px] p:w-auto p:h-auto"
            ></iframe>
          </>
        ))}
      </div>
    </div>
  );
};

export default Videos;
