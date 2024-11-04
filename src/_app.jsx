import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import App from "./App";
import './i18n';
import ProductListProvider from "./providers/ProductListProvider";
import ProductRowProvider from "./providers/ProductRowProvider";
import ProductCellProvider from "./providers/ProductCellProvider";

function WrapTheme({ pageProps }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="dark">
                <ProductListProvider>
                    <ProductRowProvider>
                        <ProductCellProvider>
                            <App {...pageProps} />  
                        </ProductCellProvider>
                    </ProductRowProvider>
                </ProductListProvider>
            </NextThemesProvider>
        </NextUIProvider>
    );
}

export default WrapTheme;
