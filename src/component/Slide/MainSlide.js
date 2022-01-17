import { useState, useEffect, useRef } from "react";

import LeftArrow from "../../asset/images/slide/leftarrow.svg";
import RightArrow from "../../asset/images/slide/rightarrow.svg";

function MainSlide({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDeck, setLastDeck] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [prevButton, setPrevButton] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);

  const slideWidth = 1024;
  const sldieMargin = 20;
  const slideCount = data && data.length;

  // const isCurrentIndex =

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const makeClone = () => {};

  return (
    <div className="mx-auto px-20 overflow-hidden relative">
      <div className="items-center w-9540px">
        {data &&
          data.map((list) => {
            return (
              <div
                className="slidelist max-w-screen-lg mr-10"
                key={list.id}
                style={{
                  transform: `translateX(${-slideWidth * currentIndex}px)`,
                }}
              >
                <div>
                  <h4 className="text-blue-600 font-bold border-t px-10 py-4">
                    <a href="/">바로가기 &gt; </a>
                  </h4>
                </div>
                <div className="w-full relative">
                  <img
                    className="absolute top-0 left-0"
                    src={list.img}
                    alt={list.slide_title}
                  />
                </div>
                <div className="w-96 bg-white absolute bottom-10 left-10">
                  <div className="p-10">
                    <h2 className=" text-2xl font-bold">{list.slide_title}</h2>
                    <h4>{list.slide_contents}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="bg w-10">
          <button
            className="flex top-24 left-[calc(100%-1350px)] justify-center items-center absolute w-10 h-20 bg-slate-200 rounded-xl overflow-hidden opacity-1"
            onClick={prevSlide}
          >
            <img className="leftArrowButton" src={LeftArrow} alt="왼쪽화살표" />
          </button>
          <button
            className="flex top-24 right-[calc(100%-1350px)] justify-center items-center absolute w-10 h-20 bg-slate-200 rounded-xl overflow-hidden opacity-1"
            onClick={nextSlide}
          >
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
