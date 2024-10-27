import React from "react";
import Product from "../Product";

const ProductList = ({ initialProductList, setIsDragging, setShowDeleteZone }) => {
    return (
        <div
            className="
            grid
            min-[640px]:grid-cols-1
            min-[800px]:grid-cols-2
            min-[1024px]:grid-cols-3 
            min-[1440px]:grid-cols-4
            min-[1800px]:grid-cols-5
            min-[2000px]:grid-cols-6
            gap-4
            p-6
            border-2 border-none
            dark:bg-default-100/90
            rounded-large"
        >
            {initialProductList.map((eachProduct, idx) => (
                <div key={idx}>
                    <Product product={eachProduct} setIsDragging={setIsDragging} key={eachProduct.id} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
