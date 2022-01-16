import { useEffect } from "react";

import MainSlideList from "./MainSlideList";
import LeftArrow from "../../asset/images/slide/leftarrow.svg";
import RightArrow from "../../asset/images/slide/rightarrow.svg";

function MainSlide({ data }) {
  return (
    <div className="slide w-full">
      <div className="relative flex justify-between items-center w-full mx-auto overflow-hidden">
        {data &&
          data.map((list) => {
            return (
              <MainSlideList
                key={list.id}
                title={list.slide_title}
                contents={list.slide_contents}
                image={list.img}
              />
            );
          })}
        <div className="bg w-10">
          <span className="absolute top-0 left-0">
            <img className="leftArrowButton" src={LeftArrow} alt="왼쪽화살표" />
          </span>
          <span className="absolute top-0 right-0">
            <img
              className="rightArrowButton"
              src={RightArrow}
              alt="오른쪽화살표"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MainSlide;
