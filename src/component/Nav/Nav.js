import React from "react";

import CATEGORIES from "./category";
import SearchIcon from "../../asset/images/nav/searchicon.svg";
import AlertIcon from "../../asset/images/nav/alerticon.svg";
import Menu from "../../asset/images/nav/icon-menu.png";
import Logo from "../../asset/images/logo/logoblack.png";

function Nav() {
  return (
    <div className="bg-red-600">
      <nav className="flex justify-between items-center max-w-screen-lg mx-auto ">
        <div className="flex justify-between items-center w-36">
          <img src={Menu} alt="menu" />
          <h1 className="w-sm">
            <img src={Logo} alt="logo" />
          </h1>
        </div>
        <ul className="flex">
          {CATEGORIES.map((category_list) => {
            return (
              <>
                <li className="pr-7">{category_list.category}</li>
              </>
            );
          })}
        </ul>
        <div className="flex">
          <ul className="flex">
            <li>
              <img src={SearchIcon} alt="searchicon" />
            </li>
            <li>
              <img src={AlertIcon} alt="alerticon" />
            </li>
            <li>기업서비스</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
