import React, { useState, useEffect, useRef } from "react";
import jordan from "./../assets/jordan.svg";
import converse from "./../assets/converse.png";
import logo from "./../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // Delay of 300ms before hiding the menu
  };

  return (
    <>
      <div className="bg-[#F5F5F5] flex justify-between h-10 items-center">
        {/* Logo section */}
        <div className="ml-5 mt-3 flex">
          <div className="topBar flex">
            <div className="size-6">
              <img src={jordan} alt="Jordan Logo" />
            </div>
            <div className="size-8 ml-2">
              <img src={converse} alt="Converse Logo" />
            </div>
          </div>
        </div>
        {/* Top Navbar Section */}
        <div className="mr-8 p-4">
          <nav>
            <ul className="flex space-x-4 text-sm font-medium text-gray-600">
              <li className="ml-1">
                Find a Store <span className="ml-1"> |</span>
              </li>
              <li className="ml-1">
                Help <span className="ml-1"> |</span>
              </li>
              <li className="ml-1">
                Join Us <span className="ml-1"> |</span>

              </li>
              <Link to ='/login'>
              <li className="ml-1">Sign In</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main NavBar */}
      <div className="flex justify-between items-center py-6">
        {/* Main Logo Section */}
       <Link to='/'> <div className="ml-7">
          <img src={logo} alt="Nike Logo" className="h-10" />
        </div></Link>

        {/* Main Navbar Section */}
        <div className="flex-1 flex justify-center relative">
          <nav>
            <ul className="flex space-x-8 text-lg font-semibold text-gray-800">
              <li
                className="group relative"
                onMouseEnter={() => handleMouseEnter("sale")}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="hover:underline pl-10"></a>
              </li>

              <li
                className="group relative"
                onMouseEnter={() => handleMouseEnter("sale")}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="hover:underline pl-10"></a>
              </li>

              <li
                className="group relative ml-25"
                onMouseEnter={() => handleMouseEnter("newAndFeatured")}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="hover:underline">
                  New & Featured
                </a>
                {activeMenu === "newAndFeatured" && (
                  <div className="dropdown absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-lg">
                    <div className="flex justify-around py-4 px-6">
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Get Set for School
                        </h4>
                        <ul>
                          <li>
                            <Link to='/product'>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Extra 25% Off Select Styles
                            </a>
                            </Link>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shop the Collection
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shopping Guide
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Bags & Backpacks
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2 text-sm">
                          New & Featured
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              New Arrivals
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Best Sellers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              New & Upcoming Drops
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Trending
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              ACG
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Retro Running
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Aster Pink Shop
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shop Sport
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2 text-sm">
                          Shop Classics
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Dunk
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Jordan 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Force
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Max
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Blazer
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Vomero
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Explore
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              SNKRS Launch Calendar
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Running Shoe Finder
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Bra Finder
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Product Care
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Member Rewards
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Buying Guides
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className="group relative"
                onMouseEnter={() => handleMouseEnter("men")}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="hover:underline">
                  Men
                </a>
                {activeMenu === "men" && (
                  <div className="dropdown absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-lg">
                    <div className="flex justify-around py-4 px-6">
                    <div className="dropdown absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-lg">
                    <div className="flex justify-around py-4 px-6">
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Get Set for School
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Extra 25% Off Select Styles
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shop the Collection
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shopping Guide
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Bags & Backpacks
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2 text-sm">
                          New & Featured
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              New Arrivals
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Best Sellers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              New & Upcoming Drops
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Trending
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              ACG
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Retro Running
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Aster Pink Shop
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shop Sport
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2 text-sm">
                          Shop Classics
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Dunk
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Jordan 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Force
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Max
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Blazer
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Vomero
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Explore
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              SNKRS Launch Calendar
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Running Shoe Finder
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Bra Finder
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Product Care
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Member Rewards
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Buying Guides
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                )}
              </li>
              <li
                className="group relative"
                onMouseEnter={() => handleMouseEnter("women")}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="hover:underline">
                  Women
                </a>
                {activeMenu === "women" && (
                  <div className="dropdown absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-lg">
                    <div className="flex justify-around py-4 px-6">
                    <div className="dropdown absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-lg">
                    <div className="flex justify-around py-4 px-6">
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Get Set for School
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Extra 25% Off Select Styles
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shop the Collection
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shopping Guide
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Bags & Backpacks
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2 text-sm">
                          New & Featured
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              New Arrivals
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Best Sellers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              New & Upcoming Drops
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Trending
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              ACG
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Retro Running
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Aster Pink Shop
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shop Sport
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2 text-sm">
                          Shop Classics
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Dunk
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Jordan 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Force
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Max
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Blazer
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Vomero
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Explore
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              SNKRS Launch Calendar
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Running Shoe Finder
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Bra Finder
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Product Care
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Member Rewards
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Buying Guides
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                )}
              </li>

              <li
                className="group relative"
                onMouseEnter={() => handleMouseEnter("jordan")}
                onMouseLeave={handleMouseLeave}
              >
                <a href="#" className="hover:underline">
                  Jordan
                </a>
                {activeMenu === "jordan" && (
                  <div className="dropdown absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-lg">
                    <div className="flex justify-around py-4 px-6">
                    <div className="dropdown absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-lg">
                    <div className="flex justify-around py-4 px-6">
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Get Set for School
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Extra 25% Off Select Styles
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shop the Collection
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shopping Guide
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Bags & Backpacks
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2 text-sm">
                          New & Featured
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              New Arrivals
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Best Sellers
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              New & Upcoming Drops
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Trending
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              ACG
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Retro Running
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Aster Pink Shop
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Shop Sport
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2 text-sm">
                          Shop Classics
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Dunk
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Jordan 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Force
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Air Max
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Blazer
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Vomero
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold mb-2">
                          Explore
                        </h4>
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              SNKRS Launch Calendar
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Running Shoe Finder
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Bra Finder
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Product Care
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Member Rewards
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                            >
                              Buying Guides
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* Search and Icons Section */}
        <div className="flex items-center space-x-6 mr-7">
          <form action="/search" className="relative max-w-[150px] w-full">
            <input
              type="text"
              name="q"
              className="w-full border h-8 pl-8 pr-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
              placeholder="Search"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-500"
            />
          </form>

          <div className="flex space-x-4">
            <div className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer">
              <FontAwesomeIcon
                icon={farHeart}
                className="h-6 w-6 text-gray-800"
              />
            </div>
            <Link to='/cart'>
            <div className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="h-6 w-6 text-gray-800"
              />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
