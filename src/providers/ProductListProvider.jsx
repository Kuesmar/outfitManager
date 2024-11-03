import React, { createContext, useEffect, useState } from "react";

export const productListContext = createContext();

const ProductListProvider = ({ children }) => {
    const [isDraggingProduct, setIsDraggingProduct] = useState(false);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await fetch(
                    "http://demo9820758.mockable.io/products"
                );
                return data.json();
            };
            fetchData().then((getInfo) => setProductList(getInfo));
        } catch (error) {
            console.error(error);
        }
    }, []);


    return (
        <productListContext.Provider
            value={{
                isDraggingProduct,
                setIsDraggingProduct,
                productList
            }}
        >
            {children}
        </productListContext.Provider>
    );
};

export default ProductListProvider;
