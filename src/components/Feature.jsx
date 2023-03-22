import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      testimonial:
        "I love using this anonymous messaging bot in Slack! It's so easy to use and allows me to give feedback to coworkers without the fear of being judged. It's really helped improve communication and collaboration on our team!",
    },
    {
      name: "Jane Smith",
      testimonial:
        "As a manager, I've found this anonymous messaging bot to be incredibly useful for gathering honest feedback from my team. It's helped me identify areas where we need to improve and has even led to some great new ideas and innovations!",
    },
    {
      name: "Bob Johnson",
      testimonial:
        "I was hesitant to use an anonymous messaging bot at first, but after giving it a try, I'm really impressed! It's a great way to share ideas without worrying about being judged, and it's helped me build stronger relationships with my colleagues.",
    },
    {
      name: "Sara Lee",
      testimonial:
        "This anonymous messaging bot has been a game-changer for our team. It's helped us address some sensitive issues that we might not have been able to discuss openly otherwise, and it's really improved our overall communication and productivity.",
    },
    {
      name: "Mike Davis",
      testimonial:
        "I never realized how much I needed an anonymous messaging bot until I started using this one! It's made it so much easier to share my thoughts and ideas without feeling self-conscious or worried about how others might react.",
    },
    {
      name: "Emily Wong",
      testimonial:
        "I've used a few different anonymous messaging bots in the past, but this one is by far the best. It's so user-friendly and intuitive, and it's really helped our team foster a culture of openness and honesty.",
    },
  ];

  return (
    <section id="Testimonials" className="bg-indigo-800 mt-28">
      <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-6 md:flex md:flex-col md:border-r md:border-indigo-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16">
          <div className="md:flex-shrink-0">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
              alt="Tuple"
            />
          </div>
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    Judith Black
                  </div>
                  <div className="text-base font-medium text-indigo-200">
                    CEO, Tuple
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="border-t-2 border-indigo-900 py-12 px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
          <div className="md:flex-shrink-0">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
              alt="Workcation"
            />
          </div>
          <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
            <div className="relative text-lg font-medium text-white md:flex-grow">
              <svg
                className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600"
                fill="currentColor"
                viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis. Nemo expedita
                voluptas culpa sapiente alias molestiae.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-white">
                    Joseph Rodriguez
                  </div>
                  <div className="text-base font-medium text-indigo-200">
                    CEO, Workcation
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
