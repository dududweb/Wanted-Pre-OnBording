import { useEffect } from "react";

function MainSlideList({ title, contents, image }) {
  return (
    <div className="max-w-screen-xl relative">
      <div className="w-full">
        <img src={image} alt={title} />
      </div>
      <div className="w-96 bg-white absolute bottom-10 left-10">
        <div className="p-10">
          <h2 className=" text-2xl font-bold">{title}</h2>
          <h4>{contents}</h4>
        </div>
        <div>
          <h4 className="text-blue-600 font-bold border-t px-10 py-4">
            <a href="/">바로가기 ></a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MainSlideList;
