import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleButtonRef = useRef(null);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const shopDropdownRef = useRef(null);
  const { cart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shopDropdownRef.current &&
        !shopDropdownRef.current.contains(event.target)
      ) {
        setIsShopDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("navbar-dropdown");

      if (
        toggleButtonRef.current &&
        toggleButtonRef.current.contains(event.target)
      ) {
        return;
      }

      if (menu && !menu.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const menu = document.getElementById("navbar-dropdown");
    if (menu) {
      if (isMenuOpen) {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <header className="p-4 bg-gradient-to-r from-[#722F37] to-[#E7E3E4]">
        <div className="container flex justify-between items-center h-16 mx-auto">
          <Link
            to="/"
            rel="noopener noreferrer"
            aria-label="Back to homepage"
            className="flex items-baseline p-2">
            <img src="pblogo.png" alt="" className="w-[40px] md:w-[80px]  " />
            <img
              className="w-[70px] md:w-[120px]  "
              src="/pbtextmain.png"
              alt=""
            />
          </Link>

          <div className="flex items-center ">
            <div className="relative">
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-[40vw] py-2 px-3 text-sm rounded-l-md md:w-[30vw] focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900"
                data-ms-editor="true"
              />
            </div>
            <button
              type="button"
              className=" text-gray-50 px-6 py-[9px] bg-[#A22634] font-semibold rounded-r-md  dark:bg-violet-400 dark:text-gray-900">
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-5 h-5 dark:text-gray-100">
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </div>
          <button
            title="Open menu"
            type="button"
            className="p-4 lg:hidden"
            ref={toggleButtonRef}
            onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className="lg:flex items-center hidden justify-between gap-12">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                id="currency">
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            <div className="relative">
              <button className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none">
                  <path
                    d="M16.0643 27.9999L14.131 26.2665C11.8865 24.2443 10.031 22.4999 8.56429 21.0332C7.09762 19.5665 5.93096 18.2499 5.06429 17.0832C4.19762 15.9165 3.59207 14.8443 3.24762 13.8665C2.90318 12.8888 2.73096 11.8888 2.73096 10.8665C2.73096 8.77765 3.43096 7.0332 4.83096 5.6332C6.23096 4.2332 7.9754 3.5332 10.0643 3.5332C11.2198 3.5332 12.3198 3.77765 13.3643 4.26654C14.4087 4.75543 15.3087 5.44431 16.0643 6.3332C16.8198 5.44431 17.7198 4.75543 18.7643 4.26654C19.8087 3.77765 20.9087 3.5332 22.0643 3.5332C24.1532 3.5332 25.8976 4.2332 27.2976 5.6332C28.6976 7.0332 29.3976 8.77765 29.3976 10.8665C29.3976 11.8888 29.2254 12.8888 28.881 13.8665C28.5365 14.8443 27.931 15.9165 27.0643 17.0832C26.1976 18.2499 25.031 19.5665 23.5643 21.0332C22.0976 22.4999 20.2421 24.2443 17.9976 26.2665L16.0643 27.9999ZM16.0643 24.3999C18.1976 22.4888 19.9532 20.8499 21.331 19.4832C22.7087 18.1165 23.7976 16.9276 24.5976 15.9165C25.3976 14.9054 25.9532 14.0054 26.2643 13.2165C26.5754 12.4276 26.731 11.6443 26.731 10.8665C26.731 9.5332 26.2865 8.42209 25.3976 7.5332C24.5087 6.64431 23.3976 6.19987 22.0643 6.19987C21.0198 6.19987 20.0532 6.49431 19.1643 7.0832C18.2754 7.67209 17.6643 8.42209 17.331 9.3332H14.7976C14.4643 8.42209 13.8532 7.67209 12.9643 7.0832C12.0754 6.49431 11.1087 6.19987 10.0643 6.19987C8.73096 6.19987 7.61985 6.64431 6.73096 7.5332C5.84207 8.42209 5.39762 9.5332 5.39762 10.8665C5.39762 11.6443 5.55318 12.4276 5.86429 13.2165C6.1754 14.0054 6.73096 14.9054 7.53096 15.9165C8.33096 16.9276 9.41985 18.1165 10.7976 19.4832C12.1754 20.8499 13.931 22.4888 16.0643 24.3999Z"
                    fill="black"
                  />
                </svg>
              </button>
              <div className="h-[15px] w-[15px] bg-[#E66B66] absolute -top-1 -right-1 rounded-full flex items-center justify-center text-[10px] font-bold">
                1
              </div>
            </div>
            <div className="relative mt-4">
              <Link to="/cart" className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none">
                  <path
                    d="M9.39746 29.3332C8.66413 29.3332 8.03635 29.0721 7.51413 28.5498C6.99191 28.0276 6.73079 27.3998 6.73079 26.6665C6.73079 25.9332 6.99191 25.3054 7.51413 24.7832C8.03635 24.2609 8.66413 23.9998 9.39746 23.9998C10.1308 23.9998 10.7586 24.2609 11.2808 24.7832C11.803 25.3054 12.0641 25.9332 12.0641 26.6665C12.0641 27.3998 11.803 28.0276 11.2808 28.5498C10.7586 29.0721 10.1308 29.3332 9.39746 29.3332ZM22.7308 29.3332C21.9975 29.3332 21.3697 29.0721 20.8475 28.5498C20.3252 28.0276 20.0641 27.3998 20.0641 26.6665C20.0641 25.9332 20.3252 25.3054 20.8475 24.7832C21.3697 24.2609 21.9975 23.9998 22.7308 23.9998C23.4641 23.9998 24.0919 24.2609 24.6141 24.7832C25.1364 25.3054 25.3975 25.9332 25.3975 26.6665C25.3975 27.3998 25.1364 28.0276 24.6141 28.5498C24.0919 29.0721 23.4641 29.3332 22.7308 29.3332ZM8.26413 7.99984L11.4641 14.6665H20.7975L24.4641 7.99984H8.26413ZM6.99746 5.33317H26.6641C27.1752 5.33317 27.5641 5.56095 27.8308 6.0165C28.0975 6.47206 28.1086 6.93317 27.8641 7.39984L23.1308 15.9332C22.8864 16.3776 22.5586 16.7221 22.1475 16.9665C21.7364 17.2109 21.2864 17.3332 20.7975 17.3332H10.8641L9.39746 19.9998H25.3975V22.6665H9.39746C8.39746 22.6665 7.64191 22.2276 7.13079 21.3498C6.61968 20.4721 6.59746 19.5998 7.06413 18.7332L8.86413 15.4665L4.06413 5.33317H1.39746V2.6665H5.73079L6.99746 5.33317Z"
                    fill="black"
                  />
                </svg>
              </Link>
              {cart.length > 0 && (
                <div className="h-[15px] w-[15px] bg-[#E66B66] absolute -top-1 -right-1 rounded-full flex items-center justify-center text-[10px] font-bold">
                  {cart.length}
                </div>
              )}
            </div>
          </div>
          <div
            className="block top-16 right-7 bg-[#A22634] border border-gray-100 rounded-lg lg:hidden w-fit  absolute z-40 "
            id="navbar-dropdown">
            <ul className="flex  flex-col font-medium p-4 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded md:bg-transparent  "
                  aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  onClick={toggleShopDropdown}
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-50 rounded  md:border-0   md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Shop{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  ref={shopDropdownRef}
                  id="dropdownNavbar"
                  className={`z-10 ${
                    isShopDropdownOpen ? "" : "hidden"
                  } font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#A22634] dark:hover:bg-gray-600 dark:hover:text-white">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#A22634] dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#A22634] dark:hover:bg-gray-600 dark:hover:text-white">
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#A22634] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-50 rounded  md:border-0   ">
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-50 rounded  md:border-0   ">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <nav className="bg-[#A22634] border-gray-200 dark:bg-gray-900 dark:border-gray-700 ">
        <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-1">
          <div className="text-white flex items-center justify-between gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none">
              <path
                d="M26.6 28C23.8222 28 21.0778 27.3944 18.3667 26.1833C15.6556 24.9722 13.1889 23.2556 10.9667 21.0333C8.74444 18.8111 7.02778 16.3444 5.81667 13.6333C4.60556 10.9222 4 8.17778 4 5.4C4 5 4.13333 4.66667 4.4 4.4C4.66667 4.13333 5 4 5.4 4H10.8C11.1111 4 11.3889 4.10556 11.6333 4.31667C11.8778 4.52778 12.0222 4.77778 12.0667 5.06667L12.9333 9.73333C12.9778 10.0889 12.9667 10.3889 12.9 10.6333C12.8333 10.8778 12.7111 11.0889 12.5333 11.2667L9.3 14.5333C9.74444 15.3556 10.2722 16.15 10.8833 16.9167C11.4944 17.6833 12.1667 18.4222 12.9 19.1333C13.5889 19.8222 14.3111 20.4611 15.0667 21.05C15.8222 21.6389 16.6222 22.1778 17.4667 22.6667L20.6 19.5333C20.8 19.3333 21.0611 19.1833 21.3833 19.0833C21.7056 18.9833 22.0222 18.9556 22.3333 19L26.9333 19.9333C27.2444 20.0222 27.5 20.1833 27.7 20.4167C27.9 20.65 28 20.9111 28 21.2V26.6C28 27 27.8667 27.3333 27.6 27.6C27.3333 27.8667 27 28 26.6 28Z"
                fill="white"
              />
            </svg>
            <p className="text-xl font-semibold">
              Hotline: <span className="font-normal">+234 8103439155</span>
            </p>
          </div>

          <div
            className="hidden w-full lg:block lg:w-auto"
            id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4  mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded md:bg-transparent  "
                  aria-current="page">
                  Home
                </a>
              </li>
              <li className="relative">
                <button
                  id="dropdownNavbarLink"
                  onClick={toggleShopDropdown}
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-50 rounded  md:border-0   md:w-auto dark:text-white  dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                  Shop{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  ref={shopDropdownRef}
                  id="dropdownNavbar"
                  className={`z-40 ${
                    isShopDropdownOpen ? "" : "hidden"
                  } font-normal absolute divide-y divide-gray-100  rounded-lg shadow w-44 dark:bg-gray-900 dark:divide-gray-600`}>
                  <ul
                    className="py-2 text-sm text-gray-200 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#A22634] dark:hover:bg-gray-600 dark:hover:text-white">
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#A22634] dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#A22634] dark:hover:bg-gray-600 dark:hover:text-white">
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#A22634] dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-50 rounded  md:border-0   ">
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-50 rounded  md:border-0   ">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:hidden justify-between gap-7">
            <div className="relative">
              <select
                className="block border-none w-full bg-[#A22634] text-white py-3 px-4 pr-8 rounded "
                id="currency">
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
            <div className="relative">
              <button className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none">
                  <path
                    d="M16.0643 27.9999L14.131 26.2665C11.8865 24.2443 10.031 22.4999 8.56429 21.0332C7.09762 19.5665 5.93096 18.2499 5.06429 17.0832C4.19762 15.9165 3.59207 14.8443 3.24762 13.8665C2.90318 12.8888 2.73096 11.8888 2.73096 10.8665C2.73096 8.77765 3.43096 7.0332 4.83096 5.6332C6.23096 4.2332 7.9754 3.5332 10.0643 3.5332C11.2198 3.5332 12.3198 3.77765 13.3643 4.26654C14.4087 4.75543 15.3087 5.44431 16.0643 6.3332C16.8198 5.44431 17.7198 4.75543 18.7643 4.26654C19.8087 3.77765 20.9087 3.5332 22.0643 3.5332C24.1532 3.5332 25.8976 4.2332 27.2976 5.6332C28.6976 7.0332 29.3976 8.77765 29.3976 10.8665C29.3976 11.8888 29.2254 12.8888 28.881 13.8665C28.5365 14.8443 27.931 15.9165 27.0643 17.0832C26.1976 18.2499 25.031 19.5665 23.5643 21.0332C22.0976 22.4999 20.2421 24.2443 17.9976 26.2665L16.0643 27.9999ZM16.0643 24.3999C18.1976 22.4888 19.9532 20.8499 21.331 19.4832C22.7087 18.1165 23.7976 16.9276 24.5976 15.9165C25.3976 14.9054 25.9532 14.0054 26.2643 13.2165C26.5754 12.4276 26.731 11.6443 26.731 10.8665C26.731 9.5332 26.2865 8.42209 25.3976 7.5332C24.5087 6.64431 23.3976 6.19987 22.0643 6.19987C21.0198 6.19987 20.0532 6.49431 19.1643 7.0832C18.2754 7.67209 17.6643 8.42209 17.331 9.3332H14.7976C14.4643 8.42209 13.8532 7.67209 12.9643 7.0832C12.0754 6.49431 11.1087 6.19987 10.0643 6.19987C8.73096 6.19987 7.61985 6.64431 6.73096 7.5332C5.84207 8.42209 5.39762 9.5332 5.39762 10.8665C5.39762 11.6443 5.55318 12.4276 5.86429 13.2165C6.1754 14.0054 6.73096 14.9054 7.53096 15.9165C8.33096 16.9276 9.41985 18.1165 10.7976 19.4832C12.1754 20.8499 13.931 22.4888 16.0643 24.3999Z"
                    fill="black"
                  />
                </svg>
              </button>

              <div className="h-[15px] w-[15px] bg-[#E66B66] absolute -top-1 -right-1 rounded-full flex items-center justify-center text-[10px] font-bold">
                1
              </div>
            </div>
            <div className="relative mt-4">
              <Link to="/cart" className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none">
                  <path
                    d="M9.39746 29.3332C8.66413 29.3332 8.03635 29.0721 7.51413 28.5498C6.99191 28.0276 6.73079 27.3998 6.73079 26.6665C6.73079 25.9332 6.99191 25.3054 7.51413 24.7832C8.03635 24.2609 8.66413 23.9998 9.39746 23.9998C10.1308 23.9998 10.7586 24.2609 11.2808 24.7832C11.803 25.3054 12.0641 25.9332 12.0641 26.6665C12.0641 27.3998 11.803 28.0276 11.2808 28.5498C10.7586 29.0721 10.1308 29.3332 9.39746 29.3332ZM22.7308 29.3332C21.9975 29.3332 21.3697 29.0721 20.8475 28.5498C20.3252 28.0276 20.0641 27.3998 20.0641 26.6665C20.0641 25.9332 20.3252 25.3054 20.8475 24.7832C21.3697 24.2609 21.9975 23.9998 22.7308 23.9998C23.4641 23.9998 24.0919 24.2609 24.6141 24.7832C25.1364 25.3054 25.3975 25.9332 25.3975 26.6665C25.3975 27.3998 25.1364 28.0276 24.6141 28.5498C24.0919 29.0721 23.4641 29.3332 22.7308 29.3332ZM8.26413 7.99984L11.4641 14.6665H20.7975L24.4641 7.99984H8.26413ZM6.99746 5.33317H26.6641C27.1752 5.33317 27.5641 5.56095 27.8308 6.0165C28.0975 6.47206 28.1086 6.93317 27.8641 7.39984L23.1308 15.9332C22.8864 16.3776 22.5586 16.7221 22.1475 16.9665C21.7364 17.2109 21.2864 17.3332 20.7975 17.3332H10.8641L9.39746 19.9998H25.3975V22.6665H9.39746C8.39746 22.6665 7.64191 22.2276 7.13079 21.3498C6.61968 20.4721 6.59746 19.5998 7.06413 18.7332L8.86413 15.4665L4.06413 5.33317H1.39746V2.6665H5.73079L6.99746 5.33317Z"
                    fill="black"
                  />
                </svg>
              </Link>
              {cart.length > 0 && (
                <div className="h-[15px] w-[15px] bg-[#E66B66] absolute -top-1 -right-1 rounded-full flex items-center justify-center text-[10px] font-bold">
                  {cart.length}
                </div>
              )}
            </div>
          </div>
          <div className="md:flex gap-8 hidden">
            <button className="border text-white px-5 py-2 rounded-lg">
              Sign In
            </button>
            <button className="bg-[#B0A4A7] text-white px-5 py-2 rounded-lg">
              Register
            </button>
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default NavBar;
