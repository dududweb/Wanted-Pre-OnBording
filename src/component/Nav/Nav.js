import React from "react";

import SearchIcon from "../../asset/images/nav/searchicon.svg";
import AlertIcon from "../../asset/images/nav/alerticon.svg";
import Menu from "../../asset/images/nav/icon-menu.png";

function Nav() {
  return (
    <div className="bg-red-600 flex justify-center mx-auto">
      <nav className="flex">
        <div>
          <img src={Menu} />
          <h1>logo</h1>
        </div>
        <ul>
          <li>채용</li>
          <li>이벤트</li>
          <li>직군별 연봉</li>
          <li>이력서</li>
          <li>커뮤니티</li>
          <li>프리랜서</li>
          <li>AI 합격 예측</li>
        </ul>
        <div>
          <img src={SearchIcon} />
          <img src={AlertIcon} />
        </div>
      </nav>
    </div>
  );
}

export default Nav;
