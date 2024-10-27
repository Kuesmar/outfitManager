import { render, screen } from "@testing-library/react";
import Header from "..";

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: key => key,
        i18n: { changeLanguage: jest.fn() }
    })
}));


describe('Component: Header', () => {
    it('Should render main title text', () => {
        render(
            <Header />
        );
        expect(screen.queryByText('Header.main-title'));
    });

    it('Should render a theme switcher', () => {
        render(
            <Header />
        );
        expect(screen.getByTestId('theme-switcher-id'));
    });
});