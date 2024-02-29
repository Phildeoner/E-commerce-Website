import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function BigCarousel() {
  // State to manage the active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Dummy data for carousel items
  const slides = [
    {
      id: 1,
      img: "https://g5-assets-cld-res.cloudinary.com/image/upload/x_0,y_110,h_730,w_1295,c_crop/q_auto,f_auto,fl_lossy,c_fill,g_center,h_406,w_720/v1702049383/g5/g5-c-1t5t8rc1-storquest-self-storage/g5-cl-53cq4vlra-storquest-self-storage/services/wine_y1rwr1.png",
      title: "Frosty Elegance Extravaganza",
      subTitle: "New Year's Eve Celebration",
      description: "Toast to New Beginnings",
    },
    {
      id: 2,
      img: "https://assets.architecturaldigest.in/photos/6008342bb3d78db39997cec9/16:9/w_2560%2Cc_limit/Let-Awakening-inspire-your-wine-selection-1366x768.jpg",
      title: "Summer Soirée Series",
      subTitle: "New Year's Eve Celebration",
      description: "Refreshing choices for your summer Essentials",
    },
    {
      id: 3,
      img: "https://images.ctfassets.net/cnu0m8re1exe/4MbhdguYJxykSRSNg4lna0/4deaa1a81bceffca683051ca409d9a80/wine.jpg",
      title: "Spiced Spirits Spectacle",
      subTitle: "New Year's Eve Celebration",
      description: "Warm Up Your Celebrations with Spiced Spirits",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(
        (prevActiveSlide) => (prevActiveSlide + 1) % slides.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const transitionSettings = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.5 },
  };

  const getDirection = (newIndex) => {
    return newIndex > activeSlide ? 1 : -1;
  };

  const changeSlide = (index) => {
    setActiveSlide(index);
  };
  return (
    <>
      <div className="relative w-full">
        <div className="relative h-96 overflow-hidden md:h-[75vh]">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              custom={getDirection(index)}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionSettings}
              className={`absolute inset-0 w-full h-full ${
                index === activeSlide ? "block" : "hidden"
              }`}>
              <img
                src={slide.img}
                className="block w-full h-full object-cover object-center"
                alt=""
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"></div>
              <div className="absolute top-28 px-6 md:top-[130px] md:left-[163px] text-white">
                <p className="text-[20px] md:text-[30px] font-semibold">
                  {slide.title}
                </p>
                <h1 className="text-[25px] md:text-[61px] font-bold">
                  {slide.subTitle}
                </h1>
                <h3 className="text-[16px] md:text-[40px] font-semibold">
                  {slide.description}
                </h3>
                <div className="flex gap-10 mt-10">
                  <button className="px-3 py-2 md:py-3 bg-[#E66B66] hover:bg-[#B0A4A7] rounded-lg text-white">
                    Sign In
                  </button>
                  <button className="px-3 py-2 md:py-3 bg-[#B0A4A7] hover:bg-[#E66B66] rounded-lg text-white">
                    Register
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-5 z-40 flex -translate-x-1/2 left-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 ${
                activeSlide === index ? "bg-white" : "bg-red-700"
              } rounded-full`}
              aria-current={activeSlide === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => changeSlide(index)}></button>
          ))}
        </div>
      </div>
    </>
  );
}

export default BigCarousel;
