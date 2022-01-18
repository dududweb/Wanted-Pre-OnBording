import useAxios from "../../hook/useAxios";

import MainSlide from "../../component/Slide/MainSlide";
import InfiniteCarousel from "../../component/Slide/InfiniteCarousel";

function Main() {
  const url = "./data/slidedata.json";
  const { data } = useAxios(url);

  console.log(data);
  console.log(data && data.length);

  return (
    <div className="Main">
      {/* <MainSlide children={data} /> */}
      <InfiniteCarousel children={data} />
    </div>
  );
}

export default Main;
