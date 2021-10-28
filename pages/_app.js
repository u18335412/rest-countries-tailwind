import "tailwindcss/tailwind.css";
import Head from "next/head";
import Navbar from "../src/components/layout/Navbar";
import cookieCutter from 'cookie-cutter'
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className={theme}>
      <Navbar toggleTheme={toggleTheme} theme={theme}></Navbar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
