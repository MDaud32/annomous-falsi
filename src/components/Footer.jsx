import React from "react";

const Footer = () => {
  return (
    <div className="px-6 md:px-28 flex flex-col justify-center w-full py-12 mx-auto bg-[#292C31]">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="w-full md:max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 justify-center">
          <div className="text-gray-500 text-md flex flex-col">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Features
            </a>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <a href="#" className="hover:text-white">
              Install
            </a>
          </div>

          <div className="text-gray-500 text-md flex flex-col">
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Support
            </a>
            <a href="#" className="hover:text-white">
              FAQ
            </a>
            <a href="#" className="hover:text-white">
              3rd Party License
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <p className="text-xl mb-4 font-bold text-indigo-400 uppercase">
            About Us
          </p>
          <p className="text-[12px] max-w-sm text-gray-500">
            Hi, I'm Falci 👋. <br />
            Anonymous bot for Slack is a personal
            <br /> project to solve a common need: <br />
            anonymous feedback.
          </p>
        </div>
      </div>
      <div className="mt-8 border-t-[1px] border-gray-500">
        <p className="text-gray-500 text-md text-center md:text-end mt-4">
          © 2023 Vercel, Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
