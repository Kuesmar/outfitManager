import React from "react";
import Product from "../Product";

const ProductList = ({ initialProductList }) => {

    return (
        <div className="flex w-1/2 border-2 border-rose-500">
            {initialProductList.map((eachProduct) => (
                <Product product={eachProduct} key={eachProduct.id}/>
            ))}
        </div>
    );
};

export default ProductList;
