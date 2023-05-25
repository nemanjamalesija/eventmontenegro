import React, { useContext, useEffect, useReducer, useState } from 'react';

interface appContextValues {
  isNavToggled: boolean;
  setIsNavToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductsContext = React.createContext<appContextValues>(
  {} as appContextValues
);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavToggled, setIsNavToggled] = useState<boolean>(false);

  return (
    <ProductsContext.Provider value={{ isNavToggled, setIsNavToggled }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsContext, AppProvider };
