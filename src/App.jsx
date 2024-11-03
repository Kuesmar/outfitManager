import React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductGrid from "./components/ProductGrid";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    const [productGrid, setProductGrid] = useState([]);
    useEffect(() => {
        let rowEmptyToRemove = null;
        productGrid.forEach((eachRow, eachRowIdx) => {
            let isRowEmpty = true;

            for (let index = 0; index < eachRow.length; index++) {
                if (eachRow[index]) {
                    isRowEmpty = false;
                }
            }

            if (isRowEmpty) {
                rowEmptyToRemove = eachRowIdx;
            }
        });
        if (rowEmptyToRemove !== null) {
            setProductGrid(
                productGrid.filter((_, rowIndex) => {
                    if (rowEmptyToRemove === rowIndex) {
                        return false;
                    }
                    return true;
                })
            );
        }
    }, [productGrid]);

    return (
        <div className="h-screen bg-gradient-to-tr from-[#FFB457] to-[#FF705B] flex flex-col">
            <Header />
            <div className="flex flex-row my-6 flex-grow overflow-hidden">
                <div className="w-1/2 overflow-auto ml-6 mr-3 h-full">
                    <ProductList />
                </div>
                <div className="w-1/2 overflow-auto ml-3 mr-6 h-full">
                    <ProductGrid
                        productGrid={productGrid}
                        setProductGrid={setProductGrid}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
