const MainContent = () => {
  return (
    <section className="bg-gradient-to-tr from-gray-900 to-blue-900">
      <div className={"text-center"}>
        <h1 className="text-5xl lg:text-7xl font-bold mb-5 text-white">
          Welcome to my Website
        </h1>
        <p className="text-xl lg:text-2xl text-white font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
          elit, tristique placerat feugiat ac, facilisis vitae.
        </p>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/3 lg:pr-6 mb-8 lg:mb-0">
            <img
              src="https://anonymous.falci.me/static/media/feature.invite.png"
              alt="image1"
              className="rounded-md shadow-md"
            />
            <h2 className="text-xl font-semibold mt-4 bg-indigo-500 rounded-full text-white p-2 max-w-[10rem] text-center">
              Heading 1
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              elit, tristique placerat feugiat ac, facilisis vitae arcu.
            </p>
          </div>
          <div className="w-full lg:w-1/3 lg:px-3 mb-8 lg:mb-0">
            <img
              src="https://anonymous.falci.me/static/media/feature.modal.png"
              alt="image2"
              className="rounded-md shadow-md"
            />
            <h2 className="text-xl font-semibold mt-4 bg-indigo-500 rounded-full text-white p-2 max-w-[10rem] text-center">
              Heading 2
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              elit, tristique placerat feugiat ac, facilisis vitae arcu.
            </p>
          </div>
          <div className="w-full lg:w-1/3 lg:pl-6">
            <img
              src="https://anonymous.falci.me/static/media/feature.reply.gif"
              alt="image3"
              className="rounded-md shadow-md"
            />
            <h2 className="text-xl font-semibold mt-4 bg-indigo-500 rounded-full text-white p-2 max-w-[10rem] text-center">
              Heading 3
            </h2>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              elit, tristique placerat feugiat ac, facilisis vitae arcu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
