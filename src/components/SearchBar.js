import { HiOutlineSearch } from "react-icons/hi";
import MenuSelect from "./Select";
const SearchSection = (props) => {
  const handleChange = (e) => {
    props.update(e.target.value);
  };

  return (
    <div className="flex flex-col gap-10 pt-10 md:flex-row md:justify-between">
      <div className="flex pl-6 h-14 w-full md:w-[30rem] dark:bg-grayishDarkBlue items-center rounded-md shadow-md">
        <HiOutlineSearch></HiOutlineSearch>
        <input
          className="w-full pl-5 pr-0 focus:outline-none dark:bg-grayishDarkBlue"
          type="text"
          placeholder="Search for a country..."
          value={props.input}
          onChange={handleChange}
        ></input>
      </div>
      <div className="items-center col-span-1 md:justify-end">
        <MenuSelect toggle={props.toggle}></MenuSelect>
      </div>
    </div>
  );
};

export default SearchSection;
