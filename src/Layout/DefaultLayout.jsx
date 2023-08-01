import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useData } from "../Context/DataProviders";
import Loading from "../components/Item/Loading";
import Header from "./ClientLayout/Section/Header";
import Footer from "./ClientLayout/Section/Footer";
import OnTop from "./ClientLayout/Section/OnTop";
import Hotline from "./ClientLayout/Section/Hotline";
import Copyright from "./ClientLayout/Section/Copyright";
import { AiFillCloseCircle } from "react-icons/ai";
import { useStateProvider } from "../Context/StateProvider";

const DefaultLayout = ({ children }) => {
  const { TradeMarkData } = useData();
  const { isPlay, setIsPlay } = useStateProvider(false);

  return (
    <>
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet>
      <div className="relative">
        <Loading />

        <div className="relative z-40">
          <Header />
        </div>
        <div className=" w-full flex justify-center relative z-10">
          <div className="w-full">{children}</div>
        </div>

        {isPlay && (
          <div
            className={`bg-[rgba(0,0,0,0.3)] w-full flex items-center justify-center  top-0
       h-screen
      z-50 absolute rounded-md duration-300 `}
          >
            <div className="w-[80vw] h-[75vh] relative bg-white flex font-LexendDeca cursor-pointer rounded-sm ">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Wn3z6BQsmXo"
                title="Wuling HongGuang MiniEV - Tiên phong khai mở phân khúc ô tô điện mini đầu tiên tại Việt Nam"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                autoplay // Add this attribute to enable autoplay
              ></iframe>

              <AiFillCloseCircle
                className="absolute -top-5 -right-5 text-[40px] border-white border-4 bg-black rounded-3xl text-white "
                onClick={() => {
                  setIsPlay(false);
                }}
              />
            </div>
          </div>
        )}

        <Footer />
        <div className="relative z-20">
          <OnTop />
          <Hotline />
        </div>

        <Copyright />
      </div>
    </>
  );
};

export default DefaultLayout;
