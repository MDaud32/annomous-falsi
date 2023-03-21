const Pricing = () => {
  return (
    <div className=" mx-auto pt-16 shadow shadow-gray-700">
      <div className="w-4/5 mx-auto pb-12">
        <h1 className="xl:text-4xl text-3xl text-center text-gray-400 mb-4 font-extrabold">
          Pricing
        </h1>
        <p className="text-xl text-center text-gray-600 leading-normal">
          Always anonymous.
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between pb-10">
        {/* first card */}
        <div className="w-5/6 xl:w-[30%] lg:w-1/3 sm:w-5/12 md:w-5/12 mx-auto rounded-lg hover:bg-gradient-to-r p-[4px] from-pink-500 via-red-500 to-yellow-500">
          <div className="mx-auto h-full w-full shadow rounded-lg bg-gray-100 flex flex-col justify-between">
            <div>
              <div className="pt-6 px-8 pb-6">
                <h4 className="text-2xl text-center text-gray-800 pb-3 font-bold">
                  Free Version
                </h4>
                <p className="text-sm text-center text-gray-600 pb-5 leading-normal px-10"></p>
                <p className="text-base text-center text-gray-600 font-bold">
                  {" "}
                  <span className="text-4xl text-indigo-700 font-medium px-2">
                    Free
                  </span>
                  /forever
                </p>
              </div>

              <p className="text-center mb-4 text-gray-600 font-bold">
                Basic anonymous features
              </p>

              <div className="border-b border-[1px] border-gray-300 mx-8"></div>
              <div className="pt-6 pr-8 pl-8 text-start">
                <ul className="flex flex-col items-start">
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      Unlimited anonymous messages
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      Unlimited number of channels
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      Channel restrictions
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      Unlimited team size
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      No logs, no reports
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center pb-8">
              <button className="focus:outline-none bg-white hover:bg-gray-100 transition duration-150 ease-in-out hover:border-indigo-700 hover:text-indigo-600 rounded border border-indigo-600 text-indigo-600 px-6 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className="w-5/6 xl:w-[30%] lg:w-1/3 sm:w-5/12 md:w-5/12 mx-auto rounded-lg hover:bg-gradient-to-r p-[4px] from-pink-500 via-red-500 to-yellow-500">
          <div className="w-full h-full mx-auto mb-4 shadow rounded-lg bg-gray-100 flex flex-col justify-between">
            <div>
              <div className="pt-6 px-8 pb-6">
                <h4 className="text-2xl text-center text-gray-800 pb-3 font-bold">
                  Plus Version
                </h4>
                <p className="text-sm text-center text-gray-600 pb-5 leading-normal px-10"></p>
                <p className="text-base text-center text-gray-600 font-bold">
                  ${" "}
                  <span className="text-4xl text-indigo-700 font-medium px-2">
                    10
                  </span>
                  /mo
                </p>
              </div>

              <p className="text-center mb-4 text-gray-600 font-bold">
                Individual account
              </p>

              <div className="border-b border-[1px] border-gray-300 mx-8"></div>

              <div className="pt-6 pr-8 pl-8">
                <ul className="flex flex-col items-start">
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      Everything from Free Version
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      Respond to thread anonymously
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center pb-8">
              <button className="focus:outline-none bg-indigo-500 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* 3rd card */}
        <div className="w-5/6 xl:w-[30%] lg:w-1/3 sm:w-5/12 md:w-5/12 mx-auto rounded-lg hover:bg-gradient-to-r p-[4px] from-pink-500 via-red-500 to-yellow-500">
          <div className="w-full h-full mx-auto shadow rounded-lg bg-gray-100 flex flex-col justify-between">
            <div>
              <div className="pt-6 px-8 pb-6">
                <h4 className="text-2xl text-center text-gray-800 pb-3 font-bold">
                  Team Version
                </h4>
                <p className="text-sm text-center text-gray-600 pb-5 leading-normal px-10"></p>
                <p className="text-base text-center text-gray-600 font-bold">
                  ${" "}
                  <span className="text-4xl text-indigo-700 font-medium px-2">
                    99
                  </span>
                  /mo
                </p>
              </div>

              <p className="text-center mb-4 text-gray-600 font-bold">
                Team account
              </p>

              <div className="border-b border-[1px] border-gray-300 mx-8"></div>

              <div className="pt-6 pr-8 pl-8">
                <ul className="flex flex-col items-start">
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      Everything from Plus Version
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      Available for all members
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      Black list: block some users
                    </p>
                  </li>
                  <li className="flex items-center mb-4">
                    <div className="h-1 w-1 rounded-full bg-indigo-700" />
                    <p className="pl-2 text-gray-600 text-base">
                      White list: allow only some users
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center pb-8">
              <button className="focus:outline-none bg-white hover:bg-gray-100 transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-700 rounded border border-indigo-600 text-indigo-600 px-6 py-2 text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
