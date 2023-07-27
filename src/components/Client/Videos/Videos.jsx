import React from "react";
import { VideoItems } from "../../../Utils/temp";

const Videos = () => {
  return (
    <div className="flex gap-10 flex-col items-center">
      <h3 className="text-maincontent text-[48px] font-semibold text-center">
        Videos
      </h3>

      <div>
        <iframe
          width="958"
          height="564"
          src="https://www.youtube.com/embed/_4MelKBxxG8"
          title="Wuling HongGuang MiniEV - Tiên phong khai mở phân khúc ô tô điện mini đầu tiên tại Việt Nam"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="grid grid-cols-3 gap-10">
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
            ></iframe>
          </>
        ))}
      </div>
    </div>
  );
};

export default Videos;
