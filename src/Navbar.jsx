import React, { useEffect, useRef, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";


function Navbar() {
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Use Cases", id: "usecases" },
    { name: "Docs", id: "docs" },
    { name: "Gallery", id: "gallery" },
    { name: "Tutorials", id: "tutorials" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav
      ref={navbarRef}
      className="navbar transition-all duration-300 flex px-6 md:px-20 py-4 justify-between items-center fixed top-0 left-0 w-full bg-[#FEDE02] shadow-md z-50"
    >
      {/* Logo */}
      <p className="text-2xl text-[#888888] font-semibold">Scribbler</p>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-[15px] font-semibold text-[#555555]">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="hover:text-black transition">
            {item.name}
          </a>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <IoMenuSharp />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col py-4 md:hidden">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="py-2 px-6 text-[#555555] font-semibold hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item.name}
            </a>
          ))}
        </div>
      )}

      {/* Icons (Always Visible) */}
      <div className="hidden md:flex gap-2 text-[#555555]">
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
