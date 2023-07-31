import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "../../Item/Category";
import Display from "../../Item/Display";
import { useData } from "../../../Context/DataProviders";

const Collection = () => {
  const [DataFetch, setDataFetch] = useState([]);
  const { id } = useParams();
  const { Products } = useData();
  console.log(id);
  useEffect(() => {
    const Data = Products.find(
      (item) => item.parentType === id || item.type === id
    );
    if (Data) {
      setDataFetch(Data);
    } else {
      console.log("khong co du lieu");
    }
  }, [id]);
  console.log(DataFetch);
  return (
    <div className="flex d:flex-row p:flex-col">
      <Category />
      <Display />
    </div>
  );
};

export default Collection;
