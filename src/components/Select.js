import { Menu, Transition } from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";
export default function MunuSelect({ toggle }) {
  return (
    <div className="w-56 text-right top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-3 font-bold transition-all rounded-md shadow-md space-x-14 hover:shadow-lg hover:bg-opacity-30 focus:outline-none dark:bg-grayishDarkBlue focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 group">
            <span>Filter by Region</span>
            <BiChevronDown
              className="w-5 h-5 ml-2 -mr-1 group-focus-within:-rotate-180 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        {/* <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        > */}
          <Menu.Items className="absolute right-0 w-56 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg dark:bg-grayishDarkBlue ring-1 ring-black ring-opacity-5 focus:outline-none">
            {["Africa", "Americas", "Asia", "Europe", "Oceania", "None"].map(
              (item) => {
                return (
                  <Menu.Item key={item + "menuItem"}>
                    {({ active }) => (
                      <button
                        onClick={() => toggle(item)}
                        className={`${
                          active
                            ? " bg-grayishDarkBlue dark:bg-white dark:text-black text-white"
                            : "text-gray-900"
                        } group flex dark:text-white font-bold items-center w-full px-4 py-2 text-sm`}
                      >
                        {item}
                      </button>
                    )}
                  </Menu.Item>
                );
              }
            )}
          </Menu.Items>
        {/* </Transition> */}
      </Menu>
    </div>
  );
}
