import { HiOutlineMoon } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import Head from "next/head";

const Navbar = () => (
  <>
    <section className="flex px-3 text-xs md:text-base md:px-10 justify-between items-center justify-items-center  mt-3">
      <div>
        <label className="font-bold text-xs font-bold md:text-xl">
          Where in the world?
        </label>
      </div>
      <div>
        <div className=" p-3 rounded-md flex justify-center items-center">
          <HiOutlineMoon></HiOutlineMoon>
          <span className="pl-3 font-medium">Dark Mode</span>
        </div>
      </div>
    </section>
  </>
);

const CountryComponent = () => {
  return (
    <section className="mt-10 px-5 md:px-10 flex">
      <div className=" w-80 shadow-md pb-10 ">
        <img
          src="https://flagcdn.com/ht.svg"
          className="w-full rounded-t-lg"
        ></img>
        <div className="ml-10 mt-5">
          <label className="font-bold">Germany</label>
          <div className="mt-2">
            <span className="font-medium text-sm mr-2">Population</span>
            <span className="text-sm"> 81,770,900</span>
          </div>
          <div className="mt-2">
            <span className="font-medium text-sm mr-2">Region</span>
            <span className="text-sm">Europe</span>
          </div>
          <div className="mt-2" s>
            <span className="font-medium text-sm mr-2">Capital</span>
            <span className="text-sm">Berlin</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const SearchSection = () => {
  const [visible, setVisible] = useState("visible");
  const [region, setRegion] = useState("Africa");

  const toggle = (region) => {
    //visible === "visible" ? setVisible("") : setVisible("visible");
    console.log(region);
  };

  return (
    <div className="px-3 md:px-10 mt-5 md:grid grid-cols-2  sm:block">
      <div className="flex items-center shadow-md p-5 col-span-1">
        <HiOutlineSearch></HiOutlineSearch>
        <input
          className="focus:outline-none pl-3"
          type="text"
          placeholder="Search for a country..."
        ></input>
      </div>
      <div className="flex md:justify-end items-center col-span-1">
        <div className="mt-5">
          <div className="group relative pl-0">
            <button className="p-5 rounded flex items-center gap-5 shadow-md">
              Filter by Region
              <HiChevronDown></HiChevronDown>
            </button>
            <nav
              tabIndex="0"
              className={`border border-2 bg-white invisible w-full rounded absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-2xl`}
            >
              <ul className="py-1">
                <li onClick={() => toggle("africa")} region="africa">
                  <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                    Africa
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                    America
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                    Asian
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                    Europe
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                    Oceania
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <SearchSection></SearchSection>
      <CountryComponent></CountryComponent>
    </>
  );
}
