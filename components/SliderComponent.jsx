import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderComponent(props) {
  return (
    <Slider className={`${props.className}`} {...props.settings}>
      {props.sliderData.map((value, index) => {
        return (
          <div key={index} className="w-full">
            {value.images}
          </div>
        );
      })}
    </Slider>
  );
}