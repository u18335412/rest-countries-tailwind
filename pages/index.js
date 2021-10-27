import { useState } from "react";

import SearchSection from "../src/components/SearchBar";
import { getAllData } from "../src/data/data";
import { useRouter } from "next/router";

export const getStaticProps = async (context) => {
  const data = await getAllData();
  return {
    props: { countries: data },
  };
};

const Home = ({ countries }) => {
  const router = useRouter();
  const CountryComponent = ({ countries }) => {
    return (
      <>
        <section className="mt-10  gap-x-24 grid place-items-center md:grid-cols-3 lg:grid-cols-4">
          {countries.map((c, idx) => {
            const capitals = c.capital;
            return (
              <div
                key={idx}
                className=" h-5/6 mb-5 flex flex-col shadow-lg pb-10 mt-5 w-12/12 md:w-3/3 lg:w-4/4"
                onClick={() => {
                  router.push(c.name.common);
                }}
              >
                <div>
                  <img src={c.flags.svg} className="rounded-t-lg"></img>
                </div>
                <div className="mt-5 ml-5">
                  <label className="font-bold">{c.name.common}</label>
                  <div className="mt-2">
                    <span className="font-medium text-sm mr-2">Population</span>
                    <span className="text-sm"> {c.population}</span>
                  </div>
                  <div className="mt-2">
                    <span className="font-medium text-sm mr-2">Region</span>
                    <span className="text-sm">{c.region}</span>
                  </div>
                  <div className="mt-2">
                    <span className="font-medium text-sm mr-2">Capital</span>
                    <span className="text-sm">
                      {capitals === undefined ? "" : capitals.toString()}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </>
    );
  };
  return (
    <>
      <div className="px-5 lg:px-60">
        <SearchSection></SearchSection>
        <CountryComponent countries={countries}></CountryComponent>
      </div>
    </>
  );
};

export default Home;
