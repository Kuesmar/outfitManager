import React from 'react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import OutfitList from './components/OutfitList';
import ProductList from './components/ProductList';

function App() {
    const [initialProductList, setInitialProductList] = useState([]);
    const [outfitProductList, setOutfitProductList] = useState([]);
    const [outfitRowList, setOutfitRowList] = useState([]);
    const [skeletonRow, setSkeletonRow] = useState([
        { id: '1' },
        { id: '2' },
        { id: '3' }
    ]);
    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await fetch(
                    'http://demo9820758.mockable.io/products'
                );
                return data.json();
            };
            fetchData().then((getInfo) => setInitialProductList(getInfo));
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <div>
            <h1 className='text-4xl font-bold'>Outfit Manager</h1>
			<div className='flex'>
				<ProductList initialProductList={initialProductList} />
				<OutfitList
					outfitProductList={outfitProductList}
					setOutfitProductList={setOutfitProductList}
					outfitRowList={outfitRowList}
					setOutfitRowList={setOutfitRowList}
					skeletonRow={skeletonRow}
				/>
			</div>
        </div>
    );
}

export default App;
