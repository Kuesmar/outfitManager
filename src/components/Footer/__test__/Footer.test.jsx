import { render, screen } from "@testing-library/react";
import Footer from "..";

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: key => key,
        i18n: { changeLanguage: jest.fn() }
    })
}));


describe('Component: Footer', () => {
    it('Should render Syersy text', () => {
        render(
            <Footer />
        );
        expect(screen.queryByText('Footer.label-company'));
    });

    it('Should render Copyright text', () => {
        render(
            <Footer />
        );
        expect(screen.queryByText('Footer.label-copyright'));
    });

    it('Should render Socialmedia icons', () => {
        render(
            <Footer />
        );
        expect(screen.getByTestId('icon-github'));
        expect(screen.getByTestId('icon-instagram'));
        expect(screen.getByTestId('icon-linkedin'));
        expect(screen.getByTestId('icon-twitter'));
        expect(screen.getByTestId('icon-youtube'));
    });
});
