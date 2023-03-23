import icon from "../assets/add_to_slack.png";

const Hero = () => {
  return (
    <section id="Hero" className="shadow shadow-gray-700">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl text-center md:text-left font-bold mb-5 text-white">
              Anonymous Bot
            </h1>
            <p className="text-xl lg:text-2xl text-center md:text-left text-gray-400 font-light">
              Send anonymous message in Slack.
            </p>
            <button className="bg-white text-black font-semibold mt-8  rounded-md hover:bg-gray-100 flex flex-row items-center mx-auto md:mx-0">
              <img src={icon} alt="logo" className="w-36" />
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
