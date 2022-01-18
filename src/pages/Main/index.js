import { useEffect } from "react";
import useAxios from "../../hook/useAxios";

import MainSlide from "../../component/Slide/MainSlide";

function Main() {
  const url = "./data/slidedata.json";
  const { data } = useAxios(url);

  return (
    <div className="Main">
      <div>{<MainSlide data={data} />}</div>
    </div>
  );
}

export default Main;
