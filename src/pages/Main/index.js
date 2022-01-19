import useAxios from "../../hook/useAxios";

import MainSlide from "../../component/Slide/MainSlide";

function Main() {
  const url = "./data/slidedata.json";
  const { data } = useAxios(url);

  return (
    <div className="Main">
      <MainSlide children={data} />
    </div>
  );
}

export default Main;
