import { useState } from "react";
import Head from "next/head";
import SearchSection from "../src/components/SearchBar";
import { getAllData } from "../src/data/data";
import { useRouter } from "next/router";
import Link from "next/link";

export const getStaticProps = async (context) => {
  const data = await getAllData();
  return {
    props: { countries: data },
  };
};

const Home = ({ countries }) => {
  const router = useRouter();
  const [region, setRegion] = useState("none");
  const [searchValue, setSearchValue] = useState("");

  const toggle = (value) => {
    setRegion(value);
  };

  const handleChange = (value) => {
    setSearchValue(value);
  };

  const CountryComponent = ({ countries }) => {
    return (
      <>
        <Head>
          <title>Countries</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <section className="mt-5 gap-x-20 grid place-items-center md:grid-cols-3 lg:grid-cols-4 ">
          {countries.map((c, idx) => {
            if (c.name.common.toLowerCase().includes(searchValue.toLocaleLowerCase()) === false) return;
            const capitals = c.capital;
            if (
              region === "none" ||
              (region !== "none" && c.region === region)
            ) {
              return (
                <div
                  key={idx}
                  className="dark:bg-grayishDarkBlue cursor-pointer hover:shadow-xl  h-5/6 mb-5 flex flex-col shadow-lg pb-10 mt-5 w-12/12 md:w-3/3 lg:w-4/4"
                  onClick={() => {
                    router.push(c.name.common);
                  }}
                >
                  <Link href={`/${c.name.common}`}>
                    <>
                      <div>
                        <img
                          src={c.flags.svg}
                          className=" rounded-t-lg object-cover w-72 h-40"
                          alt={`${c.name.common} flag`}
                        ></img>
                      </div>
                      <div className="pt-5 pl-5  h-full">
                        <label className="font-bold">{c.name.common}</label>
                        <div className="mt-2">
                          <span className=" font-semibold text-sm mr-2">
                            Population
                          </span>
                          <span className="text-sm"> {c.population}</span>
                        </div>
                        <div className="mt-2">
                          <span className=" font-semibold text-sm mr-2">
                            Region
                          </span>
                          <span className="text-sm">{c.region}</span>
                        </div>
                        <div className="mt-2">
                          <span className=" font-semibold text-sm mr-2">
                            Capital
                          </span>
                          <span className="text-sm">
                            {capitals === undefined ? "" : capitals.toString()}
                          </span>
                        </div>
                      </div>
                    </>
                  </Link>
                </div>
              );
            }
          })}
        </section>
      </>
    );
  };
  return (
    <>
      <div className="px-5 2xl:px-28 dark:bg-veryDarkBlue dark:text-white min-h-screen">
        <SearchSection
          toggle={toggle}
          input={searchValue}
          update={handleChange}
        ></SearchSection>
        <CountryComponent countries={countries}></CountryComponent>
      </div>
    </>
  );
};

export default Home;
