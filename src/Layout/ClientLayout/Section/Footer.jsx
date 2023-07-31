import React from "react";
import { AiFillPhone, AiFillPrinter, AiOutlineMail } from "react-icons/ai";
import { BsFillHouseFill } from "react-icons/bs";
import {
  HeaderItems,
  IconMapping,
  SocialMediaCustom,
} from "../../../Utils/item";
import { Link } from "react-router-dom";
import { useData } from "../../../Context/DataProviders";

const Footer = () => {
  const { ContactData, TradeMarkData } = useData();
  return (
    <div className="w-full  flex justify-center items-center bg-[#212121]">
      <div className="d:w-[1200px] p:w-auto grid d:grid-cols-4 text-white d:gap-3 p:gap-6 py-5 p:grid-cols-1 px-2">
        <div className="flex flex-col p:items-center d:items-start">
          <h3 className="uppercase text-[18px] ">Giới thiệu</h3>
          <div className="text-[#9e9e9e] flex flex-col gap-2 mt-4">
            {/* <p>
              Tiền thân là một cơ sở TOBA được thành lập vào năm 1994. Sau khi
              luật doanh nghiệp ra đời, Công ty TOBA chuyển thành công ty TNHH
              SX - TM TOBA và đăng ký doanh nghiệp vào ngày 27/09/2000. Lĩnh
              vực, ngành nghề chính là: sản xuất, kinh doanh các loại phân bón
              (phân bón lá, phân bón gốc, phân hữu cơ, phân vi sinh...); sản
              xuất, sang chai đóng gói, kinh doanh thuốc bảo vệ thực vật; Sản
              xuất, kinh doanh thức ăn bổ sung, các chế phẩm sinh học dùng trong
              nuôi trồng thủy sản; kinh doanh hóa chất thương mại dùng trong
              nông nghiệp.
            </p> */}
            <div className="flex items-start gap-1">
              <div className="mt-1">
                <BsFillHouseFill />
              </div>
              <p>{ContactData.address}</p>
            </div>
            <div className="flex items-start gap-1">
              <div className="mt-1">
                <AiOutlineMail />
              </div>
              marketing@toba.vn
            </div>

            <div className="flex items-start gap-1">
              <div className="mt-1">
                <AiFillPhone />
              </div>
              <p> {ContactData.phone}</p>
            </div>

            <div className="flex items-start gap-1">
              <div className="mt-1">
                <AiFillPrinter />
              </div>
              <p>02973.77.8282</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <h3 className="uppercase text-[18px] ">Liên kết</h3>
          <div className="flex flex-col gap-2 mt-4 text-[#9e9e9e] uppercase">
            {HeaderItems.map((items, idx) => (
              <Link to={items.link}>
                <div className="hover:text-white duration-300">
                  {items.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col p:items-center d:items-start">
          <h3 className="uppercase text-[18px] ">Đăng ký nhận tin</h3>
          <div className="flex flex-col gap-2 mt-4 text-[#9e9e9e] ">
            <p>
              Bạn muốn nhận những tin tức cập nhập mới nhất cũng như bộ sản phẩm
              mới từ Công ty TOBA. Xin vui lòng click vào ô phía trên và để lại
              email của bạn. Xin chân thành cảm ơn.
            </p>
            <div className="flex gap-2 mt-2">
              {SocialMediaCustom.map((items, idx) => {
                let Icon = IconMapping[items.icon];
                return (
                  <>
                    <div
                      className={`${items.style} p-2 border rounded-full hover:scale-110 duration-300`}
                    >
                      {Icon && <Icon />}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col p:items-center d:items-start">
          <h3 className="uppercase text-[18px] ">Kết nối với chúng tôi</h3>

          <div className="flex flex-col gap-2 mt-4 text-[#9e9e9e] ">
            <iframe
              src={ContactData.location}
              width="300"
              height="225"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
