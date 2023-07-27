import React from "react";
import { useData } from "../../../Context/DataProviders";
import Input from "./Item/Input";
import { IconMapping, SocialMediaCustom } from "../../../Utils/item";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.510197101589!2d105.09216587533902!3d9.974647290129488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b565abf19045%3A0x5a09a3c8bacf336a!2zUDIsIDE1IMSQLiBUcuG6p24gQuG6oWNoIMSQ4bqxbmcsIFAuIEFuIEhvw6AsIFLhuqFjaCBHacOhLCBLacOqbiBHaWFuZywgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1690428738427!5m2!1sen!2s"
          className="w-screen h-[50vh]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex flex-col items-center gap-5 py-5 mx-2">
        <h3 className="uppercase text-maincontent text-[40px] font-semibold">
          Liên hệ để được tư vấn
        </h3>
        <div className="flex justify-center gap-32 ">
          <div>
            <p className="text-center text-[20px] font-normal text-maincontent">
              Hotline
            </p>
            <p> 02973.77.7272 - 0916.049.222</p>
          </div>
          <div>
            <p className="text-center text-[20px] font-normal text-maincontent">
              Fax
            </p>
            <p> 02973.77.8282</p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col ">
              <h3>Kết nối với chúng tôi</h3>
              <div className="flex mt-2 gap-2">
                {SocialMediaCustom.map((items, idx) => {
                  let Icon = IconMapping[items.icon];

                  return (
                    <div
                      key={idx}
                      className={`${items.style} p-2 border rounded-full hover:scale-110 duration-300 border-black hover:border-white`}
                    >
                      {Icon && (
                        <a href={`https:// `} target="_blank">
                          <Icon />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] w-full">
        <div className=" py-10 ">
          <h3 className="uppercase text-maincontent text-[40px] font-semibold text-center py-3">
            Liên hệ nhanh
          </h3>
          <div className="p-2 flex justify-center gap-5 p:flex-col d:flex-row">
            <div>
              <img
                src="https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/357713516_112434035235319_3884387280129250238_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_ohc=o5bEmpgpNgsAX_dTgK9&_nc_ht=scontent.fvca1-4.fna&oh=00_AfAKzTT0MVb3KYU_KkBh-TuPqdmEseSeMhRZZKfLfu67gA&oe=64C35055"
                alt="img"
                className="w-[685px]"
              />
            </div>
            <div>
              <div>
                <div className="flex flex-col gap-3 my-3">
                  <p>
                    <strong>Văn phòng:</strong> {""}
                    p2-15 đường trần bạch đằng, phường an hoà, tp rạch giá, kiên
                    giang
                  </p>

                  <p>
                    <strong>Hotline:</strong> 02973777272 - 0916049222
                  </p>
                  <p>
                    <strong>Website:</strong>
                  </p>
                  <p>Để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất</p>
                </div>
                <div className="flex flex-col gap-3 mb-5">
                  <Input placeholder="Họ Tên(*)" />
                  <Input placeholder="Email(*)" />
                  <Input placeholder="Điện thoại(*)" />
                  <textarea
                    placeholder="Ý kiến khách hàng"
                    className="outline-none border rounded-md p-2 w-full"
                  />
                </div>
                <div>
                  <span className="uppercase py-2 px-6 bg-maincontent text-white cursor-pointer hover:bg-main">
                    gửi đi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
