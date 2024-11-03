import React, { createContext, useState, useRef } from "react";

export const productCellContext = createContext();

const ProductCellProvider = ({ children }) => {
    const [isDraggingCell, setIsDraggingCell] = useState(false);

    return (
        <productCellContext.Provider
            value={{
                isDraggingCell,
                setIsDraggingCell,
            }}
        >
            {children}
        </productCellContext.Provider>
    );
};

export default ProductCellProvider;
