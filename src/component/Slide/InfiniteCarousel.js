import { useState, useEffect } from "react";

import LeftArrow from "../../asset/images/slide/leftarrow.svg";
import RightArrow from "../../asset/images/slide/rightarrow.svg";

function InfiniteCarousel({ children }) {
  const show = 9;
  const [infiniteLoop, setInfiniteLoop] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0);
  const [length, setLength] = useState(children && children.length);

  const [isRepeating, setIsRepeating] = useState(
    children && infiniteLoop && children.length > show
  );

  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children && children.length);
    setIsRepeating(children && infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

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

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderExtraPrev = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }
    output.reverse();
    return output;
  };

  const renderExtraNext = () => {
    let output = [];
    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }
    return output;
  };

  return (
    <div className="w-full flex-col mx-auto px-20 overflow-hidden ">
      <div className="flex w-full items-center relative">
        {/* You can alwas change the content of the button to other things */}

        <div
          className="w-full h-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`flex show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? "none" : null,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children &&
              children.map((list, index) => {
                return (
                  <div
                    className="slidelist relative max-w-screen-lg mr-10"
                    key={index}
                    style={{
                      transform: `translateX(-${currentIndex * (100 / show)}%)`,
                      transition: !transitionEnabled ? "none" : null,
                    }}
                  >
                    <div className="w-full">
                      <img src={list.img} alt={list.slide_title} />
                    </div>
                    <div className="w-96 bg-white absolute bottom-10 left-10">
                      <div className="p-10">
                        <h2 className=" text-2xl font-bold">
                          {list.slide_title}
                        </h2>
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
            {length > show && isRepeating && renderExtraNext()}
          </div>
        </div>
        {/* You can alwas change the content of the button to other things */}
        {(isRepeating || currentIndex > 0) && (
          <button
            className="w-10 flex top-24 left-[calc(100%-1350px)] justify-center items-center absolute w-10 h-20 bg-slate-200 rounded-xl overflow-hidden opacity-1"
            onClick={prev}
          >
            <img className="leftArrowButton" src={LeftArrow} alt="왼쪽화살표" />
          </button>
        )}
        {(isRepeating || currentIndex < length - show) && (
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
        )}
      </div>
    </div>
  );
}

export default InfiniteCarousel;
