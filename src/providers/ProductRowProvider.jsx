import React, { createContext, useState } from 'react';

export const productRowContext = createContext();

const ProductRowProvider = ({ children }) => {
    const [isDraggingRow, setIsDraggingRow] = useState(false);

  return (
    <productRowContext.Provider
        value={{ isDraggingRow, setIsDraggingRow }}
    >
        { children }
    </productRowContext.Provider>
  )
}

export default ProductRowProvider;
