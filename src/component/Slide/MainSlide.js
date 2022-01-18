import { useState, useEffect, useRef } from "react";

import LeftArrow from "../../asset/images/slide/leftarrow.svg";
import RightArrow from "../../asset/images/slide/rightarrow.svg";

function MainSlide({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastDeck, setLastDeck] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [touchPosition, setTouchPosition] = useState(null);

  const slideRef = useRef(null);

  const SLIDE_WIDTH = 1024;
  const SLIDE_MARGIN = 20;
  const MAX_SLIDES = 9;
  const TOTAL_SLIDES = MAX_SLIDES * 3;
  const slideCount = children && children.length;

  const showSlide = () => {
    if (currentIndex > slideCount) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(slideCount);
    }
  };

  // currentIndex === 0 해당 ref를 slideCount를 앞에 붙여주고 순간이동
  // currentIndex === 9(slideCount) 이면
  //

  const next = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    showSlide();
  }, [currentIndex]);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 9) {
      next();
    }

    if (diff < -9) {
      prev();
    }

    setTouchPosition(null);
  };

  console.log("currentIndex:", currentIndex);
  console.log("slideCount:", slideCount);

  return (
    <div className="mx-auto px-20 overflow-hidden relative">
      <div className="flex items-center w-9540px">
        {children &&
          children.map((list) => {
            return (
              <div
                ref={slideRef}
                className="slidelist relative max-w-screen-lg mr-10 duration-500"
                key={list.id}
                style={{
                  transform: `translateX(${-SLIDE_WIDTH * currentIndex}px)`,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
              >
                <div className="w-full">
                  <img src={list.img} alt={list.slide_title} />
                </div>
                <div className="w-96 bg-white absolute bottom-10 left-10">
                  <div className="p-10">
                    <h2 className=" text-2xl font-bold">{list.slide_title}</h2>
                    <h4>{list.slide_contents}</h4>
                  </div>
                  <div>
                    <h4 className="text-blue-600 font-bold border-t px-10 py-4">
                      <a href="/">바로가기 &gt; </a>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="bg w-10">
          <button
            className="flex top-24 left-[calc(100%-1350px)] justify-center items-center absolute w-10 h-20 bg-slate-200 rounded-xl overflow-hidden opacity-1"
            onClick={prev}
          >
            <img className="leftArrowButton" src={LeftArrow} alt="왼쪽화살표" />
          </button>
          <button
            className="flex top-24 right-[calc(100%-1350px)] justify-center items-center absolute w-10 h-20 bg-slate-200 rounded-xl overflow-hidden opacity-1"
            onClick={next}
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
