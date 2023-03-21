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
    <div className=" py-10 px-5 sm:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-100 text-center mb-10">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(({ name, testimonial }) => (
          <div
            key={name}
            className="flex flex-col bg-gray-200 rounded-lg p-5 text-center justify-between">
            <p className="text-gray-900 text-lg mb-4">{testimonial}</p>
            <p className="text-gray-600 text-md">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
