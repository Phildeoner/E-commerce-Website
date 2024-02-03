function CallToAction() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#A22634] to-[#F7D1D0]">
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leading text-center ">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center ">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-full p-3 rounded-l-lg sm:w-[35vw]"
              data-ms-editor="true"
            />
            <button
              type="button"
              className="w-2/5 p-3 bg-[#E66B66] text-gray-100 font-semibold rounded-r-lg sm:w-1/3 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
