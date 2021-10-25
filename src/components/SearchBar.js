import { HiOutlineSearch } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";

const SearchSection = () => {
  return (
    <div className="mt-5 md:grid grid-cols-2  sm:block">
      <div className="flex items-center shadow-md p-5 col-span-1">
        <HiOutlineSearch></HiOutlineSearch>
        <input
          className="focus:outline-none pl-3 pr-0 w-full"
          type="text"
          placeholder="Search for a country..."
        ></input>
      </div>
      <div className="flex md:justify-end items-center col-span-1">
        <div className="mt-5">
          <div className="group relative pl-0">
            <button className="p-5 rounded flex items-center gap-5 shadow-md hover:ring ring-green-100">
              Filter by Region
              <HiChevronDown></HiChevronDown>
            </button>
            <nav
              tabIndex="0"
              className={`border-2 bg-white invisible w-full rounded absolute left-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1 shadow-2xl`}
            >
              <ul className="py-1">
                <li onClick={() => toggle("Africa")} region="africa">
                  <a href="#" className="block px-4 py-1 hover:bg-gray-100">
                    Africa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => toggle("America")}
                    className="block px-4 py-1 hover:bg-gray-100"
                  >
                    America
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => toggle("Asia")}
                    className="block px-4 py-1 hover:bg-gray-100"
                  >
                    Asian
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => toggle("Europe")}
                    className="block px-4 py-1 hover:bg-gray-100"
                  >
                    Europe
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => toggle("Oceania")}
                    className="block px-4 py-1 hover:bg-gray-100"
                  >
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

export default SearchSection;
