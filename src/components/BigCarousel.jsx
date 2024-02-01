function BigCarousel() {
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide">
        <div className="relative h-56 overflow-hidden  md:h-[75vh]">
          <div
            className="hidden relative duration-700 ease-in-out"
            data-carousel-item>
            <div className="relative">
              <img
                src="https://proteafinancial.com/wp-content/uploads/2022/08/Protea-Financial-8.11.22B-2-1080x500-1.jpg"
                className="block w-full h-full object-cover object-center"
                alt="..."
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 h-[75vh]"></div>
            </div>
            <div className="absolute top-[159px] left-[163px] text-white">
              <p className="text-[20px] font-normal">
                Frosty Elegance Extravaganza
              </p>
              <h1 className="text-[61px] font-bold">
                New Year's Eve Celebration
              </h1>
              <h3 className="text-[40px] font-semibold">
                Toast to New Beginnings
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
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="relative">
              <img
                src="https://traveler.marriott.com/wp-content/uploads/2020/05/sipyourway_1.jpg"
                className="block w-full h-full object-cover object-center"
                alt="..."
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 h-[75vh]"></div>
            </div>
            <div className="absolute top-[159px] left-[163px] text-white">
              <p className="text-[20px] font-normal">Summer Soirée Series</p>
              <h1 className="text-[61px] font-bold">
                New Year's Eve Celebration
              </h1>
              <h3 className="text-[40px] font-semibold">
                Refreshing choices for your summer Essentials
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
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <div className="relative">
              <img
                src="https://winery.ph/cdn/shop/articles/WPH_Blog_Hero_Graphics_1.jpg?v=1620291667"
                className="block w-full h-full object-cover object-center"
                alt="..."
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 h-[75vh]"></div>
            </div>
            <div className="absolute top-[159px] left-[163px] text-white">
              <p className="text-[20px] font-normal">
                Spiced Spirits Spectacle
              </p>
              <h1 className="text-[61px] font-bold">
                New Year's Eve Celebration
              </h1>
              <h3 className="text-[40px] font-semibold">
                Warm Up Your Celebrations with Spiced Spirits
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
          </div>
        </div>
        <div className="absolute bottom-5 z-40 flex -translate-x-1/2 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 bg-red-700 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"></button>
          <button
            type="button"
            className="w-3 h-3 bg-red-700  rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"></button>
          <button
            type="button"
            className="w-3 h-3 bg-red-700  rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"></button>
        </div>
      </div>
    </>
  );
}

export default BigCarousel;
