import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import { sliderdata } from "./Slider";

function SliderBox() {
    return (
        <div className="Slider">
            {sliderdata.map((e) => (



                <div>
                    <img src={e.img} alt={e.id} />
                </div>


            ))}
        </div>
    )
}
export default SliderBox;