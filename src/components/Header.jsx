import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeOnBig = () => {
    console.log("first");
    if (window.innerWidth >= 768) {
      setOpen(false);
    }
  };

  useEffect(() => {
    closeOnBig();
  }, []);

  return (
    <header className="p-6 md:py-6 md:px-20 lg:px-40 flex items-center justify-between text-center">
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
        <button className="text-neutralGrayishViolet pr-4">Login</button>
        <button className="bg-primaryCyan text-neutralWhite px-6 py-2 rounded-full font-bold text-md hover:bg-cyan-200">
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
      {open ? (
        <div className="fixed top-0 left-0 right-0 z-20">
          <nav className="navbar bg-primaryCyanViolet absolute left-0 right-0 p-8 top-24 mx-6 rounded-xl text-white text-xl grid font-bold gap-8 z-50">
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Resources</a>
            <hr className="border-neutralGrayishViolet border-[.1px]" />
            <button>Login</button>
            <button className="bg-primaryCyan text-neutralWhite py-3 rounded-full font-bold text-md hover:bg-cyan-200">
              Sign Up
            </button>
            <div
              onClick={() => setOpen(!open)}
              className="fixed top-0 left-0 right-0 -z-20 w-full h-full "
            ></div>
          </nav>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
