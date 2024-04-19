import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Frontend developer - Portfolio</title>
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
