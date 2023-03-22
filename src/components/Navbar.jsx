import { useState } from "react";
import icon from "../assets/icons8-ios-photos.svg";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <nav className="bg-gray-900 shadow-sm shadow-gray-500 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex w-full justify-between items-center ">
            <div className="flex-shrink-0">
              <a href="#" className="text-white text-2xl font-bold">
                My Website
              </a>
            </div>
            <div className="hidden md:flex flex-row items-center">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="#Hero"
                  smooth
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>

                <Link
                  to="#about"
                  smooth
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "end" })
                  }
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>

                <Link
                  to="#Testimonials"
                  smooth
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Testimonials
                </Link>
                <Link
                  to="#pricing"
                  offset={0}
                  smooth
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Pricing
                </Link>

                <Link
                  to="#faq"
                  smooth
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  FAQ
                </Link>
              </div>
              <button className="bg-white text-black font-semibold px-4 py-2 rounded-md hover:bg-gray-100 flex flex-row items-center">
                <img src={icon} alt="logo" className="w-8" />
                Add to Slack
              </button>
            </div>
          </div>
          <div className="-mr-2 w-full  flex justify-end md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {/* <button className="bg-white text-sm text-black font-semibold whitespace-nowrap px-2 py-1 rounded-md hover:bg-gray-100 flex flex-row items-center">
              <img src={icon} alt="logo" className="w-6" />
              Add to Slack
            </button> */}
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu">
        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="#Hero"
            onClick={() => setIsMobileMenuOpen(false)}
            smooth
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>

          <Link
            to="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            smooth
            scroll={(el) =>
              el.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>

          <Link
            to="#Testimonials"
            onClick={() => setIsMobileMenuOpen(false)}
            smooth
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Testimonials
          </Link>
          <Link
            to="#pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            smooth
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Pricing
          </Link>

          <Link
            to="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            smooth
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
