import React, { useState } from "react";
import ProductRow from "../ProductRow";
import SkeletonList from "../SkeletonList";

const ProductGrid = ({
    productGrid,
    setProductGrid
}) => {
    
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div
            className="flex-1 flex flex-col dark:bg-default-100/90 border-2 border-none rounded-large" 
            onDragOver={handleDragOver}
        >
            <div
                className="pt-6 pb-3 px-6 flex-grow"
            >
                <SkeletonList
                    productGrid={productGrid}
                    setProductGrid={setProductGrid}
                />
            </div>
            <div
                className="pt-3 pb-3 px-6 flex-grow"
            >
                {productGrid.map((eachRow, index) => (
                    <ProductRow
                        row={eachRow}
                        rowIndex={index}
                        productGrid={productGrid}
                        setProductGrid={setProductGrid}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
