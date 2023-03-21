import icon from "../assets/icons8-ios-photos.svg";

const Banner = () => {
  return (
    <div className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span
              className="
             ">
              Get{" "}
            </span>
            <span
              className="
             text-indigo-400 ">
              anonymous
            </span>
            <span
              className="
             ">
              {" "}
              feedbacks
            </span>
          </h2>
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
            Let your teammates feel secure and express their opinion anonymously
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-100 flex flex-row items-center">
                <img src={icon} alt="logo" className="w-8" />
                Add to Slack
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
