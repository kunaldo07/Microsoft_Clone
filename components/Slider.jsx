import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "../styles/slider.module.css";

const slideImages = [
  "./images/homepage/hero_1600.png",
  "./images/homepage/hero_1600.png"
  ];

const properties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    
  };

const Slider = () => {

  return (
    <>
    <div class="mx-20 mt-3">
      <Slide {...properties}>
        {slideImages.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{'backgroundImage': `url(${slideImages[index]})`}}>
                <div class="mr-[50%]">
                  <p class="inline-block bg-white text-red-600 font-semibold text-sm px-1 py-1">Countdown Sale</p>
                  <p class="mt-3 text-2xl font-bold">Bundle and save up to $430</p>
                  <p class="my-3 text-sm">Complete your Surface pro 7 with choice of select Type Cover and free sleeve</p>
                  <button class="text-white bg-red-700 px-2 py-1 text-sm mt-1">Shop now {">"}</button>
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
    </>
  )
}

export default Slider;