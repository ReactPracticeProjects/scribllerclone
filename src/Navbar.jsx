import React, { useEffect, useRef } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        console.log("ScrollY:", window.scrollY); // Debugging

        if (window.scrollY > 50) {
          navbarRef.current.style.backgroundColor = "#ffffff";
          navbarRef.current.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
        } else {
          navbarRef.current.style.backgroundColor = "#fede02";
          navbarRef.current.style.boxShadow = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let items = ["Home", "Features", "Use Cases", "Docs", "Gallery", "Tutorials", "Blog", "Contact"];

  return (
    <nav
      ref={navbarRef}
      className="navbar transition-all duration-300 flex gap-10 px-20 py-6 justify-between items-center fixed top-0 left-0 w-full bg-[#FEDE02] shadow-md z-50"
    >
      <p className="text-2xl text-[#888888] font-semibold">Scribbler</p>

      <ul className="flex gap-10 list-none text-[15px] font-semibold text-[#555555]">
        {items.map((item, index) => (
          <li className="hover:text-sky-700" key={index}>{item}</li>
        ))}
      </ul>
<div className="hidden">
<IoMenuSharp />
</div>
      <div className="flex gap-2 text-[#555555]">
        <div className="border-2 border-[#555555] rounded-sm p-2 text-2xl">
          <CiPlay1 />
        </div>
        <div className="border-2 border-[#555555] rounded-sm p-2 text-2xl">
          <FaGithub />
        </div>
        <div className="border-2 border-[#555555] rounded-sm p-2 text-2xl">
          <FaDiscord />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
