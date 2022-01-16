import React from "react";

import CATEGORIES from "./category";
import SearchIcon from "../../asset/images/nav/searchicon.svg";
import AlertIcon from "../../asset/images/nav/alerticon.svg";
import Menu from "../../asset/images/nav/icon-menu.png";
import Logo from "../../asset/images/logo/logoblack.png";
import Profile from "../../asset/images/nav/profile_default.png";

function Nav() {
  return (
    <div className="">
      <nav className="flex justify-between items-center max-w-screen-lg mx-auto py-4">
        <div className="flex justify-between items-center">
          <img className="w-4 mr-2" src={Menu} alt="menu" />
          <h1 className="w-24">
            <img src={Logo} alt="logo" />
          </h1>
        </div>
        <ul className="flex text-base">
          {CATEGORIES.map((category_list) => {
            return (
              <li className="pr-10" key={category_list.id}>
                <p>{category_list.category}</p>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-between items-center text-xs">
          <li className="mr-2">
            <img src={SearchIcon} alt="searchicon" />
          </li>
          <li className="mr-2">
            <img src={AlertIcon} alt="searchicon" />
          </li>
          <li className="rounded-full overflow-hidden mr-2">
            <img className="w-8" src={Profile} alt="profileimg" />
          </li>
          <li className="flex justify-between items-center">
            <a
              href="/"
              className="before:content-['|'] before:m-4 flex justify-between items-center border-gray border-solid border rounded-full"
            >
              <p className="p-2">기업서비스</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
