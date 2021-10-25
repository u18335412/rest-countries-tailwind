import { HiOutlineMoon } from "react-icons/hi";

const Navbar = () => (
  <>
    <section className="flex text-xs md:text-base justify-between items-center justify-items-center  mt-3">
      <div>
        <label className="font-bold text-xs font-bold md:text-xl">
          Where in the world?
        </label>
      </div>
      <div>
        <div className=" py-3 rounded-md flex justify-center items-center hover:cursor-pointer">
          <HiOutlineMoon></HiOutlineMoon>
          <span className="pl-3 font-medium">Dark Mode</span>
        </div>
      </div>
    </section>
  </>
);

export default Navbar;
