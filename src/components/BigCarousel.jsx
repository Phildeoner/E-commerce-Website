import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function BigCarousel() {
  // State to manage the active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Dummy data for carousel items
  const slides = [
    {
      id: 1,
      img: "https://proteafinancial.com/wp-content/uploads/2022/08/Protea-Financial-8.11.22B-2-1080x500-1.jpg",
      title: "Frosty Elegance Extravaganza",
      subTitle: "New Year's Eve Celebration",
      description: "Toast to New Beginnings",
    },
    {
      id: 2,
      img: "https://traveler.marriott.com/wp-content/uploads/2020/05/sipyourway_1.jpg",
      title: "Summer Soirée Series",
      subTitle: "New Year's Eve Celebration",
      description: "Refreshing choices for your summer Essentials",
    },
    {
      id: 3,
      img: "https://winery.ph/cdn/shop/articles/WPH_Blog_Hero_Graphics_1.jpg?v=1620291667",
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
    }, 6000); // Change slide every 5000ms (5 seconds)

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
    opacity: { duration: 0.5 }, // Extended duration for a smoother fade
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
        <div className="relative h-56 overflow-hidden md:h-[75vh]">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              custom={getDirection(index)}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionSettings} // Apply adjusted transition settings here
              className={`absolute inset-0 w-full h-full ${
                index === activeSlide ? "block" : "hidden"
              }`}>
              <img
                src={slide.img}
                className="block w-full h-full object-cover object-center"
                alt=""
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50"></div>
              <div className="absolute top-[130px] left-[163px] text-white">
                <p className="text-[30px] font-semibold">{slide.title}</p>
                <h1 className="text-[61px] font-bold">{slide.subTitle}</h1>
                <h3 className="text-[40px] font-semibold">
                  {slide.description}
                </h3>
                <div className="flex gap-10 mt-10">
                  <button className="p-3 bg-[#E66B66] rounded-lg text-white">
                    Sign In
                  </button>
                  <button className="py-3 px-5 bg-[#B0A4A7] rounded-lg text-white">
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
