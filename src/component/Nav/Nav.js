import React from "react";

import CATEGORIES from "./category";
import SearchIcon from "../../asset/images/nav/searchicon.svg";
import AlertIcon from "../../asset/images/nav/alerticon.svg";
import Menu from "../../asset/images/nav/icon-menu.png";
import Logo from "../../asset/images/logo/logoblack.png";
import Profile from "../../asset/images/nav/profile_default.png";

function Nav() {
  return (
    <div className="border-b">
      <nav className="max-w-screen-lg flex justify-between items-center mx-auto py-4">
        <div className="flex justify-between items-center">
          <img className="w-5 mr-5" src={Menu} alt="menu" />
          <h1 className="w-20">
            <img src={Logo} alt="logo" />
          </h1>
        </div>
        <ul className="flex text-sm">
          {CATEGORIES.map((category_list) => {
            return (
              <li className="pr-10" key={category_list.id}>
                <p>{category_list.category}</p>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-between items-center text-xs">
          <li className="mr-6">
            <img src={SearchIcon} alt="searchicon" />
          </li>
          <li className="mr-6">
            <img src={AlertIcon} alt="searchicon" />
          </li>
          <li className="rounded-full overflow-hidden">
            <img className="w-8" src={Profile} alt="profileimg" />
          </li>
          <li className="flex justify-between items-center before:content-[''] before:bg-[#e5e7eb] before:w-px before:h-5 before:mx-6 before:my-auto">
            <a
              className="p-2 border-gray border-solid border rounded-full"
              href="/"
            >
              기업서비스
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
