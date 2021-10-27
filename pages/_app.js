import "tailwindcss/tailwind.css";
import Head from "next/head";
import Navbar from "../src/components/layout/Navbar";

const getStaticProps = async () => {
  return {
    props: [],
  };
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar ></Navbar>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
