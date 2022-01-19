import React from "react";
import useResize from "../../hook/useResize";

import CATEGORIES from "./category";
import MOBILE_CATEGORIES from "./mobilecategory";
import SearchIcon from "../../asset/images/nav/searchicon.svg";
import AlertIcon from "../../asset/images/nav/alerticon.svg";
import MobileMenu from "../../asset/images/nav/mobilemenu.svg";
import Menu from "../../asset/images/nav/icon-menu.png";
import Logo from "../../asset/images/logo/logoblack.png";
import Profile from "../../asset/images/nav/profile_default.png";

function Nav() {
  const widthResize = useResize();
  return (
    <div className="px-5 lg:px-0 border-b mx-auto">
      <nav className="lg:max-w-screen-xl lg:flex lg:justify-between items-center mx-auto py-4">
        <div className="flex lg:justify-between items-center">
          <img className="w-5 mr-5" src={Menu} alt="menu" />
          <h1 className="w-20">
            <img src={Logo} alt="logo" />
          </h1>
        </div>
        <div className="flex justify-between items-center mt-5 lg:mt-0 text-sm">
          <div className="flex">
            {widthResize <= 640
              ? MOBILE_CATEGORIES.map((category_list) => {
                  return (
                    <div className="pr-2 lg:pr-10" key={category_list.id}>
                      <p>{category_list.category}</p>
                    </div>
                  );
                })
              : CATEGORIES.map((category_list) => {
                  return (
                    <div className="pr-2 lg:pr-10" key={category_list.id}>
                      <p>{category_list.category}</p>
                    </div>
                  );
                })}
          </div>
          <ul className="flex justify-between items-center text-xs">
            <li className="mr-2 lg:mr-6">
              <img src={SearchIcon} alt="searchicon" />
            </li>
            <li className="mr-2 lg:mr-6">
              <img src={AlertIcon} alt="alertIcon" />
            </li>
            {widthResize <= 640 && (
              <li className="mr-2 lg:mr-6">
                <img src={MobileMenu} alt="menuIcon" />
              </li>
            )}
            <li className="hidden lg:inline-block rounded-full overflow-hidden">
              <img className="w-8" src={Profile} alt="profileimg" />
            </li>
          </ul>
        </div>

        <div>
          <div className="hidden lg:inline-block flex justify-between items-center before:content-[''] before:bg-[#e5e7eb] before:w-px before:h-5 before:mx-6 before:my-auto">
            <a
              className="p-2 border-gray border-solid border rounded-full"
              href="/"
            >
              기업서비스
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
