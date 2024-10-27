import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const SelectOrientation = ({
    row,
    rowIndex,
    productGrid,
    setProductGrid
}) => {
    const defaultPositions = [
        { key: "left", label: "Left" },
        { key: "center", label: "Center" },
        { key: "right", label: "Right" },
    ];

    const handleSelect = (event) => {
        let arrAuxL = [];
        let arrAuxC = [];
        let arrAuxR = [];

        switch (event.target.value) {
            case 'left':
                row.forEach(eachElem => {
                    if(eachElem){
                        arrAuxL.push(eachElem);
                    } else {
                        arrAuxR.push(eachElem);
                    }
                });
                setProductGrid(productGrid.map((eachRow, idx) => {
                    if(idx === rowIndex){
                        return [...arrAuxL, ...arrAuxR];
                    }
                    return eachRow;
                }))
                break;
            case 'center':
                row.forEach(eachElem => {
                    if(eachElem){
                        arrAuxC.push(eachElem);
                    } else {
                        arrAuxL.push(eachElem);
                    }
                });
                setProductGrid(productGrid.map((eachRow, idx) => {
                    if(idx === rowIndex){
                        arrAuxL.splice(Math.floor(arrAuxL.length/2), 0, ...arrAuxC);
                        return arrAuxL;
                    }
                    return eachRow;
                }));
                break;
            case 'right':
                row.forEach(eachElem => {
                    if(eachElem){
                        arrAuxR.push(eachElem);
                    } else {
                        arrAuxL.push(eachElem);
                    }
                });
                setProductGrid(productGrid.map((eachRow, idx) => {
                    if(idx === rowIndex){
                        return [...arrAuxL, ...arrAuxR]
                    }
                    return eachRow
                }))
                break;
            default:
                break;
        }
    }

    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select label="Select a position" className="max-w-xs" onChange={handleSelect} data-cy={'select-orientation'}>
                {defaultPositions.map((eachPosition) => (
                    <SelectItem key={eachPosition.key} data-cy={`select-option-${eachPosition.key}`}>
                        {eachPosition.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );
};

export default SelectOrientation;
