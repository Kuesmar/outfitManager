import React from "react";

const Product = ({ product }) => {

    const handleDragStart = (event, product) => {
        event.dataTransfer.setData("dataId", product.id);
        event.dataTransfer.setData("dataName", product.name);
        event.dataTransfer.setData("dataImage", product.image);
        event.dataTransfer.setData("dataPrice", product.price);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div
            draggable
            onDragStart={(event) =>
                handleDragStart(event, product)
            }
            onDragOver={handleDragOver}
            key={product.id}
        >
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
    );
};

export default Product;
