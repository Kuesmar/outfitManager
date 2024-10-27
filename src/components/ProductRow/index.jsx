import React, { useState } from "react";
import Product from "../Product";
import SelectOrientation from "../SelectOrientation";

const ProductRow = ({ row, rowIndex, productGrid, setProductGrid, isDragging, setIsDragging, setShowDeleteZone }) => {
    const getProduct = (data) => {
        const product = data.dataTransfer.getData("product");
        if (!product) return null;
        try {
            return JSON.parse(product);
        } catch (error) {
            console.error("Error al parsear el producto:", error);
            return null;
        }
    };

    const getPreviousPosition = (data) => {
        const position = data.dataTransfer.getData("previousPosition");
        if (!position) return null;
        try {
            return JSON.parse(position);
        } catch (error) {
            console.error("Error al parsear la posición anterior:", error);
            return null;
        }
    };

    const getPreviousRowPosition = (data) => {
        const rowPosition = data.dataTransfer.getData("previousRowPosition");
        if (!rowPosition) return null;
        try {
            return JSON.parse(rowPosition);
        } catch (error) {
            console.error("Error al parsear la posición de la fila:", error);
            return null;
        }
    };

    const handleRowDrop = (event) => {
        const prevRowIndex = getPreviousRowPosition(event);
        
        if (prevRowIndex === null || prevRowIndex === rowIndex) return;
        if (event.dataTransfer.getData('isRow') !== 'true') return;

        let auxOldRow = null;
        let auxNewRow = null;

        productGrid.forEach((eachRow, idx) => {
            if (idx === prevRowIndex) auxOldRow = eachRow;
            if (idx === rowIndex) auxNewRow = eachRow;
        });

        setProductGrid(
            productGrid.map((eachRow, idx) => {
                if (idx === prevRowIndex) return auxNewRow;
                if (idx === rowIndex) return auxOldRow;
                return eachRow;
            })
        );
        setIsDragging(false);
        setShowDeleteZone(false);
    };

    const handleDrop = (event, idxDrop) => {
        const productToAdd = getProduct(event);
        
        if (!productToAdd || event.dataTransfer.getData('isRow') === 'true') return;
        
        const prevColumnIndex = getPreviousPosition(event).columnIndex;
        const prevRowIndex = getPreviousPosition(event).rowIndex;
        let prevProduct = null;

        const updatedGrid = productGrid.map((eachRow, idxRow) => {
            if (idxRow === rowIndex) {
                return eachRow.map((eachProduct, idxProd) => {
                    if (idxProd === idxDrop) {
                        prevProduct = eachProduct;
                        return productToAdd;
                    }
                    return eachProduct;
                });
            }
            return eachRow;
        });

        setProductGrid(
            updatedGrid.map((eachRow, idxRow) => {
                if (idxRow === prevRowIndex) {
                    return eachRow.map((eachProduct, idxProd) => {
                        if (idxProd === prevColumnIndex) {
                            return prevProduct;
                        }
                        return eachProduct;
                    });
                }
                return eachRow;
            })
        );
        setIsDragging(false);
        setShowDeleteZone(false);
    };

    const handleRowDragStart = (event) => {
        setIsDragging(true);
        setShowDeleteZone(true);
        event.dataTransfer.setData("isRow", "true");
        event.dataTransfer.setData("previousRowPosition", JSON.stringify(rowIndex));
    };

    return (
        <div
            draggable
            className="flex flex-col min-h-[200px] border-2 p-6 my-6 bg-content1 border-none rounded-large"
            onDragStart={handleRowDragStart}
            //onDragEnd={() => setShowDeleteZone(false)}
            onDrop={handleRowDrop}
        >
            <div
                className="flex justify-center items-center pb-3 h-full w-full"
            >
                <SelectOrientation
                    row={row}
                    rowIndex={rowIndex}
                    productGrid={productGrid}
                    setProductGrid={setProductGrid}
                />
            </div>
            <div className={'flex w-full'}>
                {row.map((eachProduct, idx) => (
                    <div
                        onDrop={(event) => handleDrop(event, idx)}
                        className={`w-full ${isDragging ? 'border-2 border-dashed border-white p-3 mx-3 rounded-large' : 'border-none p-3 mx-3'}`}
                        key={idx}
                    >
                        {eachProduct && (
                            <Product
                                product={eachProduct}
                                setIsDragging={setIsDragging}
                                columnIndex={idx}
                                rowIndex={rowIndex}
                                setShowDeleteZone={setShowDeleteZone}
                                onDragStart={() => setShowDeleteZone(true)}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductRow;
