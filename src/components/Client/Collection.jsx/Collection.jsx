import React from "react";
import { useParams } from "react-router-dom";
import Category from "../../Item/Category";
import Display from "../../Item/Display";

const Collection = () => {
  const { id } = useParams();
  return (
    <div className="flex d:flex-row p:flex-col">
      <Category />
      <Display />
    </div>
  );
};

export default Collection;
