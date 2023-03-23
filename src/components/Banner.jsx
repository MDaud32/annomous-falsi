import icon from "../assets/add_to_slack.png";

const Banner = () => {
  return (
    <div className="">
      <div className="mx-auto w-full py-24 sm:py-10">
        <div className="relative isolate overflow-hidden px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
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
          <p className="mt-3 max-w-md mx-auto text-lg text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
            Let your teammates feel secure and express their opinion anonymously
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="bg-white text-black font-semibold rounded-md hover:bg-gray-100 flex flex-row items-center">
              <img src={icon} alt="logo" className="w-40" />
            </button>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true">
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="827591b1-ce8c-4110-b064-7cb85a0b1217"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Banner;
