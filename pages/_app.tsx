import type { AppProps } from "next/app";
import "node_modules/bootstrap/dist/css/bootstrap.css";
import "node_modules/@fortawesome/fontawesome-free/css/all.css";
import "styles/globals.css";

const _app = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default _app;
