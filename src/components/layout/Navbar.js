import { HiOutlineMoon } from "react-icons/hi";
import { MdOutlineLightMode } from "react-icons/md";
const Navbar = (props) => {
  return (
    <>
      <section className=" dark:bg-grayishDarkBlue dark:text-white px-5 xl:px-60  shadow-md flex text-xs md:text-base justify-between items-center justify-items-center  py-3">
        <div>
          <label className=" font-bold text-xs font-bold md:text-xl">
            Where in the world?
          </label>
        </div>
        <div>
          <div
            onClick={props.toggleTheme}
            className="py-3 rounded-md flex justify-center items-center hover:cursor-pointer"
          >
            {props.theme === "light" && <HiOutlineMoon></HiOutlineMoon>}
            {props.theme === "light" && (
              <span className="pl-3 font-medium">Dark Mode</span>
            )}
            {props.theme === "dark" && <MdOutlineLightMode></MdOutlineLightMode>}
            {props.theme === "dark" && (
              <span className="pl-3 font-medium">Light Mode</span>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
