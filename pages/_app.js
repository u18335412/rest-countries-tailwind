import "tailwindcss/tailwind.css";
import Head from "next/head";

const getStaticProps = async () => {
  return {
    props: [],
  };
};

function MyApp({ Component, pageProps }) {
  //console.log(pageProps);
  return <Component {...pageProps} />;
}

export default MyApp;
