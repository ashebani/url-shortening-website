import React from "react";

const Footer = () => {
  const links = [
    {
      title: "Features",
      children: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      children: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      children: ["About", "Our Team", "Careers", "Contact"],
    },
  ];
  const socialMedia = ["facebook", "instagram", "twitter", "pinterest"];

  return (
    <footer className="md:py-20 py-12 bg-gray-950 md:text-left text-white grid lg:flex gap-10 justify-center lg:justify-evenly  text-center text-lg lg:items-start">
      <img
        src={require(`../images/logo copy.svg`).default}
        alt="logo"
        className="justify-self-center py-4 md:py-4 lg:p-0"
      />

      {/* Links Section */}
      <div className="md:flex md:gap-32 gap-10 grid">
        {links.map((group, idx) => {
          return (
            <div data-aos={"fade-down"} key={idx}>
              <p className="pb-4 font-bold">{group.title}</p>
              <ul className="text-neutralGrayishViolet grid gap-1">
                {group.children.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="hover:text-cyan-300" href="/">
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Social Media Images Section */}
      <div className="flex gap-6 justify-center md:p-0">
        {socialMedia.map((item, index) => {
          return (
            <img
              key={index}
              src={require(`../images/icon-${item}.svg`)}
              alt={`${item}`}
              className="h-min cursor-pointer"
            />
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
