import type { AppProps } from "next/app";

const _app = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default _app;
