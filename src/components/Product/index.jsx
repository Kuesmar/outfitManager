import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const Product = ({
    product,
    setIsDragging,
    onDragStart,
    columnIndex,
    rowIndex,
}) => {
    const handleDragStart = (event, product) => {
        event.stopPropagation();
        event.dataTransfer.setData("product", JSON.stringify(product));
        event.dataTransfer.setData(
            "previousPosition",
            JSON.stringify({
                columnIndex,
                rowIndex,
            })
        );
        //onDragStart?.();
        //setIsDragging(true);
    };

    const handleDrop = (event, product) => {
        console.log(event.dataTransfer.getData('product'));
    }

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div
            draggable
            onDragOver={handleDragOver}
            key={product.id}
            onDragStart={(event) => handleDragStart(event, product)}
            onDrop={(event) => handleDrop(event, product)}
            className="p-2"
        >
            <Card shadow="sm" className="h-full w-full" draggable={false}>
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={product.name}
                        className="w-full object-cover h-[140px]"
                        src={product.image}
                        draggable={false}
                    />
                </CardBody>
                <CardFooter className="text-small justify-betweens">
                    <b data-testid={product.name}>{product.name}</b>
                    <p className="text-default-500">{`$${product.price}`}</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Product;
