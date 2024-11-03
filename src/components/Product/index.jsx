import React, { useCallback, useContext } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { productCellContext } from '../../providers/ProductCellProvider';
import { productListContext } from '../../providers/ProductListProvider';

const Product = ({
    product,
    columnIndex,
    rowIndex,
    isInCell
}) => {

    const { setIsDraggingProduct } = useContext(productListContext);
    const { setIsDraggingCell } = useContext(productCellContext);

    const handleDragStart = (event, product) => {
        if(isInCell) {
            event.dataTransfer.setData('type', 'cell');
        } else {
            event.dataTransfer.setData('type', 'list');
        }
        event.stopPropagation();
        event.dataTransfer.setData('product', JSON.stringify(product));
        event.dataTransfer.setData(
            'previousPosition',
            JSON.stringify({
                columnIndex,
                rowIndex,
            })
        );
        event.dataTransfer.setData('isRow', 'false');
    };

    return (
        <div
            draggable
            onDragStart={(event) => handleDragStart(event, product)}
            onDragOver={(event) => {
                event.preventDefault();
            }}
            onDragEnd={() => isInCell ? setIsDraggingCell(false) : setIsDraggingProduct(false)}
        >
            <Card shadow='sm'>
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow='sm'
                        radius='lg'
                        width='100%'
                        alt={product.name}
                        className='w-full object-cover h-[140px]'
                        src={product.image}
                        referrerPolicy='no-referrer'
                    />
                </CardBody>
                <CardFooter className="text-small justify-between">
                    <b>{product.name}</b>
                    <p className="text-default-500">{product.price}</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Product;
