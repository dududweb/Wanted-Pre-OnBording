import { useEffect } from "react";

function MainSlideList({ title, contents, image }) {
  return (
    <div className="w-1060px\\">
      <div>
        <img src={image} alt={title} />
      </div>
      <div className="w-52">
        <div>
          <h2>{title}</h2>
          <h4>{contents}</h4>
        </div>
      </div>
    </div>
  );
}

export default MainSlideList;
