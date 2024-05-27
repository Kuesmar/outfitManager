import React from "react";
import Product from "../Product";
import OutfitRow from "../OutfitRow";
import SkeletonList from "../SkeletonList";

const OutfitList = ({ outfitProductList, setOutfitProductList, outfitRowList, setOutfitRowList }) => {
    const handleDrop = (event) => {
        const findEqual = outfitProductList.find((eachProd) => {
            if (eachProd.id === event.dataTransfer.getData("dataId")) {
                return true;
            }
            return false;
        });
		if(findEqual) return;
        const objToPush = {
            id: event.dataTransfer.getData("dataId"),
            name: event.dataTransfer.getData("dataName"),
            image: event.dataTransfer.getData("dataImage"),
            price: event.dataTransfer.getData("dataPrice"),
        };
        setOutfitProductList([...outfitProductList, objToPush]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div
            className="flex flex-col w-1/2 border-2 border-rose-500"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
		<SkeletonList />
            {outfitProductList.map((eachProduct) => (
                <OutfitRow product={eachProduct} outfitRowList={outfitRowList} setOutfitRowList={setOutfitRowList} key={eachProduct.id} />
            ))}
        </div>
    );
};

export default OutfitList;
