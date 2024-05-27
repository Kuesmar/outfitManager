import React from "react";
import Product from "../Product";

const OutfitRow = ({ product, outfitRowList, setOutfitRowList }) => {
    const handleDrop = (event) => {
        const findEqual = outfitRowList.find((eachProd) => {
            if (eachProd.id === event.dataTransfer.getData("dataId")) {
                return true;
            }
            return false;
        });
		if(findEqual) return;
        if(outfitRowList.length >= 3) return;
        const objToPush = {
            id: event.dataTransfer.getData("dataId"),
            name: event.dataTransfer.getData("dataName"),
            image: event.dataTransfer.getData("dataImage"),
            price: event.dataTransfer.getData("dataPrice"),
        };
        setOutfitRowList([...outfitRowList, objToPush]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    return (
        <div className="flex h-20 border-2 border-rose-500" onDrop={handleDrop} onDragOver={handleDragOver}>
            {outfitRowList.map((eachProduct) => (
                <Product product={eachProduct} key={eachProduct.id} />
            ))}
        </div>
    );
};

export default OutfitRow;
