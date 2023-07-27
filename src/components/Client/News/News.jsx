import React from "react";
import SubPost from "../../Item/SubPost";
import MainPost from "../../Item/MainPost";
import { MainPostNewsItems, SubPostNewsItems } from "../../../Utils/temp";

const News = () => {
  return (
    <div className="flex d:flex-row p:flex-col">
      <SubPost Data={SubPostNewsItems} />
      <MainPost Data={MainPostNewsItems} title="Tin tức" />
    </div>
  );
};

export default News;
