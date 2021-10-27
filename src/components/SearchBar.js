import { HiOutlineSearch } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";
const SearchSection = (props) => {
  const p = props;
  const [visible, setVisible] = useState("visible");
  const handleChange = (e) => {
    p.update(e.target.value);
  };

  const handleSelect = () => {
    visible === "visible" ? setVisible("") : setVisible("visible");
  };

  return (
    <div className="pt-10 flex flex-col md:flex-row gap-10  md:justify-between">
      <div className="flex pl-5 h-12 w-full md:w-96 dark:bg-grayishDarkBlue items-center rounded-md shadow-md">
        <HiOutlineSearch></HiOutlineSearch>
        <input
          className="focus:outline-none pl-5 pr-0 w-full dark:bg-grayishDarkBlue"
          type="text"
          placeholder="Search for a country..."
          value={props.input}
          onChange={handleChange}
        ></input>
      </div>
      <div className="md:justify-end items-center col-span-1">
        <div className="group relative pl-0" onClick={() => handleSelect()}>
          <button className="flex items-center px-4 rounded-md dark:bg-grayishDarkBlue  h-12 gap-5 shadow-md hover:ring ring-green-100">
            Filter by Region
            <HiChevronDown></HiChevronDown>
          </button>
          <nav
            tabIndex="0"
            className={`border-2 ring-0 dark:bg-grayishDarkBlue invisible w-full rounded absolute left-0 top-full transition-all opacity-0 group-focus-within:${visible} group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-2xl`}
          >
            <ul className="py-1 bg-white dark:bg-grayishDarkBlue">
              <li
                onClick={() => {
                  handleSelect();
                  props.toggle("Africa");
                }}
                region="africa"
              >
                <a
                  href="#"
                  className="block px-4 py-1 hover:bg-gray-100 hover:text-black"
                >
                  Africa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    handleSelect();
                    props.toggle("Americas");
                  }}
                  className="block px-4 py-1 hover:bg-gray-100 hover:text-black"
                >
                  Americas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    handleSelect();
                    props.toggle("Asia");
                  }}
                  className="block px-4 py-1 hover:bg-gray-100 hover:text-black"
                >
                  Asian
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    handleSelect();
                    props.toggle("Europe");
                  }}
                  className="block px-4 py-1 hover:bg-gray-100 hover:text-black"
                >
                  Europe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    handleSelect();
                    props.toggle("Oceania");
                  }}
                  className="block px-4 py-1 hover:bg-gray-100 darkhover:text-black"
                >
                  Oceania
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
