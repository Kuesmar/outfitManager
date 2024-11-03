import React, { useContext } from "react";
import { CiImageOn, CiTrash } from "react-icons/ci";
import { productRowContext } from "../../providers/ProductRowProvider";
import { productCellContext } from "../../providers/ProductCellProvider";

const SkeletonList = ({ productGrid, setProductGrid }) => {

    const { isDraggingRow } = useContext(productRowContext);
    const { isDraggingCell } = useContext(productCellContext);
    const { isDraggingProduct } = useContext(productRowContext);

    const getProduct = (data) => {
        return data.dataTransfer.getData("product");
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

    const handleDropLeft = (event) => {
        const productToAdd = JSON.parse(getProduct(event));
        setProductGrid([...productGrid, [productToAdd, null, null]]);
    };

    const handleDropMid = (event) => {
        const productToAdd = JSON.parse(getProduct(event));
        setProductGrid([...productGrid, [null, productToAdd, null]]);
    };
    
    const handleDropRight = (event) => {
        const productToAdd = JSON.parse(getProduct(event));
        setProductGrid([...productGrid, [null, null, productToAdd]]);
    };

    const handleDropDelete = (event) => {
        switch (event.dataTransfer.getData('type')) {
            case 'cell':
                const previousPosition = getPreviousPosition(event);
                const filteredProduct = productGrid.map((eachRow, eachRowIdx) => {
                    if (eachRowIdx === previousPosition.rowIndex) {
                        return eachRow.map((eachProd, eachProdIdx ) => {
                            if (eachProdIdx === previousPosition.columnIndex) {
                                return null;
                            }
                            return eachProd;
                        });
                    }
                    return eachRow;
                });
                setProductGrid(filteredProduct);
                break;
        
            case 'row':
                const previousRowPosition = getPreviousRowPosition(event);
                const filteredGrid = productGrid.filter((_, idx) => {
                    if (previousRowPosition === idx) {
                        return false
                    }
                    return true
                });
                setProductGrid(filteredGrid);
                break;
            
            case 'list':
                break;
        };
    };

    return (
        <div className="flex flex-col gap-4">
            <div>
                <p className="mt-2 text-white text-2xl">Arrastre un producto aquí</p>
            </div>
            <div className="flex justify-around gap-4">
                <div
                    className="flex justify-center items-center w-1/3 h-20 border-dashed border-2 border-yellow-500 rounded-large"
                    onDrop={handleDropLeft}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <CiImageOn data-testid="left-drop-box" color="white" size={36}/>
                </div>
                <div
                    className="flex justify-center items-center w-1/3 h-20 border-dashed border-2 border-yellow-500 rounded-large"
                    onDrop={handleDropMid}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <CiImageOn data-testid="center-drop-box" color="white" size={36}/>
                </div>
                <div
                    className="flex justify-center items-center w-1/3 h-20 border-dashed border-2 border-yellow-500 rounded-large"
                    onDrop={handleDropRight}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <CiImageOn data-testid="right-drop-box" color="white" size={36}/>
                </div>
            </div>
            <div className="flex justify-center">
                <div
                    className="flex flex-col justify-center items-center w-full h-32 border-dashed border-2 border-rose-500 rounded-large"
                    onDrop={handleDropDelete}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <CiTrash color="white" size={48} />
                    <p className="mt-2 text-white text-2xl">Suelta aquí para eliminar</p>
                </div>
            </div>
        </div>
    );
};

export default SkeletonList;
