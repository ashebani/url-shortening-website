import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeOnBig = () => {
    if (window.innerWidth >= 768) {
      setOpen(false);
    }
  };

  useEffect(() => {
    closeOnBig();
    Aos.init({ duration: 800 });
  }, []);

  return (
    <header
      className="p-6 md:py-6 md:px-20 lg:px-40 flex items-center justify-between text-center"
      data-aos="fade-down"
    >
      {/* Logo Section */}
      <div className="flex gap-4 items-center">
        <img
          className="h-max pr-4"
          src={require("../images/logo.svg").default}
          alt="logo"
        />
        <p className="font-semibold text-neutralGrayishViolet md:inline hidden ">
          Features
        </p>
        <p className="font-semibold text-neutralGrayishViolet md:inline hidden ">
          Pricing
        </p>
        <p className="font-semibold text-neutralGrayishViolet md:inline hidden ">
          Resources
        </p>
      </div>

      {/* Nav Section */}
      <div className="hidden md:flex gap-4 items-center">
        <button className="text-neutralGrayishViolet pr-4 ease-in-out duration-200 transition hover:scale-110">
          Login
        </button>
        <button className="bg-primaryCyan text-neutralWhite px-6 py-2 rounded-full font-bold text-md hover:bg-cyan-200 ease-in-out duration-200 transition hover:scale-110 ">
          Sign Up
        </button>
      </div>
      <svg
        onClick={() => setOpen(!open)}
        className="h-7 w-7 cursor-pointer md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>

      {/* Mobile Navigation */}
      {open ? (
        <nav
          data-aos="fade-right"
          className="navbar bg-primaryCyanViolet absolute left-0 right-0 p-8 top-24 mx-6 rounded-xl text-white text-xl grid font-bold gap-8 z-50"
        >
          <a className="cursor-pointer" href="/">
            Features
          </a>
          <a className="cursor-pointer" href="/">
            Pricing
          </a>
          <a className="cursor-pointer" href="/">
            Resources
          </a>
          <hr className="border-neutralGrayishViolet border-[.1px]" />
          <button
            style={{ position: "relative", zIndex: "9999" }}
            className="ease-in-out duration-200 transition hover:scale-110"
          >
            Login
          </button>
          <button
            style={{ position: "relative", zIndex: "9999" }}
            className="bg-primaryCyan text-neutralWhite py-3 rounded-full font-bold text-md hover:bg-cyan-200 ease-in-out duration-200 transition hover:scale-110"
          >
            Sign Up
          </button>
        </nav>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
