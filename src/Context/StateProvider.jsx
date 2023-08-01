import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [isUploadProduct, setIsUploadProduct] = useState("");
  const [isSelected, setSelected] = useState(0);
  const [isRefetch, setIsRefetch] = useState("");
  const [updateId, setUpdateId] = useState("");
  //custom
  const [isLoading, setIsLoading] = useState(false);
  const [isSort, setIsSort] = useState("");
  const [isPlay, setIsPlay] = useState(false);

  return (
    <StateContext.Provider
      value={{
        setIsPlay,
        isPlay,
        setIsSort,
        isSort,
        updateId,
        setUpdateId,
        isLoading,
        setIsLoading,
        isSelected,
        setSelected,
        isRefetch,
        setIsRefetch,
        isUploadProduct,
        setIsUploadProduct,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
