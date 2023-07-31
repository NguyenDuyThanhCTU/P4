import React from "react";
import { Helmet } from "react-helmet";
import { useData } from "../Context/DataProviders";
import Loading from "../components/Item/Loading";
import Header from "./ClientLayout/Section/Header";
import Footer from "./ClientLayout/Section/Footer";
import OnTop from "./ClientLayout/Section/OnTop";
import Hotline from "./ClientLayout/Section/Hotline";
import Copyright from "./ClientLayout/Section/Copyright";

const DefaultLayout = ({ children }) => {
  const { TradeMarkData } = useData();
  return (
    <>
      <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet>
      <div className="relative">
        <Loading />

        <div className="relative z-50">
          <Header />
        </div>
        <div className=" w-full flex justify-center relative z-10">
          <div className="w-full">{children}</div>
        </div>

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
