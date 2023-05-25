'use client';

import React, { useContext, useEffect, useReducer, useState } from 'react';

interface appContextValues {
  isNavVisible: boolean;
  setIsNavVissible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductsContext = React.createContext<appContextValues>(
  {} as appContextValues
);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavVisible, setIsNavVissible] = useState<boolean>(false);

  return (
    <ProductsContext.Provider value={{ isNavVisible, setIsNavVissible }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, AppProvider };
