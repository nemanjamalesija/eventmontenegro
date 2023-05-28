'use client';

import React, { useContext, useRef, useState } from 'react';

interface appContextValues {
  isNavVisible: boolean;
  setIsNavVissible: React.Dispatch<React.SetStateAction<boolean>>;
  heroRef: React.MutableRefObject<HTMLDivElement | null>;
  navRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ProductsContext = React.createContext<appContextValues>(
  {} as appContextValues
);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavVisible, setIsNavVissible] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  return (
    <ProductsContext.Provider
      value={{
        isNavVisible,
        setIsNavVissible,
        navRef,
        heroRef,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, AppProvider };
