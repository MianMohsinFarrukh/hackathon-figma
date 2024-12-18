// "use client"; // Add this directive at the top

// import Link from "next/link";
// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io"; // Importing the icon

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState<string>("");

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLinkClick = (link: string) => {
//     setActiveLink(link);
//     setIsOpen(false); // Close the menu on mobile
//   };

//   const navItems = [
//     { name: "Home", link: "/pages/hero" },
//     { name: "Pages", link: "/pages" },
//     { name: "Products", link: "/pages/products" },
//     { name: "Blog", link: "/pages/blog" },
//     { name: "Shop", link: "/shop" },
//     { name: "Contact", link: "/pages/contacts" },
//   ];

//   return (
//     <header className="bg-white text-white">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-black">
//           <Link href="/" className="hover:text-pink-500">
//             Hekto
//           </Link>
//         </h1>

//         {/* Search Bar for Mobile */}
//         <div className="flex md:hidden ml-14 items-center space-x-2">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-32 px-3 py-1 text-black outline outline-2 outline-offset-2 rounded-md focus:outline"
//           />
//           <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-md">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Desktop Nav Links */}
//         <nav className="hidden md:flex space-x-8">
//           {navItems.map((navItem) => (
//             <Link
//               key={navItem.link}
//               href={navItem.link}
//               className={`text-black hover:text-pink-300 ${
//                 activeLink === navItem.link ? "text-pink-500" : ""
//               }`}
//               onClick={() => handleLinkClick(navItem.link)}
//             >
//               {navItem.name}
//               {activeLink === navItem.link && (
//                 <IoIosArrowDown className="inline-block ml-1" />
//               )}
//             </Link>
//           ))}
//         </nav>

//         {/* Desktop Search Bar */}
//         <div className="relative hidden md:block">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-48 px-4 py-2 h-8 pb-1 outline outline-2 outline-offset-2 rounded-l-md focus:outline text-black"
//           />
//           <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 mt-1 rounded-r-md">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-black focus:outline-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden absolute top-0 left-0 right-0 bg-purple-300 text-white z-50 transition-all transform translate-y-full">
//           <nav className="flex flex-col ml-6 py-1">
//             {navItems.map((navItem) => (
//               <Link
//                 key={navItem.link}
//                 href={navItem.link}
//                 className="text-black hover:text-pink-300"
//                 onClick={() => handleLinkClick(navItem.link)}
//               >
//                 {navItem.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5"; // Cross icon

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<Record<string, boolean>>({});
  const [activeLink, setActiveLink] = useState<string>("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen({});
  };

  const toggleDropdown = (menu: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    closeMenu(); // Close the menu and dropdowns
  };

  const navItems = [
    { name: "Home", link: "/pages/hero" },
    {
      name: "Pages",
      link: "/pages",
      isDropdown: true,
      subLinks: [
        { name: "About Us", link: "/pages/aboutus" },
        { name: "Hekto Demo", link: "/pages/hektodemo" },
      ],
    },
    {
      name: "Products",
      link: "/pages/products",
      isDropdown: true,
      subLinks: [
        { name: "Products", link: "/pages/products" },
        { name: "Grid", link: "/pages/grid" },
      ],
    },
    {
      name: "Blog",
      link: "/pages/blog",
      isDropdown: true,
      subLinks: [
        { name: "Blog", link: "/pages/blog" },
        { name: "Single Blog", link: "/pages/singleblog" },
      ],
    },
    {
      name: "Shop",
      link: "/pages/shop",
      isDropdown: true,
      subLinks: [
        { name: "Shop List", link: "/pages/wishlist-shoplist" },
        { name: "Shop leftside", link: "/pages/shopleftside" },
        { name: "Shopping Card", link: "/pages/shopingcard" },
      ],
    },
    {
      name: "Contact",
      link: "/pages/contacts",
      isDropdown: true,
      subLinks: [
        { name: "Contact Us", link: "/pages/contacts/" },
        { name: "FAQ", link: "/pages/faq" },
        { name: "Page Found", link: "/pages/pagefound" },
      ],
    }
  ];

  function closeAllDropdowns(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <header className="bg-white text-black">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link href="/">Hekto</Link>
        </h1>

        {/* Search Bar for Mobile */}
        <div className="flex md:hidden items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-32 px-3 py-1 border rounded-md"
          />
          <button className="bg-pink-500 text-white p-2 rounded-md">
            <FaSearch />
          </button>
        </div>

        {/* Desktop Nav Links
        <nav className="hidden md:flex space-x-8">
          {navItems.map((navItem) => (
            <div key={navItem.link} className="relative z-50">
              {navItem.isDropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(navItem.name)}
                    className="hover:text-pink-500"
                  >
                    {navItem.name}
                    <IoIosArrowDown className="inline-block ml-1" />
                  </button>
                  {dropdownOpen[navItem.name] && (
                    <div className="absolute left-0 mt-2 bg-white shadow-lg w-40">
                      {navItem.subLinks?.map((subLink) => (
                        <Link
                          key={subLink.link}
                          href={subLink.link}
                          className="block px-4 py-2 text-black hover:bg-pink-100"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={navItem.link} className="hover:text-pink-500">
                  {navItem.name}
                </Link>
              )}
            </div>
          ))}
        </nav> */}





{/* Desktop Nav Links */}
<nav className="hidden md:flex space-x-8">
  {navItems.map((navItem) => (
    <div key={navItem.link} className="relative z-50">
      {navItem.isDropdown ? (
        <>
          <button
            onClick={() => toggleDropdown(navItem.name)}
            className="hover:text-pink-500"
          >
            {navItem.name}
            <IoIosArrowDown className="inline-block ml-1" />
          </button>
          {dropdownOpen[navItem.name] && (
            <div className="absolute left-0 mt-2 bg-white shadow-lg w-40">
              {navItem.subLinks?.map((subLink) => (
                <Link
                  key={subLink.link}
                  href={subLink.link}
                  className="block px-4 py-2 text-black hover:bg-pink-100"
                  onClick={() => toggleDropdown(navItem.name)} // Close menu after clicking
                >
                  {subLink.name}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <Link
          href={navItem.link}
          className="hover:text-pink-500"
          onClick={() => closeAllDropdowns()} // Optional: close all dropdowns when navigating
        >
          {navItem.name}
        </Link>
      )}
    </div>
  ))}
</nav>






















        {/* Desktop Search Bar */}
        <div className="relative hidden md:flex">
          <input
            type="text"
            placeholder="Search..."
            className="w-48 px-3 py-2 border rounded-l-md"
          />
          <button className="bg-pink-500 text-white px-4 py-2 rounded-r-md">
            <FaSearch />
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none border-2 px-2  rounded-sm">
            {isOpen ? <IoClose size={40} /> : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-purple-300 text-purple-900 z-50">
          <div className="flex justify-between px-4 py-4">
            <h2 className="text-xl font-bold text-purple-900">Menu</h2>
            <button onClick={closeMenu} className="text-purple-900">
              <IoClose size={28} />
            </button>
          </div>
          <nav className="flex flex-col px-4">
            {navItems.map((navItem) => (
              <div key={navItem.link} className="relative">
                {navItem.isDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(navItem.name)}
                      className="flex justify-between w-full py-2"
                    >
                      {navItem.name}
                      <IoIosArrowDown />
                    </button>
                    {dropdownOpen[navItem.name] && (
                      <div className=" bg-purple-400 rounded">
                        {navItem.subLinks?.map((subLink) => (
                          <Link
                            key={subLink.link}
                            href={subLink.link}
                            className="block px-auto px-2 py-2 text-white hover:bg-pink-500"
                            onClick={() => handleLinkClick(subLink.link)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={navItem.link}
                    className="block py-2 hover:text-pink-500"
                    onClick={() => handleLinkClick(navItem.link)}
                  >
                    {navItem.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

