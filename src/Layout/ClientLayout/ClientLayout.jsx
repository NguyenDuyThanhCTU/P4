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

  return (
    <>
      {/* <Helmet>
        <title>{TradeMarkData.websiteName}</title>
        <link rel="icon" href={TradeMarkData.websiteIco} />
      </Helmet> */}
      <Loading />

      <Header />
      <div className=" w-full flex justify-center ">
        <div className="w-[1200px]">{children}</div>
      </div>

      <Footer />
      <OnTop />
      <Hotline />

      <Copyright />
    </>
  );
};

export default ClientLayout;
