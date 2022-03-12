import { useEffect, useState } from "react";
import Head from "next/head";
import SearchSection from "../src/components/SearchBar";
import { getAllData } from "../src/data/data";
import { useRouter } from "next/router";
import Link from "next/link";
const { motion, AnimatePresence } = require("framer-motion");

export const getStaticProps = async (context) => {
  const data = await getAllData();
  return {
    props: { countries: data },
  };
};

function Country({ c }) {
  return (
    <Link href={`/${c.name.common}`}>
      <div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0.5 }}
        className="flex flex-col pb-10 mt-5 mb-5 transition-shadow rounded-t-lg shadow-lg cursor-pointer dark:bg-grayishDarkBlue hover:shadow-2xl h-[21rem] w-[16.5rem]"
      >
        <div>
          <div>
            <img
              src={c.flags.svg}
              className="object-cover rounded-t-lg w-[16.5rem] h-44"
              alt={`${c.name.common} flag`}
            ></img>
          </div>
          <div className="h-full p-6">
            <label className="font-bold">{c.name.common}</label>
            <div className="mt-2">
              <span className="mr-2 text-sm font-semibold ">Population:</span>
              <span className="text-sm"> {c.population}</span>
            </div>
            <div className="mt-2">
              <span className="mr-2 text-sm font-semibold ">Region:</span>
              <span className="text-sm">{c.region}</span>
            </div>
            <div className="mt-2">
              <span className="mr-2 text-sm font-semibold ">Capital:</span>
              <span className="text-sm">{c.capital?.toString()}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

const Home = ({ countries }) => {
  // const router = useRouter();
  const [region, setRegion] = useState("None");
  const [searchValue, setSearchValue] = useState("");
  const [filterd, setFilterd] = useState(countries);

  useEffect(() => {
    setFilterd(
      countries.filter(
        (c) =>
          c.name.common
            .toLowerCase()
            .includes(searchValue.toLocaleLowerCase()) === true &&
          (region === "None" || (region !== "None" && c.region === region))
      )
    );
  }, [region, searchValue]);

  const toggle = (value) => {
    setRegion(value);
  };

  const handleChange = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Head>
        <title>Countries</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen px-5 2xl:px-[5rem]  dark:bg-veryDarkBlue dark:text-white">
        <SearchSection
          toggle={toggle}
          input={searchValue}
          update={handleChange}
        ></SearchSection>
        <div layout className="flex justify-center gap-y-[4.688rem] flex-wrap md:gap-x-[4.625rem] md:justify-between mt-12">
          {/* <AnimatePresence> */}
          {filterd.map((c) => {
            return <Country key={c.name.common} c={c}></Country>;
          })}
          {/* </AnimatePresence> */}
        </div>
      </div>
    </>
  );
};

export default Home;
