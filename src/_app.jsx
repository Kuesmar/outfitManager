
import {NextUIProvider} from "@nextui-org/react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import App from "./App";

function WrapTheme({ pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <App {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default WrapTheme;