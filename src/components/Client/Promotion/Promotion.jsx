import React from "react";
import SubPost from "../../Item/SubPost";
import MainPost from "../../Item/MainPost";
import {
  MainPromotionNewsItems,
  SubPromotionNewsItems,
} from "../../../Utils/temp";

const Promotion = () => {
  return (
    <div className="flex d:flex-row p:flex-col ">
      <SubPost Data={SubPromotionNewsItems} />
      <MainPost Data={MainPromotionNewsItems} title="Khuyến mãi" />
    </div>
  );
};

export default Promotion;
