import Head from "next/head";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout shape>
      <Head>
        <title>Points of interest</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
