import { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(500);

  return (
    <FilterContext.Provider
      value={{
        category,
        setCategory,
        maxPrice,
        setMaxPrice,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
