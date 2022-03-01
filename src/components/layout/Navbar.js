import { HiOutlineMoon } from "react-icons/hi";
import { MdOutlineLightMode } from "react-icons/md";
const { motion, AnimatePresence } = require("framer-motion");

const Navbar = (props) => {
  return (
    <>
      <section className="flex items-center justify-between px-5 py-3 text-xs shadow-md dark:bg-grayishDarkBlue dark:text-white 2xl:px-28 md:text-base justify-items-center">
        <div>
          <label className="text-xs font-bold md:text-xl">
            Where in the world?
          </label>
        </div>
        <div>
          <div
            onClick={props.toggleTheme}
            className="flex items-center justify-center px-3 py-3 transition-all rounded-lg hover:cursor-pointer dark:hover:bg-veryDarkBlue hover:bg-gray-200"
          >
            <AnimatePresence>
              {props.theme === "light" && (
                <motion.span
                  layout
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                >
                  <HiOutlineMoon className="w-5 h-5"></HiOutlineMoon>
                </motion.span>
              )}
            </AnimatePresence>
            {props.theme === "light" && (
              <span className="pl-3 font-medium">Dark Mode</span>
            )}
            <AnimatePresence>
              {props.theme === "dark" && (
                <motion.span
                  layout
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                >
                  <MdOutlineLightMode className="w-5 h-5"></MdOutlineLightMode>
                </motion.span>
              )}
            </AnimatePresence>
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
