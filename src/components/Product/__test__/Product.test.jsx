import { render, screen } from "@testing-library/react";
import Product from "..";

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: key => key,
        i18n: { changeLanguage: jest.fn() }
    })
}));

const defaultProduct = {
    "id": "1",
    "name": "jean",
    "image": "https://picsum.photos/150/100",
    "price": 59
}

describe('Component: ProductList', () => {
    it('Should render list of products', () => {
        render(
            <Product product={defaultProduct}/>
        );
        expect(screen.queryByText('jean')).toBeInTheDocument();
        expect(screen.queryByText('$59')).toBeInTheDocument();
    });

});