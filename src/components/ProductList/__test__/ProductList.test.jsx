import { render, screen } from "@testing-library/react";
import ProductList from "..";

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: key => key,
        i18n: { changeLanguage: jest.fn() }
    })
}));

const initialProductList = [
    {
      "id": "1",
      "name": "jean",
      "image": "https://picsum.photos/150/100",
      "price": 59
    },
    {
      "id": "2",
      "name": "hoodie",
      "image": "https://picsum.photos/150/100",
      "price": 79
    }
];

describe('Component: ProductList', () => {
    it('Should render list of products', () => {
        render(
            <ProductList initialProductList={initialProductList}/>
        );
        expect(screen.queryByText('jean')).toBeInTheDocument();
        expect(screen.queryByText('hoodie')).toBeInTheDocument();
    });
});