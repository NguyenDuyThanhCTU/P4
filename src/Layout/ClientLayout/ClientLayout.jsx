import React from "react";

import { useData } from "../../Context/DataProviders";
import { Helmet } from "react-helmet";
import Loading from "../../components/Item/Loading";
import Header from "./Section/Header";
import Hotline from "./Section/Hotline";
import OnTop from "./Section/OnTop";
import Copyright from "./Section/Copyright";
import Footer from "./Section/Footer";

const ClientLayout = ({ children }) => {
  const { TradeMarkData } = useData();
  const isHome = children.type.name === "Home";

  return (
    <div className="relative">
      {/* <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet> */}
      <Loading />

      <div className="relative z-50">
        <Header />
      </div>
      <div className=" w-full flex justify-center relative z-10">
        <div className={isHome ? "w-auto" : "w-[1200px]"}>{children}</div>
      </div>

      <Footer />
      <div className="relative z-20">
        <OnTop />
        <Hotline />
      </div>

      <Copyright />
    </div>
  );
};

export default ClientLayout;
