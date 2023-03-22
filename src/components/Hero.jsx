import icon from "../assets/icons8-ios-photos.svg";

const Hero = () => {
  return (
    <section id="Hero" className="shadow shadow-gray-700">
      <div className="container mx-auto px-6 py-32">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-5 text-white">
              Anonymous <br /> Bot
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 font-light">
              Send anonymous message in Slack.
            </p>
            <button className="bg-white text-black font-semibold mt-8 px-4 py-2 rounded-md hover:bg-gray-100 flex flex-row items-center">
              <img src={icon} alt="logo" className="w-8" />
              Add to Slack
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://anonymous.falci.me/static/media/demo.gif"
              alt="hero"
              className="rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
