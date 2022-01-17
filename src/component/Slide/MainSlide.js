import { useState, useEffect } from "react";

import MainSlideList from "./MainSlideList";
import LeftArrow from "../../asset/images/slide/leftarrow.svg";
import RightArrow from "../../asset/images/slide/rightarrow.svg";

function MainSlide({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDeck, setLastDeck] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);

  const moveNextSlide = () => {};

  return (
    <div className="relative slide overflow-hidden mx-auto px-20">
      <div className=" flex justify-between items-center w-9540px">
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
          <button className="flex top-24 left-[calc(100%-1350px)] justify-center items-center absolute w-10 h-20 bg-slate-200 rounded-xl overflow-hidden opacity-1 ">
            <img className="leftArrowButton" src={LeftArrow} alt="왼쪽화살표" />
          </button>
          <button className="flex top-24 right-[calc(100%-1350px)] justify-center items-center absolute w-10 h-20 bg-slate-200 rounded-xl overflow-hidden opacity-1 ">
            <img
              className="rightArrowButton"
              src={RightArrow}
              alt="오른쪽화살표"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSlide;
