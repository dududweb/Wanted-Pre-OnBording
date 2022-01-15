import React from "react";
import SearchIcon from "../../asset/images/nav/searchicon.svg";
import AlertIcon from "../../asset/images/nav/alerticon.svg";
import RightArrow from "../../asset/images/nav/rightarrow.svg";
import LeftArrow from "../../asset/images/nav/leftarrow.svg";

function Nav() {
  return (
    <div className="bg-red-600 flex justify-center w-96 mx-auto">
      <nav>
        <div>
          <h1>logo</h1>
        </div>
        <ul>
          <li>채용</li>
          <li>채용</li>
          <li>채용</li>
          <li>채용</li>
          <li>채용</li>
          <li>채용</li>
          <li>채용</li>
        </ul>
      </nav>
      <div>
        <img src={SearchIcon} />
        <img src={AlertIcon} />
        <img src={RightArrow} />
        <img src={LeftArrow} />
      </div>
      <div>2</div>
      <div>3</div>
    </div>
  );
}

export default Nav;
