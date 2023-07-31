import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Category from "../../Item/Category";
import Display from "../../Item/Display";
import { useData } from "../../../Context/DataProviders";
import { useStateProvider } from "../../../Context/StateProvider";

const Collection = () => {
  const { setIsSort, isSort } = useStateProvider();
  const [DataFetch, setDataFetch] = useState([]);
  const { Products } = useData();
  const { id } = useParams();

  useEffect(() => {
    const Data = Products.filter(
      (item) => item.parentTypeName === isSort || item.typeName === isSort
    );

    if (Data) {
      setDataFetch(Data);
    }
  }, [isSort]);

  useEffect(() => {
    if (id === "nong-nghiep") {
      setIsSort("Nông nghiệp");
    } else if (id === "thuy-san") {
      setIsSort("Thủy sản");
    } else if (id === "chan-nuoi") {
      setIsSort("Chăn nuôi");
    } else {
      setIsSort(id);
    }
  }, [id]);

  return (
    <div className="flex d:flex-row p:flex-col">
      <Category select={setIsSort} />
      <Display Data={DataFetch} content={isSort} />
    </div>
  );
};

export default Collection;
